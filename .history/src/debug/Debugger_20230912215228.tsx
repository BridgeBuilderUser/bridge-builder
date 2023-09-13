"use client";
import { useUi } from "@/store/Ui";

const UiStore = () => {
    const { uiStore, uiActions } = useUi();

    return (
        <div className="flex items-center justify-between w-full h-full">
        {Object.keys(uiStore).map((key) => {
          return (
            <div key={key} className="text-black">
              {key}: {uiStore[key]}
            </div>
          );
        })}
      </div>
    )
}

export default function Debugger() {
  
  return (
    <section
      id="debugger"
      className="p-5 rounded-xl bg-white shadow-xl fixed z-50 left-1/2"
    >
        <UiStore />
    </section>
  );
}
