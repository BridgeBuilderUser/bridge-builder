"use client";
import { useUi } from "@/store/Ui";

const UiStore = () => {
    const { uiStore, uiActions } = useUi();
    const title = 'font-bold text-2xl text-black'
    return (
        <div className="flex items-center justify-between w-full h-full">


            <div className="text-black">
                <h6 className={title}>Loading</h6>
                <p>{uiStore.loading === true ? 'True' : 'False'}</p>
            </div>
            <div className="text-black">
                <h6>Mobile Nav</h6>
                <p>{uiStore.isMobileNavOpen === true ? 'True' : 'False'}</p>
            </div>
            <div className="text-black">
                <h6>Is Mobile</h6>
                <p>{uiStore.isMobile === true ? 'True' : 'False'}</p>
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
