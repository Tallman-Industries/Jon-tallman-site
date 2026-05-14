import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const interBold = await readFile(
    path.join(process.cwd(), "src/assets/Inter-Bold.woff"),
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
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: 52,
          color: "#1f4934",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          paddingBottom: 2,
        }}
      >
        J
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interBold as unknown as ArrayBuffer,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
