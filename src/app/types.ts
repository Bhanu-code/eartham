// types.ts (optional)
import { StaticImageData } from "next/image";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
}