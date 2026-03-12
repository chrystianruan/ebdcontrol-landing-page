import type { ReactNode } from "react";

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export interface TimelineItem {
  year: string;
  text: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href: string;
  color: string;
  bg: string;
}

export interface ManualRole {
  label: string;
  icon: string;
  desc: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SectionProps {
  id: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export interface SectionTitleProps {
  children: ReactNode;
  center?: boolean;
}

export interface SectionLabelProps {
  children: ReactNode;
}