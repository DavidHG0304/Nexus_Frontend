import {
  radius
} from "../shared/theme";

export const inputStyle = `
w-full
h-12
px-5
${radius.full}
border
border-white/5
bg-white/[0.03]
text-white
outline-none
transition-all
duration-300
placeholder:text-slate-500
focus:border-cyan-400/30
focus:bg-white/[0.05]
`;

export const quickAmountButton = `
rounded-full
border
border-white/5
bg-white/[0.03]
px-3
py-1
text-xs
text-slate-300
transition-all
duration-300
hover:bg-white/[0.06]
hover:scale-[1.03]
`;

export const formCard = `
rounded-[30px]
border
border-white/5
bg-[#091423]
p-5
`;