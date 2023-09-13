"use client";
import { useUi } from "@/store/Ui";

const UiStore = () => {
  const { uiStore, uiActions } = useUi();
  const parent = "text-center flex flex-col items-center justify-center"
  const title = "font-bold text-lg text-black";
  const p = "text-sm text-gray-500";

  const data = [
    {
        title: "Is Mobile",
        value: uiStore.isMobile.toString()
    },
    {
        title: "Is Loading",
        value: uiStore.isLoading ? "true" : "false"
    },
    {
        title: "Is Mobile Nav Open",
        value: uiStore.isMobileNavOpen ? "true" : "false"
    },
    {
        title: "Scroll Position",
        value: uiStore.scrollPosition
    },
    {
        title: "Scroll Direction",
        value: uiStore.scrollDirection
    }
  ]
  return (
    <div className="flex items-center justify-between w-full h-full">
        {data.map((item, index) => (
            <div key={index} className={parent}>
                <h6 className={title}>{item.title}</h6>
                <p className={p}>{item.value}</p>
            </div>
        ))}
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
