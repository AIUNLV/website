"use client";

import { FC, ReactNode } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "~/components/ui/Dialog";

interface ImageViewerProps {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  className?: string;
  children?: ReactNode;
}

const ImageViewer: FC<ImageViewerProps> = ({
  src,
  alt,
  title,
  width,
  height,
  className,
  children,
}) => {
  console.log(children);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={`cursor-pointer ${className || ""}`}>
          {children ? (
            <>{children}</>
          ) : (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="rounded-lg hover:scale-105 transition-transform duration-200"
            />
          )}
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-7xl p-4 bg-gray-200/50 backdrop-blur-xl z-100">
        {title && <DialogTitle>{title}</DialogTitle>}
        <Image
          src={src}
          alt={alt}
          width={width ? width * 2.5 : undefined}
          height={height ? height * 2.5 : undefined}
          className="rounded-lg w-full h-auto"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageViewer;
