import { cn } from "@/utils";
import { ComponentPropsWithoutRef, RefObject, useEffect, useState } from "react";

export interface SkeletonProps extends ComponentPropsWithoutRef<any> {
  ref: RefObject<HTMLDivElement>;
};

export function Skeleton({ ref, ...props }: SkeletonProps) {
  const [width, setWidth] = useState<number | string>(0);
  const [height, setHeight] = useState<number | string>(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    }
  }, [ref]);

  return (
    <div
      {...props}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: "0.5rem",
        animation: "pulse 1.5s infinite",
        width: width,
        height: height,
        ...props.style,
      }}
    />
  );
}
