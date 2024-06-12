import { Document } from "mongoose";

export interface iAgent {
  fullName: string;
  email: string;
  password: string;
  compnayName: string;
  verify: boolean;
  phone: string;
  role: string;
  companyAddress: string;
  accountNumber: string;
  avatar: string;
  service: Array<{}>;
  images: Array<{}>;
}

export interface iAgentData extends iAgent, Document {}
