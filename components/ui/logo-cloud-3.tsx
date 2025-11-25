import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";
import React from 'react';

type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
    logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
    return (
        <div
            {...props}
            className={cn(
                "overflow-hidden py-4 ",
                className
            )}
        >
            <InfiniteSlider gap={60} reverse duration={80}>
                {logos.map((logo) => (
                    <div key={`logo-${logo.alt}`} className="flex items-center gap-3">
                        <img
                            alt={logo.alt}
                            className="pointer-events-none h-10 w-auto select-none md:h-12 "
                            height={logo.height || "auto"}
                            loading="lazy"
                            src={logo.src}
                            width={logo.width || "auto"}
                        />
                        <span className="text-md font-medium text-gray-300 whitespace-nowrap">{logo.alt}</span>
                    </div>
                ))}
            </InfiniteSlider>
        </div>
    );
}
