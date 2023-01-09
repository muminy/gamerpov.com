import { IconTypes } from "@/icons/index";
import React, { ReactNode } from "react";

export type AlertRefType = {
  show: (params: AlertParamsType) => void;
  hide: () => void;
};

export type AlertParamsType = {
  message: string;
  icon?: IconTypes;
};

export const alertRef = React.createRef<AlertRefType>();
export { default } from "./Alert";
