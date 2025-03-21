"use client";

import ImageComponent, { ImageProps as ImageComponentProps } from "next/image";
import { ComponentPropsWithRef, RefObject, useRef, useState } from "react";
import { Skeleton } from "./Skeleton";

export interface ImageProps extends ComponentPropsWithRef<typeof ImageComponent> {
  image?: Omit<ImageComponentProps, "width" | "height" | "src" | "alt" | "priority" | "className"> & {
    src: string;
    width: number;
    height: number;
    alt: string;
    priority?: boolean;
    className?: string;
  };
};

export const Image = ({ image, ...props }: ImageProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null);

  const ref = useRef<HTMLImageElement | null>(elementRef as any);

  return (
    <>
      {
        loading && <Skeleton ref={ref as any} />
      }
      {
        !loading && <ImageComponent
          {...props}
          src={
            image?.src || props.src
          }
          width={
            image?.width || props.width
          }
          height={
            image?.height || props.height
          }
          alt={
            image?.alt || props.alt || ""
          }
          priority={
            image?.priority || props.priority || false
          }
          style={{
            userSelect: "none",
          }}
          onLoad={() => {
            setLoading(false);
            setElementRef(ref.current);
          }}
        />
      }
    </>
  )
}
