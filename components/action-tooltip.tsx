"use client"
import { FC } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

interface ActionTooltipProps {
    label: string
    children: React.ReactNode
    side?: "top" | "left" | "bottom" | "right"
    align?: "start" | "center" | "end"
}

const ActionTooltip: FC<ActionTooltipProps> = ({
    children, label, align, side
}) => {
    return <TooltipProvider>
        <Tooltip delayDuration={50}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side={side} align={align}>
                <p className='font-semibold text-sm capitalize'>
                    {label.toLowerCase()}
                </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
}

export default ActionTooltip
