import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ className, dark = false, imgSrc, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
    >
      <Image
        src={dark ? "/phone-dark.png" : "/phone-white.png"}
        alt="phone template"
        width={500}
        height={500}
        className="pointer-events-none z-50 select-none"
      />

      <div className="absolute -z-10 inset-0">
        <Image
          className="object-cover"
          src={imgSrc}
          alt="overlaying phone image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Phone;
