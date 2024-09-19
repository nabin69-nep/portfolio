"use client";
import React from "react";
import {
  TextRevealCard,
} from "@/components/ui/text-reveal-card"
import Nextjs from "./Nextjs"
 function TextRevealCardPreview() {
  return (
<>
    <div
      className="flex items-center justify-center">
      <TextRevealCard text="Portfolio" revealText="Portfolio ">
      </TextRevealCard>
    </div>
    <Nextjs />
          </>

    
  );
}
export default TextRevealCardPreview