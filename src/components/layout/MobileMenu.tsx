"use client";

import React, { useState } from "react";
import Link from "next/link";
import { platformItems } from "./PlatformDropdown";
import { featureColumns } from "./FeaturesDropdown";

type ExpandedSection = "Platform" | "Features" | null;

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

interface MobileItem {
  title: string;
  icon: React.ReactNode;
}

const extraLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
    >
      <path
        d="M4.5 6.75L9 11.25L13.5 6.75"
        stroke="#0E0E0E"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileItemRow({ item }: { item: MobileItem }) {
  return (
    <button className="flex items-center gap-3 text-left py-2 active:bg-[#F8F3FD] rounded-[8px] transition-colors">
      <div
        className="flex-shrink-0 flex items-center justify-center w-[40px] h-[40px] rounded-[8px]"
        style={{ background: "#FAF6FF" }}
      >
        {item.icon}
      </div>
      <span className="font-plus-jakarta font-medium text-[15px] leading-[20px] text-[#3A3A3A]">
        {item.title}
      </span>
    </button>
  );
}

function SectionHeading({ label }: { label: string }) {
  return (
    <h4
      className="font-outfit font-normal text-[13px] tracking-[0.04em] uppercase text-[#22243A] pb-2 mb-3"
      style={{ borderBottom: "1.5px solid #781EE0" }}
    >
      {label}
    </h4>
  );
}

interface TriggerProps {
  label: string;
  expanded: boolean;
  onToggle: () => void;
}

function ExpandableTrigger({ label, expanded, onToggle }: TriggerProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full py-3.5 px-4 font-plus-jakarta font-medium text-[16px] text-[#0E0E0E]"
    >
      <span>{label}</span>
      <ChevronIcon expanded={expanded} />
    </button>
  );
}

function PlatformSection({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) {
  const trigger = (
    <ExpandableTrigger label="Platform" expanded={expanded} onToggle={onToggle} />
  );
  if (!expanded) return trigger;
  return (
    <div className="rounded-2xl border border-[#EDEDED] bg-white overflow-hidden">
      {trigger}
      <div className="px-4 pb-5">
        <SectionHeading label="PLATFORM" />
        <div className="flex flex-col gap-1">
          {platformItems.map((item) => (
            <MobileItemRow key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturesSection({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) {
  const trigger = (
    <ExpandableTrigger label="Features" expanded={expanded} onToggle={onToggle} />
  );
  if (!expanded) return trigger;
  return (
    <div className="rounded-2xl border border-[#EDEDED] bg-white overflow-hidden">
      {trigger}
      <div className="px-4 pb-5 flex flex-col gap-5">
        {featureColumns.map((col) => (
          <div key={col.heading}>
            <SectionHeading label={col.heading} />
            <div className="flex flex-col gap-1">
              {col.items.map((item) => (
                <MobileItemRow key={item.title} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AuthButtons({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col gap-3 mt-3 pt-4 border-t border-gray-200">
      <Link
        href="/login"
        className="flex items-center justify-center h-[48px] px-5 pr-2 gap-3 rounded-full active:scale-[0.98] transition-transform"
        style={{ background: "#F8F3FD", border: "1px solid #EEEEEE" }}
        onClick={onClose}
      >
        <span className="font-plus-jakarta font-semibold text-base text-[#0E0E0E]">
          Log In
        </span>
        <span
          className="flex items-center justify-center w-8 h-8 rounded-full"
          style={{ background: "#9D4EDD" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
      <Link
        href="/start-free"
        className="flex items-center justify-center h-[48px] px-5 pr-2 gap-3 rounded-full active:scale-[0.98] transition-transform"
        style={{ background: "#781EE0" }}
        onClick={onClose}
      >
        <span className="font-plus-jakarta font-semibold text-base text-white">
          Start Free
        </span>
        <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none">
            <path
              d="M1 5.5H11M11 5.5L6.5 1M11 5.5L6.5 10"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<ExpandedSection>(null);

  const toggle = (section: Exclude<ExpandedSection, null>) =>
    setExpandedSection((prev) => (prev === section ? null : section));

  return (
    <>
      <div
        className={`absolute top-full left-0 right-0 mt-2 mx-4 md:hidden z-50 transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          maxHeight: "calc(100vh - 100px)",
          overflowY: "auto",
        }}
      >
        <div
          className="flex flex-col gap-1 rounded-3xl p-3"
          style={{
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(230, 230, 230, 0.8)",
            boxShadow:
              "0 25px 50px rgba(120, 30, 224, 0.08), 0 10px 30px rgba(0, 0, 0, 0.06)",
          }}
        >
          <PlatformSection
            expanded={expandedSection === "Platform"}
            onToggle={() => toggle("Platform")}
          />
          <FeaturesSection
            expanded={expandedSection === "Features"}
            onToggle={() => toggle("Features")}
          />
          {extraLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-start py-3.5 px-4 font-plus-jakarta font-medium text-[16px] text-[#0E0E0E]"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
          <AuthButtons onClose={onClose} />
        </div>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden -z-10"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default MobileMenu;
