"use client";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl =
    "/resume1.png";
  return (
    <div className=" relative lg:h-[400px] flex items-center justify-center  ">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-lg">Optimized workflows, saving time and reducing costs.</p>

      </DirectionAwareHover>
    </div>
  );
}
