export const colors = {
  // Colors go from their Lightest Variants to their Darkest

  blue00: "#E3EFFF",
  blue01: "#B8D4F8",
  blue02: "#82B0F4",
  blue03: "#5B90E0",
  blue04: "#4175CF",
  blue05: "#2E59AF",
  blue06: "#1F4397",
  blue07: "#132F77",
  blue08: "#081d66",
  blue09: "#010728",

  brown00: "#EDDBCA",
  brown01: "#E0C0A3",
  brown02: "#CDA37B",
  brown03: "#A87D54",
  brown04: "#8A5F34",
  brown05: "#6D461F",
  brown06: "#563714",
  brown07: "#442906",
  brown08: "#331F05",
  brown09: "#211202",

  gray00: "#F4F6F9",
  gray01: "#E0E4EB",
  gray02: "#CED4DE",
  gray03: "#A7ABB5",
  gray04: "#838892",
  gray05: "#636770",
  gray06: "#484B53",
  gray07: "#33363b",
  gray08: "#1A1C1F",
  gray09: "#0A0A0F",

  // Accent ramp for the dark theme (cyan/teal) - full 00-09 ramp required
  // so Btn's `colors[`${color}0${N}`]` derivation keeps working.
  accent00: "#E3FBF7",
  accent01: "#B4F1E8",
  accent02: "#7FE4D6",
  accent03: "#4CD3C0",
  accent04: "#2BB8A6",
  accent05: "#1E9686",
  accent06: "#16786C",
  accent07: "#105C53",
  accent08: "#0A413B",
  accent09: "#052723",

  white: "#fbfbfe",

  // Semantic aliases for the dark theme - plain keys (not a ramp), so Btn
  // never resolves these via its `${color}0${N}` interpolation.
  bgPage: "#0A0A0F",
  bgSurface: "#1A1C1F",
  bgSurfaceRaised: "#33363b",
  textPrimary: "#fbfbfe",
  textSecondary: "#A7ABB5",
  textMuted: "#636770",
  borderSubtle: "#484B53",
};
