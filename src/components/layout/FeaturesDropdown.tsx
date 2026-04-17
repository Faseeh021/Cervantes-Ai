"use client";

import React from "react";
import {
  VideoGeneratorIcon,
  ClipGeneratorIcon,
  VideoEditorIcon,
  ContentGeneratorIcon,
  ContentTemplatesIcon,
  ImageGeneratorIcon,
  AvatarsIcon,
  RepurposeEngineIcon,
  AutomationIcon,
  SocialSchedulerIcon,
  MediaLibraryIcon,
} from "./FeaturesIcons";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureColumn {
  heading: string;
  items: FeatureItem[];
}

const featureColumns: FeatureColumn[] = [
  {
    heading: "AI VIDEOS",
    items: [
      { title: "AI Video Generator", description: "Turn ideas into videos with AI", icon: <VideoGeneratorIcon /> },
      { title: "Clip Generator", description: "Turn long videos into short clips", icon: <ClipGeneratorIcon /> },
      { title: "Video Editor", description: "Edit and enhance videos easily", icon: <VideoEditorIcon /> },
    ],
  },
  {
    heading: "AI CONTENT",
    items: [
      { title: "AI Content Generator", description: "Create scripts, captions, and marketing content fast", icon: <ContentGeneratorIcon /> },
      { title: "Content Templates", description: "Start from proven formats and ready-to-use structures", icon: <ContentTemplatesIcon /> },
    ],
  },
  {
    heading: "AI IMAGE & AI AVATARS",
    items: [
      { title: "AI Image Generator", description: "Generate high-quality images from text", icon: <ImageGeneratorIcon /> },
      { title: "AI Avatars", description: "Create talking avatars for your videos", icon: <AvatarsIcon /> },
    ],
  },
  {
    heading: "REPURPOSE & AUTOMATION",
    items: [
      { title: "Repurpose Engine", description: "Turn existing content into multiple formats", icon: <RepurposeEngineIcon /> },
      { title: "Automation Workflows", description: "Automate your entire content process", icon: <AutomationIcon /> },
      { title: "Social Scheduler", description: "Plan and publish content across platforms", icon: <SocialSchedulerIcon /> },
      { title: "Media Library", description: "Store and manage all your content in one place", icon: <MediaLibraryIcon /> },
    ],
  },
];

interface FeaturesDropdownProps {
  visible: boolean;
}

export function FeaturesDropdown({ visible }: FeaturesDropdownProps) {
  return (
    <div
      className={`absolute top-full left-0 right-0 transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div
        className="w-[95%] max-w-[1303px] mx-auto bg-white overflow-hidden"
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div className="px-8 lg:px-12 py-8 lg:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-10 gap-y-8">
            {featureColumns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-6">
                <h4
                  className="font-outfit font-normal text-[20px] leading-[25px] uppercase"
                  style={{ color: "#22243A" }}
                >
                  {col.heading}
                </h4>
                {col.items.map((item) => (
                  <button
                    key={item.title}
                    className="flex items-center gap-3 text-left rounded-[10px] transition-colors duration-200 hover:bg-[#F8F3FD] group cursor-pointer"
                    style={{ padding: "12px 18px 12px 5px" }}
                  >
                    <div
                      className="flex-shrink-0 flex items-center justify-center w-[46px] h-[46px] rounded-[10px]"
                      style={{ background: "#FAF6FF" }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-outfit font-normal text-[18px] leading-[23px] text-[#6D6D6D] group-hover:text-[#781EE0] transition-colors">
                        {item.title}
                      </span>
                      <span className="font-outfit font-normal text-[13px] leading-[16px] text-[#A1A1A1]">
                        {item.description}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Purple gradient bottom bar */}
        <div
          className="w-full h-[5px]"
          style={{
            background: "linear-gradient(90deg, #781EE0 0%, #9D4EDD 50%, #781EE0 100%)",
          }}
        />
      </div>
    </div>
  );
}

export default FeaturesDropdown;
