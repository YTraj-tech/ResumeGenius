// components/ProfileImage.tsx
'use client';

import { useState } from 'react';

interface ProfileImageProps {
    src: string | null | undefined;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

export default function ProfileImage({
    src,
    alt,
    width = 60,
    height = 60,
    className = ""
}: ProfileImageProps) {
    const [imgSrc, setImgSrc] = useState<string | null | undefined>(src);

    const placeholderSvg = `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${width / 2}" cy="${height / 2}" r="${width / 2 - 5}" fill="#e5e7eb" />
      <text x="${width / 2}" y="${height / 2 + 5}" text-anchor="middle" fill="#9ca3af" font-size="14">Profile</text>
    </svg>
  `)}`;

    return (
        <img
            src={imgSrc || placeholderSvg}
            alt={alt}
            width={width}
            height={height}
            className={className}
            onError={() => setImgSrc(placeholderSvg)}
        />
    );
}