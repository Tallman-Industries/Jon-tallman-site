import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";
export const alt = "Jon Tallman — Product, Strategy, Fractional";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [italic, regular, medium] = await Promise.all([
    readFile(path.join(process.cwd(), "src/assets/Newsreader-Italic.ttf")),
    readFile(path.join(process.cwd(), "src/assets/Newsreader-Regular.ttf")),
    readFile(path.join(process.cwd(), "src/assets/Newsreader-Medium.ttf")),
  ]);

  const bg = "#f3ece0";
  const ink = "#1a1712";
  const inkMute = "#8a8170";
  const accent = "#b35a2c";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: bg,
          padding: "72px 80px",
          fontFamily: "Newsreader",
          color: ink,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: "Newsreader",
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: accent,
            }}
          />
          <span>Jon Tallman</span>
          <span style={{ color: inkMute, fontSize: 18, marginLeft: 4 }}>
            / product &amp; strategy
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Newsreader",
            fontWeight: 500,
            fontSize: 104,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
          }}
        >
          <div style={{ display: "flex" }}>
            <span>Product leader,&nbsp;</span>
            <span
              style={{
                fontStyle: "italic",
                color: accent,
                fontWeight: 400,
              }}
            >
              founder
            </span>
            <span>,</span>
          </div>
          <div style={{ display: "flex" }}>and fractional operator.</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `1px solid #d6ccba`,
            paddingTop: 28,
            fontSize: 20,
            color: inkMute,
          }}
        >
          <span>Denver, Colorado · AI · Media · Ad-tech</span>
          <span style={{ color: ink, fontWeight: 500 }}>
            Fractional &amp; advisory
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Newsreader",
          data: regular as unknown as ArrayBuffer,
          style: "normal",
          weight: 400,
        },
        {
          name: "Newsreader",
          data: medium as unknown as ArrayBuffer,
          style: "normal",
          weight: 500,
        },
        {
          name: "Newsreader",
          data: italic as unknown as ArrayBuffer,
          style: "italic",
          weight: 400,
        },
      ],
    },
  );
}
