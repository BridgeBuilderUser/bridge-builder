"use client";

export default function Debug() {

    return (
        <section
            className="fixed bottom-10 left-1/2 z-50 w-[80vw] p-5 rounded-xl bg-gray-300"
        >
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-1/2 h-1/2 bg-white">
                    <h1 className="text-4xl font-bold text-center">Debug</h1>
                </div>
            </div>
        </section>
    );
}