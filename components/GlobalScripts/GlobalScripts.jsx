import React from "react";
import Script from "next/script";

const GlobalScripts = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener("DOMContentLoaded", function(event) {
            setTimeout(function() {
              try {
              var script = document.createElement('script');
              //script.defer = true; 
              script.type = 'text/javascript';
              var target = 'https://www.clickcease.com/monitor/stat.js';
              script.src = target;
              var elem = document.head;
              elem.appendChild(script);
              } catch (error) {
              console.log(error)
              }
            }, 1000)
          });
          `,
        }}
      />

      {/* <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener("DOMContentLoaded", function(event) {
            setTimeout(function() {
              try {
              var script = document.createElement('script');
              //script.defer = true; 
              script.type = 'text/javascript';
              var target = 'https://www.clickcease.com/monitor/stat.js';
              script.src = target;
              var elem = document.head;
              elem.appendChild(script);
              } catch (error) {
              console.log(error)
              }
            }, 1000)
          });
          `,
        }}
      /> */}
      <Script
        strategy="afterInteractive"
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
      />
      <Script
        strategy="afterInteractive"
        src="https://tools.luckyorange.com/core/lo.js?site-id=c08d05c9"
      />
    </>
  );
};

export default GlobalScripts;
