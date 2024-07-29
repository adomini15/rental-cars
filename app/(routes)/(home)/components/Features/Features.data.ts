import { HandCoins, Hourglass, LucideIcon, MessageCircleQuestion, ShieldCheck } from "lucide-react"

type FeatureData = {
    icon: LucideIcon,
    text: string,
    className?: string,
    delay: number
}

export const features: FeatureData[] = [
    {
        icon: Hourglass,
        text: "24 hour car delivery",
        className: "bg-slate-100",
        delay: 1
    },
    {
        icon: MessageCircleQuestion,
        text: "24/7 technical support",
        className: "bg-indigo-100",
        delay: 1.2
    },{
        icon: ShieldCheck,
        text: "Premium secure",
        className: "bg-slate-100",
        delay: 1.3
    },{
        icon: HandCoins,
        text: "With the best price",
        className: "bg-slate-100",
        delay: 1.5
    },
]