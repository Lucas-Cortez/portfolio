import Script from "next/script";

export default function TestPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <div id="vid_66880af71e59be000bfb26c7" style="position:relative;width:100%;padding: 56.25% 0 0;">
            <img
              id="thumb_66880af71e59be000bfb26c7"
              src="https://images.converteai.net/4d160ed4-57d3-476f-8323-cfcb117b1d19/players/66880af71e59be000bfb26c7/thumbnail.jpg"
              style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"
            />
            <div
              id="backdrop_66880af71e59be000bfb26c7"
              style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"
            ></div>
          </div>
        `,
        }}
      ></div>

      <Script type="text/javascript" id="scr_66880af71e59be000bfb26c7">
        {`
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/4d160ed4-57d3-476f-8323-cfcb117b1d19/players/66880af71e59be000bfb26c7/player.js",
          s.async=!0,document.head.appendChild(s);
        `}
      </Script>
    </div>
  );
}
