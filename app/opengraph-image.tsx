import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a1628",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            width: 64,
            height: 4,
            background: "#3b82f6",
            marginBottom: 32,
            borderRadius: 2,
          }}
        />
        <div
          style={{
            color: "#ffffff",
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: "-3px",
            lineHeight: 1,
          }}
        >
          Zanetuno
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 28,
            marginTop: 20,
            letterSpacing: "0.5px",
          }}
        >
          High-grade Indonesian Seafood Exporter
        </div>
      </div>
    ),
    { ...size }
  );
}
