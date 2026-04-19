import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const italic = await readFile(
    path.join(process.cwd(), "src/assets/Newsreader-Italic.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3d9ba",
          fontFamily: "Newsreader",
          fontStyle: "italic",
          fontSize: 56,
          color: "#b35a2c",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          paddingBottom: 4,
        }}
      >
        J
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Newsreader",
          data: italic as unknown as ArrayBuffer,
          style: "italic",
          weight: 500,
        },
      ],
    },
  );
}
