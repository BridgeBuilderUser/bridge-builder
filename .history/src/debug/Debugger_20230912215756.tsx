"use client";
import { useUi } from "@/store/Ui";

const UiStore = () => {
  const { uiStore, uiActions } = useUi();
  const parent = "text-center flex flex-col items-center justify-center"
  const title = "font-bold text-lg text-black";
  const p = "text-sm text-gray-500";
  return (
    <div className="flex items-center justify-between w-full h-full">
      <div className={parent}>
        <h6 className={title}>Loading</h6>
        <p className={p}>{uiStore.loading === true ? "True" : "False"}</p>
      </div>
      <div className={parent}>
        <h6 className={title}>Mobile Nav</h6>
       <p className={p}>{uiStore.isMobileNavOpen === true ? "True" : "False"}</p>
      </div>
      <div className={parent}>
        <h6 className={title}>Is Mobile</h6>
       <p className={p}>{uiStore.isMobile === true ? "True" : "False"}</p>
      </div>
    </div>
  );
};

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
