"use client";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl =
    "/resume1.png";
  return (
    <div className=" relative lg:h-[500px]  flex items-center  justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">Optimized workflows, saving time and reducing costs.</p>

      </DirectionAwareHover>
    </div>
  );
}
