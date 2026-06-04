import {
  radius,
  shadows
} from "./theme";

export const glassContainer = `
border
border-white/5
bg-[#091423]/90
backdrop-blur-2xl
`;

export const pageHeader = `
sticky
top-4
z-50
mb-6
flex
items-center
justify-between
${radius.primary}
px-6
py-4
${shadows.primary}
`;

export const iconButton = `
grid
h-11
w-11
place-items-center
rounded-full
border
border-white/5
bg-white/[0.03]
text-slate-300
transition-all
duration-300
hover:bg-white/[0.06]
`;

export const avatarStyle = `
grid
h-11
w-11
place-items-center
rounded-full
bg-gradient-to-br
from-cyan-300
to-cyan-500
font-semibold
text-slate-950
${shadows.glow}
`;