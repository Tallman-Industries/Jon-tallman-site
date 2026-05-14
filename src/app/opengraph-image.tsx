import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";
export const alt = "Jon Tallman — Product, Strategy, Fractional";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [regular, semibold] = await Promise.all([
    readFile(path.join(process.cwd(), "src/assets/Inter-Regular.woff")),
    readFile(path.join(process.cwd(), "src/assets/Inter-SemiBold.woff")),
  ]);

  const bg = "#fafaf7";
  const ink = "#0c0c0c";
  const inkMute = "#7a7a78";
  const accent = "#1f4934";
  const rule = "#d8d8d2";

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
          fontFamily: "Inter",
          color: ink,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: "Inter",
            fontSize: 22,
            fontWeight: 600,
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
          <span style={{ color: inkMute, fontSize: 18, marginLeft: 4, fontWeight: 400 }}>
            / product &amp; strategy
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: 88,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
          }}
        >
          <div style={{ display: "flex", gap: 28 }}>
            <span>Product leader,</span>
            <span
              style={{
                color: accent,
                fontWeight: 600,
              }}
            >
              founder,
            </span>
          </div>
          <div style={{ display: "flex" }}>and fractional operator.</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `1px solid ${rule}`,
            paddingTop: 28,
            fontSize: 20,
            color: inkMute,
          }}
        >
          <span>Denver, Colorado · AI · Media · Ad-tech</span>
          <span style={{ color: ink, fontWeight: 600 }}>
            Fractional &amp; advisory
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: regular as unknown as ArrayBuffer,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: semibold as unknown as ArrayBuffer,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
