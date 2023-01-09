import React from "react";
import { LinkProps } from "next/link";

export type PermalinkProps = LinkProps & {
  children?: React.ReactNode;
  title?: string;
  className?: string;
};
export { default } from "./Permalink";
