'use client';

import { FC, PropsWithChildren } from "react"
import { ReactQueryClientProvider } from "./QueryClientProvider"

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return <>
        <ReactQueryClientProvider>
            {children}
        </ReactQueryClientProvider>
    </>
}