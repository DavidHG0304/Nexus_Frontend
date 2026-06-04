import {
  radius,
  shadows
} from "../shared/theme";

export const primaryButton = `
h-11
px-5
${radius.full}
bg-gradient-to-r
from-cyan-400
to-cyan-300
text-sm
font-semibold
text-slate-950
transition-all
duration-300
hover:scale-[1.02]
active:scale-[0.98]
${shadows.glow}
`;

export const secondaryButton = `
h-11
px-5
${radius.full}
border
border-white/10
bg-white/[0.02]
text-sm
font-semibold
text-white
transition-all
duration-300
hover:bg-white/[0.06]
`;