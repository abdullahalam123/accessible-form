import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { LinkTextProps } from "@/types";

export const LinkText: React.FC<LinkTextProps> = ({
  text,
  linkText,
  href,
  className,
}) => {
  return (
    <p className={clsx("text-center", className)}>
      {text}
      <Link href={href} className="ml-1 text-blue-600 hover:underline">
        {linkText}
      </Link>
    </p>
  );
};
