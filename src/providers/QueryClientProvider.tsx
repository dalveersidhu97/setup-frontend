import { FC, PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const ReactQueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
    
    const [queryClient] = useState(()=> {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: Infinity
                }
            }
        });
    })

    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}