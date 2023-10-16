"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4db8e25b-c1bd-4858-844a-4f1929b17e35");
  }, []);

  return null;
};