"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const CustomGeometryParticles = (props) => {
  const { count, shape } = props;

  const points = useRef();
  const { viewport, camera } = useThree();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    if (shape === "box") {
      for (let i = 0; i < count; i++) {
        let x = (Math.random() - 0.5) * 2;
        let y = (Math.random() - 0.5) * 2;
        let z = (Math.random() - 0.5) * 2;

        positions.set([x, y, z], i * 3);
      }
    }

    if (shape === "sphere") {
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const radius = 0.5; // Adjust as needed

        let x = radius * Math.sin(theta) * Math.cos(phi);
        let y = radius * Math.sin(theta) * Math.sin(phi);
        let z = radius * Math.cos(theta);

        positions.set([x, y, z], i * 3);
      }
    }

    return positions;
  }, [count, shape]);

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    mouse.set(x, y);
  };

  // Add a mousemove event listener to track mouse movement
  window.addEventListener("mousemove", handleMouseMove);

  useFrame(() => {
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObject(points.current);
    if (intersects.length > 0) {
      const positionArray = points.current.geometry.attributes.position.array;

      for (let i = 0; i < count; i++) {
        const x = positionArray[i * 3];
        const y = positionArray[i * 3 + 1];
        const z = positionArray[i * 3 + 2];

        const distance = Math.sqrt(
          (x - mouse.x) ** 2 + (y - mouse.y) ** 2 + (z - mouse.z) ** 2
        );

        // Adjust this factor to control the particle's sensitivity to the mouse
        const sensitivityFactor = 0.2;

        // Move the particle away from the mouse if it's close
        if (distance < 0.1) {
          positionArray[i * 3] += (x - mouse.x) * sensitivityFactor;
          positionArray[i * 3 + 1] += (y - mouse.y) * sensitivityFactor;
          positionArray[i * 3 + 2] += (z - mouse.z) * sensitivityFactor;
        }
      }

      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#5786F5" sizeAttenuation depthWrite={false} />
    </points>
  );
};

const Sphere = () => {
  return (
    <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
      <ambientLight intensity={0.5} />
      <CustomGeometryParticles count={2000} shape="sphere" />
      <OrbitControls />
    </Canvas>
  );
};

export default Sphere;
