// './locales' will be populated after running start or build scripts
import './locales'
import { UserProfile, AboutPage, SyncUrlWithGlobalShell } from '@/components'
import '@/index.css'
import '@/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createHashRouter, RouterProvider, Link, Outlet } from 'react-router-dom'


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
})

const Layout = () => {
    return (
        <SyncUrlWithGlobalShell>
            <div className='p-4 space-y-4'>
                <nav className='flex gap-4'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                </nav>
                <Outlet />
            </div>
            <ReactQueryDevtools />
        </SyncUrlWithGlobalShell>
    )
}

const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <UserProfile />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
        ],
    },
])

const MyApp = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}

export default MyApp
