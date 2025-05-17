import React from "react";
import error from "../assets/error.png";

export function ErrorPage() {
    return (
        <main>
            <section className="flex flex-col pb-44 text-base text-center bg-leafGreen max-md:pb-24 max-md:max-w-full">
                <img
                    src={error}
                    className="object-contain self-center mt-9 mb-0 max-w-full aspect-[1.5] w-[688px] max-md:mb-2.5"
                />
            </section>
        </main>
    );
};