/**
 * This script is used to load the adsense script
 * It is loaded in the head of the document
 * It is loaded only if the SHOW_AD is true
 */
import { ADSENSE_ID, SHOW_AD } from "@/lib/constants";
import Script from "next/script";
export default function AdScript() {
  return (
    <>
      {SHOW_AD && (
        <Script
          id="ads-init"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy={`beforeInteractive`}
        />
      )}
    </>
  );
}
