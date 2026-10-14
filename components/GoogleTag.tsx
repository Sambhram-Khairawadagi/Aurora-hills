"use client";

import Script from "next/script";
import { GOOGLE_TAG_ID } from "@/lib/gtag";

export const GoogleTag: React.FC = () => {
  if (!GOOGLE_TAG_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
      />
      <Script
        id="google-tag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_TAG_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};
