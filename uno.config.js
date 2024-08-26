import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetWind,
  transformerVariantGroup,
} from "unocss";

import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWind(),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
  transformers: [transformerVariantGroup()],
  rules: [
    // 圆角
    [
      /^bdr-?(\d*)$/,
      ([, d]) => ({
        "border-radius": `${d}px`,
      }),
    ],
    [
      "bg-to1",
      {
        background:
          "linear-gradient(180deg, var(--van-primary-color) 0%, var(--primary-color2) 100%)",
      },
    ],
    [
      "bg-to2",
      {
        background:
          "linear-gradient(180deg, var(--primary-color0) 0%, #fff 100%)",
      },
    ],
    [
      "bg-to3",
      {
        background:
          "linear-gradient( 227deg, #19C8FF 0%, #4D8CFE 48%, #913FFB 100%);",
      },
    ],
    [
      "bg-to4",
      {
        background: "linear-gradient( 180deg, #ECECF7 0%, #FFFFFF 100%);",
      },
    ],
  ],
  theme: {
    // 自定义颜色
    colors: {
      primary: "var(--van-primary-color)",
      c0: "var(--primary-color0)",
      c1: "var(--van-primary-color)",
      c2: "var(--font-color2)",
      c3: "var(--font-color3)",
      c4: "var(--font-color4)",
      c5: "var(--font-color5)",
      c6: "var(--font-color6)",
      c7: "var(--font-color7)",
      c8: "var(--font-color8)",
      c9: "var(--font-color9)",
      c10: "var(--font-color10)",
      c11: "var(--font-color11)",
      c12: "var(--font-color12)",
      c13: "var(--font-color13)",
      c14: "var(--font-color14)",
      c15: "var(--font-color15)",
      bg1: "var(--bg1)",
      bg2: "var(--bg2)",
      bg3: "var(--bg3)",
      bg4: "var(--bg4)",
      bg5: "var(--bg5)",
      bg6: "var(--bg6)",
      bg7: "var(--bg7)",
      bg9: "var(--bg8)",
      bg10: "var(--bg10)",
      line: "var(--border-color)",
      line1: "var(--border-color1)",
    },
  },
  shortcuts: {
    fc: "flex justify-center",
    fyc: "flex items-center",
    fxc: "flex flex-col items-center",
    fcc: "flex justify-center items-center",
    pe: "pointer-events-none",
    "t-hide": "truncate",
    tac: "text-center",
    box: "bg-white",
    shadow: "shadow-[0px_0px_16px_1px_rgba(79,115,163,0.16)]",
    shadow2: "shadow-[0px_0px_6px_1px_rgba(77,81,210,0.2)]",
    shadow3: "shadow-[0px_0px_6px_1px_rgba(235,137,46,0.2)]",
    shadow4: "shadow-[0px_0px_6px_1px_rgba(0,0,0,0.16)]",
    centered:
      "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
    "centered-x": "absolute left-1/2 transform -translate-x-1/2",
    "centered-y": "absolute top-1/2 transform -translate-y-1/2",
    fyb: "flex justify-between items-center",
    "bottom-wrap":
      "p30 bg-white fyc fixed bottom-0 left-0 right-0 b-t-solid b-t-1 b-c0",
    "bottom-btn": "h-98 bg-#4F73A3 text-28 font-bold text-white bdr-20",
    "font-number": "font-[DINAlternate-Bold]",
  },
});
