"use client";
import { useUi } from "@/store/Ui";

const UiStore = () => {
    const { uiStore, uiActions } = useUi();
    debugger
    return (
        <div className="flex items-center justify-between w-full h-full">


            <div className="text-black">
                <h6>Loading</h6>
                <p>{uiStore.loading.toString()}</p>
            </div>

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
