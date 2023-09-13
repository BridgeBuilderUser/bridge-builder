"use client";

export default function Debugger() {
  const { uiStore, uiActions } = useUi();
  return (
    <section
      id="debugger"
      className="p-5 rounded-xl bg-white shadow-xl fixed z-50 left-1/2"
    >
      <div className="flex items-center justify-center w-full h-full">
        {Object.keys(uiStore).map((key) => {
          return (
            <div className="">
              {key}: {uiStore[key]}
            </div>
          );
        })}
      </div>
    </section>
  );
}
