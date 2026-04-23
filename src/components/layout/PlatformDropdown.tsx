"use client";

import React from "react";

interface PlatformItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ContentEngineIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_content)">
        <path d="M21.1489 12.2045C21.6875 11.1334 22.6213 10.3281 23.7824 9.9394C24.2683 9.77633 24.769 9.71378 25.2675 9.71155V3.35074C25.2675 1.50336 23.7216 0 21.8219 0H3.44556C1.54591 0 0 1.50336 0 3.35074V25.689C0 27.5363 1.54591 29.0397 3.44556 29.0397H14.8722L14.7482 28.689C14.2486 27.2716 14.3462 25.7571 15.0204 24.4179L21.1489 12.2045ZM4.59409 6.70147H18.3763C19.0115 6.70147 19.5249 7.20185 19.5249 7.81838C19.5249 8.43492 19.0115 8.93529 18.3763 8.93529H4.59409C3.95895 8.93529 3.44556 8.43492 3.44556 7.81838C3.44556 7.20185 3.95895 6.70147 4.59409 6.70147ZM4.59409 11.1691H17.2278C17.863 11.1691 18.3763 11.6695 18.3763 12.286C18.3763 12.9026 17.863 13.4029 17.2278 13.4029H4.59409C3.95895 13.4029 3.44556 12.9026 3.44556 12.286C3.44556 11.6695 3.95895 11.1691 4.59409 11.1691ZM12.6337 22.3382H4.59409C3.95895 22.3382 3.44556 21.8379 3.44556 21.2213C3.44556 20.6048 3.95895 20.1044 4.59409 20.1044H12.6337C13.2689 20.1044 13.7823 20.6048 13.7823 21.2213C13.7823 21.8379 13.2689 22.3382 12.6337 22.3382ZM4.59409 17.8706C3.95895 17.8706 3.44556 17.3702 3.44556 16.7537C3.44556 16.1371 3.95895 15.6368 4.59409 15.6368H14.9308C15.5659 15.6368 16.0793 16.1371 16.0793 16.7537C16.0793 17.3702 15.5659 17.8706 14.9308 17.8706H4.59409ZM29.4067 16.1226L23.2759 28.3405C22.8705 29.1458 22.1688 29.7489 21.2993 30.0393L19.1275 30.7653C19.0046 30.8067 18.8771 30.8268 18.7542 30.8268C18.2776 30.8268 17.8319 30.5364 17.6689 30.0728L16.9212 27.9608C16.6214 27.1119 16.68 26.2028 17.0843 25.3997L23.2151 13.184C23.4827 12.6479 23.9513 12.2458 24.5313 12.0515C25.1101 11.8571 25.7338 11.8929 26.2851 12.1565L28.3501 13.136C28.9014 13.3974 29.3149 13.8531 29.5147 14.4171C29.7145 14.9811 29.6766 15.5865 29.4067 16.1226Z" fill="#782CDE"/>
      </g>
      <defs>
        <filter id="filter0_i_content" x="0" y="0" width="29.6411" height="34.8268" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.33 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
      </defs>
    </svg>
  );
}

function RepurposeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_repurpose)">
        <path d="M24.6953 0C22.3531 0 20.4473 1.90587 20.4473 4.24805C20.4473 5.11248 20.7097 5.97205 21.1551 6.64355L18.0451 9.75347C17.2688 9.17202 16.3521 8.78394 15.3496 8.63858V4.94123C16.3364 4.58922 17.0488 3.65509 17.0488 2.54883C17.0488 1.14343 15.9054 0 14.5 0C13.0946 0 11.9512 1.14343 11.9512 2.54883C11.9512 3.65509 12.6636 4.58922 13.6504 4.94123V8.63858C12.6479 8.78394 11.7312 9.17202 10.9549 9.75347L8.07129 6.86989C8.36976 6.36455 8.55273 5.78265 8.55273 5.1543C8.55273 3.28007 7.02853 1.75586 5.1543 1.75586C3.28007 1.75586 1.75586 3.28007 1.75586 5.1543C1.75586 7.02853 3.28007 8.55273 5.1543 8.55273C5.78265 8.55273 6.36455 8.36976 6.86989 8.07129L9.75347 10.9549C9.17202 11.7312 8.78394 12.6479 8.63858 13.6504H4.94123C4.58922 12.6636 3.65509 11.9512 2.54883 11.9512C1.14343 11.9512 0 13.0946 0 14.5C0 15.9054 1.14343 17.0488 2.54883 17.0488C3.65509 17.0488 4.58922 16.3364 4.94123 15.3496H8.63858C9.01471 17.9442 11.0558 19.9853 13.6504 20.3614V22.2671C12.1886 22.647 11.1016 23.9656 11.1016 25.5449C11.1016 27.4192 12.6258 29 14.5 29C16.3742 29 17.8984 27.4192 17.8984 25.5449C17.8984 23.9656 16.8114 22.647 15.3496 22.2671V20.3614C16.8535 20.1435 18.1635 19.3671 19.0839 18.242L22.2129 20.7373C22.1719 20.9181 22.1465 21.1042 22.1465 21.2969C22.1465 22.7023 23.2899 23.8457 24.6953 23.8457C26.1007 23.8457 27.2441 22.7023 27.2441 21.2969C27.2441 19.8915 26.1007 18.748 24.6953 18.748C24.1039 18.748 23.566 18.9587 23.1333 19.2979L19.9866 16.7884C20.2818 16.0835 20.4473 15.3109 20.4473 14.5C20.4473 13.167 19.9904 11.9479 19.2465 10.9549L22.3565 7.84495C23.028 8.29033 23.8309 8.55273 24.6953 8.55273C27.0375 8.55273 29 6.59023 29 4.24805C29 1.90587 27.0375 0 24.6953 0Z" fill="#781EE0"/>
      </g>
      <defs>
        <filter id="filter0_i_repurpose" x="0" y="0" width="29" height="33" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
      </defs>
    </svg>
  );
}

function ProductionStudioIcon() {
  return (
    <svg width="28" height="24" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_studio)">
        <path d="M28.3442 11.2599C27.7152 10.8984 26.9662 10.901 26.3392 11.2666L22.6786 13.4023V20.6161L26.3392 22.7519C26.6547 22.936 27.0009 23.028 27.3477 23.028C27.6899 23.028 28.0321 22.9387 28.3442 22.7592C28.9732 22.3977 29.3488 21.7494 29.3488 21.0243V12.9961C29.3488 12.2711 28.9732 11.6207 28.3442 11.2599Z" fill="#781EE0"/>
        <path d="M19.078 10.1967C20.452 9.16213 21.3445 7.52194 21.3445 5.66963C21.3445 2.53866 18.8058 0 15.6749 0C12.5439 0 10.0052 2.53866 10.0052 5.66963C10.0052 7.40988 10.791 8.96536 12.025 10.0052H8.39573C9.38291 9.09142 10.0052 7.78808 10.0052 6.33665C10.0052 3.57387 7.7654 1.33403 5.00262 1.33403C2.23984 1.33403 0 3.57387 0 6.33665C0 7.95616 0.773071 9.39225 1.96703 10.3067C0.810424 10.831 0 11.9903 0 13.3403V20.6775C0 22.5165 1.49612 24.0126 3.33508 24.0126H18.0094C19.8484 24.0126 21.3445 22.5165 21.3445 20.6775V13.3403C21.3445 11.8769 20.3913 10.6449 19.078 10.1967ZM3.00157 6.33665C3.00157 5.2314 3.89737 4.3356 5.00262 4.3356C6.10786 4.3356 7.00367 5.2314 7.00367 6.33665C7.00367 7.4419 6.10786 8.3377 5.00262 8.3377C3.89737 8.3377 3.00157 7.4419 3.00157 6.33665ZM6.67016 20.6775H4.00209C3.6339 20.6775 3.33508 20.3787 3.33508 20.0105C3.33508 19.6423 3.6339 19.3435 4.00209 19.3435H6.67016C7.03835 19.3435 7.33717 19.6423 7.33717 20.0105C7.33717 20.3787 7.03835 20.6775 6.67016 20.6775ZM15.6749 8.3377C14.2014 8.3377 13.0068 7.14307 13.0068 5.66963C13.0068 4.1962 14.2014 3.00157 15.6749 3.00157C17.1483 3.00157 18.3429 4.1962 18.3429 5.66963C18.3429 7.14307 17.1483 8.3377 15.6749 8.3377Z" fill="#781EE0"/>
      </g>
      <defs>
        <filter id="filter0_i_studio" x="0" y="0" width="29.3488" height="24.0126" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="1.39515"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
      </defs>
    </svg>
  );
}

function MediaGenerationIcon() {
  return (
    <svg width="28" height="24" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_media)">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.4429 15.6952C14.0571 15.6951 14.6575 15.5199 15.1682 15.1917C15.6788 14.8635 16.0768 14.3971 16.3118 13.8514C16.5467 13.3058 16.6082 12.7053 16.4883 12.1261C16.3684 11.5469 16.0726 11.0148 15.6382 10.5973C15.2038 10.1797 14.6505 9.89534 14.048 9.78016C13.4456 9.66498 12.8212 9.72415 12.2538 9.95018C11.6863 10.1762 11.2013 10.559 10.8601 11.05C10.5188 11.5411 10.3367 12.1184 10.3367 12.709C10.3376 13.5008 10.6651 14.26 11.2475 14.8198C11.8299 15.3797 12.6194 15.6945 13.4429 15.6952ZM29.8027 21.3532L22.5719 11.6875C22.4416 11.5134 22.2702 11.3715 22.0717 11.2737C21.8731 11.1759 21.6533 11.1248 21.4302 11.1248C21.2071 11.1248 20.9873 11.1759 20.7887 11.2737C20.5902 11.3715 20.4188 11.5134 20.2885 11.6875L13.3159 21.0072L9.61809 16.0645C9.48784 15.8904 9.31637 15.7485 9.11787 15.6507C8.91936 15.5529 8.69949 15.5019 8.47643 15.5019C8.25337 15.5019 8.0335 15.5529 7.83499 15.6507C7.63648 15.7485 7.46502 15.8904 7.33477 16.0645L1.46577 23.9092V8.20326H29.8028V21.3532H29.8027ZM2.87034 26.8665C2.10937 26.8656 1.37984 26.5746 0.841757 26.0572C0.30367 25.5398 0.000953466 24.8383 0 24.1066V2.75995C0.000905088 2.02823 0.303606 1.32673 0.841704 0.80933C1.3798 0.291929 2.10936 0.000870277 2.87034 0H28.3981C29.1591 0.000761697 29.8887 0.291785 30.4268 0.809211C30.965 1.32664 31.2676 2.0282 31.2684 2.75995V24.1067C31.2676 24.8384 30.9649 25.5399 30.4268 26.0573C29.8887 26.5748 29.1591 26.8658 28.3981 26.8666L2.87034 26.8665ZM4.46919 4.80618H12.1153C12.3097 4.80618 12.4961 4.73194 12.6335 4.59979C12.7709 4.46764 12.8481 4.2884 12.8481 4.10151C12.8481 3.91462 12.7709 3.73539 12.6335 3.60324C12.4961 3.47109 12.3097 3.39685 12.1153 3.39685H4.46919C4.27482 3.39685 4.08842 3.47109 3.95098 3.60324C3.81354 3.73539 3.73633 3.91462 3.73633 4.10151C3.73633 4.2884 3.81354 4.46764 3.95098 4.59979C4.08842 4.73194 4.27482 4.80618 4.46919 4.80618Z" fill="#782CDE"/>
      </g>
      <defs>
        <filter id="filter0_i_media" x="0" y="0" width="31.2683" height="30.8666" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.37 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
      </defs>
    </svg>
  );
}

function SocialAutomationIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_social)">
        <path d="M27.5906 15.6339C27.5906 14.9893 27.5372 14.3572 27.436 13.7408L31.2677 11.0288L27.5012 4.60518L23.1988 6.51698C22.2089 5.71972 21.0867 5.07606 19.8698 4.62195L19.4004 0H11.8673L11.3979 4.62188C10.1809 5.076 9.05876 5.71966 8.06888 6.51692L3.76656 4.60511L0 11.0288L3.8317 13.7408C3.73048 14.3572 3.6771 14.9893 3.6771 15.6339C3.6771 16.2784 3.73055 16.9105 3.8317 17.5269L0 20.239L3.76656 26.6626L8.06895 24.7507C9.05882 25.548 10.181 26.1917 11.398 26.6458L11.8673 31.2677H19.4004L19.8698 26.6459C21.0867 26.1917 22.2089 25.5481 23.1988 24.7508L27.5012 26.6626L31.2677 20.239L27.436 17.5269C27.5373 16.9105 27.5906 16.2784 27.5906 15.6339ZM8.4336 17.5582L5.87266 15.4224L7.15283 13.8873L8.03988 14.6271C8.47055 11.3496 11.0557 8.66577 14.3042 8.093C16.9089 7.6336 19.5266 8.52968 21.3068 10.4895L19.8272 11.8335C18.5111 10.3846 16.5761 9.72233 14.6513 10.0615C12.1958 10.4944 10.2629 12.5569 10.0054 15.0424L11.3702 14.2012L12.419 15.9029L9.59806 17.6415C9.43651 17.741 8.9413 17.9629 8.4336 17.5582ZM24.1148 17.3805L23.2278 16.6407C22.7972 19.9181 20.2121 22.602 16.9635 23.1747C14.2624 23.651 11.4425 22.603 9.70516 20.4816L11.2516 19.2152C12.5481 20.7982 14.6038 21.5611 16.6165 21.2063C19.072 20.7733 21.0048 18.7108 21.2624 16.2253L19.8976 17.0665L18.8488 15.3648L21.6696 13.6263C22.0354 13.401 22.5041 13.4344 22.8341 13.7095L25.3951 15.8453L24.1148 17.3805Z" fill="#782CDE"/>
      </g>
      <defs>
        <filter id="filter0_i_social" x="0" y="0" width="31.2678" height="32.2677" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="3.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
      </defs>
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="15" width="6" height="10" rx="1.5" fill="#B388F2" />
      <rect x="11" y="9" width="6" height="16" rx="1.5" fill="#9352D6" />
      <rect x="19" y="3" width="6" height="22" rx="1.5" fill="#782CDE" />
    </svg>
  );
}

export const platformItems: PlatformItem[] = [
  {
    title: "AI Content Engine",
    description: "Generate content from ideas in seconds",
    icon: <ContentEngineIcon />,
  },
  {
    title: "Repurpose & Distribution Engine",
    description: "Turn one piece of content into many and distribute\nit automatically",
    icon: <RepurposeIcon />,
  },
  {
    title: "Content Production Studio",
    description: "Edit, customize, and finalize your content",
    icon: <ProductionStudioIcon />,
  },
  {
    title: "AI Media Generation System",
    description: "Create videos, images, and assets with AI",
    icon: <MediaGenerationIcon />,
  },
  {
    title: "Social Media Automation",
    description: "Schedule, publish, and manage content across\n channels",
    icon: <SocialAutomationIcon />,
  },
  {
    title: "Analytics & Performance",
    description: "Track results and improve your content strategy",
    icon: <AnalyticsIcon />,
  },
];

interface PlatformDropdownProps {
  visible: boolean;
}

export function PlatformDropdown({ visible }: PlatformDropdownProps) {
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
          <h3
            className="font-outfit font-normal text-[20px] leading-[25px] uppercase mb-8"
            style={{ color: "#22243A" }}
          >
            PLATFORM
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            {platformItems.map((item) => (
              <button
                key={item.title}
                className="flex items-center gap-2.5 text-left rounded-[8px] transition-colors duration-200 hover:bg-[#F8F3FD] group cursor-pointer w-fit max-w-full"
                style={{ padding: "6px 10px 6px 4px" }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center w-[40px] h-[40px] rounded-[8px]"
                  style={{ background: "#FAF6FF" }}
                >
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-outfit font-normal text-[18px] leading-[23px] text-[#6D6D6D] group-hover:text-[#781EE0] transition-colors">
                    {item.title}
                  </span>
                  <span className="font-outfit font-normal text-[13px] leading-[16px] text-[#A1A1A1] whitespace-pre-line">
                    {item.description}
                  </span>
                </div>
              </button>
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

export default PlatformDropdown;
