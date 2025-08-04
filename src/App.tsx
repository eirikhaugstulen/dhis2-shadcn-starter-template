// './locales' will be populated after running start or build scripts
import './locales'
import { UserProfile } from '@/components'
import '@/index.css'
import '@/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
})

const MyApp = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <UserProfile />
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}

export default MyApp
