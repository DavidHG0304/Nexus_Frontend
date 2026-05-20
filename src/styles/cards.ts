import {
  radius,
  shadows
} from "./theme";

export const primaryCard = `
${radius.primary}
border
border-white/5
bg-[#091423]
${shadows.primary}
`;

export const secondaryCard = `
${radius.secondary}
border
border-white/5
bg-[#091423]
`;

export const activityCard = `
flex
items-center
justify-between
rounded-2xl
bg-white/[0.03]
px-4
py-3
transition-all
duration-300
hover:bg-white/[0.05]
`;

export const miniIconContainer = `
grid
h-10
w-10
place-items-center
rounded-full
`;

export const sectionTitle = `
text-xs
uppercase
tracking-[0.2em]
text-cyan-300
`;

export const emptyStateCard = `
rounded-[24px]
border
border-dashed
border-white/10
bg-white/[0.02]
p-8
text-center
`;