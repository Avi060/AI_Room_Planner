"use client"

import { cn } from '@/lib/utils';
import React from 'react'

interface ContainerProps{
    className?: string;
    children: React.ReactNode
}
const Container = ({children,className} : ContainerProps) => {
    return (
        <div className={cn("container mx-auto",className)}>{children}</div>
  )
}

export default Container