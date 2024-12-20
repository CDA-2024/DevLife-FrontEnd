import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "../../lib/utils"

export function Progress({
    value,
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    value: number
}) {
    return (
        <ProgressPrimitive.Root
            className={cn("relative h-2 w-full overflow-hidden rounded-full bg-zinc-400", className)}
            {...props}
        >
            <ProgressPrimitive.Indicator
                className="h-full w-full flex-1 bg-blue-600 transition-all"
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    )
} 