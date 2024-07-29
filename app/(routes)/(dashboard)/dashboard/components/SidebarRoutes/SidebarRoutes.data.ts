import { Calendar, Car, FileText, Heart, LucideIcon } from "lucide-react";

export type SidebarItemT = {
    label: string;
    icon: LucideIcon,
    href: string;
};

export const dataAdminSidebar: SidebarItemT[] = [
    {
        icon: FileText,
        label: 'Manage your cars',
        href: '/admin/cars-manager'
    },
    {
        icon: Calendar,
        label: 'All reserves',
        href: '/admin/reserves-admin'
    }
]

export const dataGeneralSidebar: SidebarItemT[] = [
    {
        icon: Car,
        label: 'Cars',
        href: '/dashboard'
    },
    {
        icon: Calendar,
        label: 'Cars reserves',
        href: '/reserves'
    },
    {
        icon: Heart,
        label: 'Loved cars',
        href: '/loved-cars'
    },
   
]