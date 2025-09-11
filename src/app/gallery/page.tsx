"use client";

import { Suspense, useState, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import projects from "~/data/projects";
import events from "~/data/events";
import workshops from "~/data/workshops";
import { Events } from "~/components/gallery/Events";
import { Projects } from "~/components/gallery/Projects";
import { Resources } from "~/components/gallery/Resources";

function GalleryClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initialTab = searchParams?.get("tab") || "Events";

  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [prevTab, setPrevTab] = useState<string | null>(null);

  const [tabWidth, setTabWidth] = useState<number>(0);
  const [tabLeft, setTabLeft] = useState<number>(0);
  const tabRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (tabRef.current) {
      setTabWidth(tabRef.current.offsetWidth);
      setTabLeft(tabRef.current.offsetLeft);
    }
  }, [activeTab]);

  const handleTabChange = (newTab: string) => {
    setPrevTab(activeTab);
    setActiveTab(newTab);

    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("tab", newTab);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // keep state in sync when the URL changes
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab") || "Events";
    if (tabFromUrl !== activeTab) {
      setPrevTab(activeTab);
      setActiveTab(tabFromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const tabs = ["Events", "Projects", "Resources"];

  return (
    <div className="min-h-[85vh]">
      <main className="pt-32 pb-5 flex flex-col justify-center items-center space-y-10 md:mx-0 mx-10 ">
        <h1 className="md:text-6xl text-5xl">Club Gallery</h1>
        <div className="relative flex justify-center mb-4">
          <div
            className="absolute h-0.5 bg-primary transition-all ease-in-out duration-500"
            style={{
              width: tabWidth,
              left: tabLeft,
              bottom: 0,
            }}
          />

          {tabs.map((tab, index) => (
            <button
              type="button"
              key={index}
              ref={activeTab === tab ? tabRef : null}
              onClick={() => handleTabChange(tab)}
              className={`py-2 px-4 text-base font-medium transition-colors duration-200 rounded-t-md border-b-2 border-transparent
              ${
                activeTab === tab
                  ? "text-primary bg-gray-400/10"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/10 hover:border-gray-200/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </main>
      <div className="overflow-hidden">
        {activeTab === "Events" && <Events events={events} />}

        {activeTab === "Projects" && (
          <Projects projects={projects} prevTab={prevTab} />
        )}

        {activeTab === "Resources" && <Resources workshops={workshops} />}
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="min-h-[85vh]" />}> 
      <GalleryClient />
    </Suspense>
  );
}
