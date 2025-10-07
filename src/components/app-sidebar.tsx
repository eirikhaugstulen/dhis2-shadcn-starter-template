import { Link, useLocation } from 'react-router-dom'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Home, InfoIcon, Presentation } from 'lucide-react'

const menuItems = [
    {
        title: 'Home',
        url: '/',
        icon: Home,
    },
    {
        title: 'Presentation',
        url: '/presentation',
        icon: Presentation,
    },
    {
        title: 'About',
        url: '/about',
        icon: InfoIcon,
    },
]

export function AppSidebar() {
    const location = useLocation()

    return (
        <Sidebar>
            <SidebarHeader>
                <div className='flex items-center gap-2 px-2 py-1'>
                    <div className='flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground'>
                        <Home className='size-4' />
                    </div>
                    <div className='flex flex-col gap-0.5'>
                        <span className='font-semibold'>DHIS2 App</span>
                        <span className='text-xs text-muted-foreground'>Developers Meetup</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title} className='hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded'>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={location.pathname === item.url}
                                    >
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export { menuItems }

