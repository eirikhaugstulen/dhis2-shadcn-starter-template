// './locales' will be populated after running start or build scripts
import './locales'
import { UserProfile, AboutPage, PresentationPage, SyncUrlWithGlobalShell } from '@/components'
import '@/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createHashRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { AppSidebar, menuItems } from '@/components/app-sidebar'


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
    const location = useLocation()

    return (
        <SyncUrlWithGlobalShell>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
                        <SidebarTrigger />
                        <Separator orientation='vertical' className='h-6' />
                        <div className='flex items-center gap-2'>
                            <h2>
                                {menuItems.find((item) => item.url === location.pathname)?.title || 'DHIS2 App'}
                            </h2>
                        </div>
                    </header>
                    <div className='flex flex-1 flex-col gap-4 p-4'>
                        <Outlet />
                    </div>
                </SidebarInset>
            </SidebarProvider>
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
            {
                path: 'presentation',
                element: <PresentationPage />,
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
