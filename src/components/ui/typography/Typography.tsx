import { cn } from "@/lib/utils"

export function TypographyH1({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight text-balance p-1", className)}>
            {children}
        </h1>
    );
}

export function TypographyH2({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={cn("scroll-m-20 text-2xl font-bold tracking-tight text-balance p-1", className)}>
            {children}
        </h1>
    );
}