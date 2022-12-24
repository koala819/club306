import type { ReactNode } from 'react'

export interface Children {
    children: ReactNode;
}

export type LayoutProps = {
    title: string,
    displayNavbar?: boolean,
    bgColor?: string,
    member?: boolean,
} & Children