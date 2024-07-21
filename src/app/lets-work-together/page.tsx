"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import Script from "next/script";

export default function WorkPage() {
  return (
    <div>
      {/* <p>Let&apos;s work together 🎉</p> */}

      <div className="overflow-hidden rounded-md">
        <Cal
          namespace="30min"
          calLink="lucas-cortez-sanches/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
  );
}
