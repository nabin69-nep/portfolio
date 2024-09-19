"use client";
import React from "react";
import {
  TextRevealCard,
} from "@/components/ui/text-reveal-card";
import Tab from "./Tab"
 function TextRevealCardPreview() {
  return (
<>
    <div
      className="flex items-center justify-center">
      <TextRevealCard text="Portfolio" revealText="Portfolio ">
      </TextRevealCard>
    </div>
    {/* <Tab /> */}
          </>

    
  );
}
export default TextRevealCardPreview