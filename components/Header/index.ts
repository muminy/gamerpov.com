import React from "react";

export enum HeaderLayout {
  "MAIN" = "MAIN",
  "BLOG" = "BLOG",
}

export type HeaderProps = {
  //
  layout?: keyof typeof HeaderLayout;
};
export { default } from "./Header";
