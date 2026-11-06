import Script from "next/script";
import { clarityId } from "@content/index";

// Microsoft Clarity. Production only, loaded after the page is interactive so
// it never slows down the first paint.
export default function Analytics() {
  if (process.env.NODE_ENV !== "production" || !clarityId) return null;
  return (
    <Script id="clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", ${JSON.stringify(clarityId)});`}
    </Script>
  );
}
