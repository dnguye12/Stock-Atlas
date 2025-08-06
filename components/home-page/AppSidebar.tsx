import { ArrowDownWideNarrowIcon, BombIcon, ChartLineIcon, ChartNoAxesColumn, ChevronDown, CrownIcon, Home, LayoutGridIcon, SearchIcon } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
        isGroup: false
    },
    {
        title: "Stock",
        url: "#",
        icon: ChartNoAxesColumn,
        isGroup: true,
        children: [
            {
                title: "Heatmaps",
                url: "#",
                icon: LayoutGridIcon,
            }
        ]
    },
    {
        title: "Screeners",
        url: "#",
        icon: SearchIcon,
        isGroup: true,
        children: [
            {
                title: "Daily biggest winners",
                url: "#",
                icon: CrownIcon
            },
            {
                title: "Daily biggest losers",
                url: "#",
                icon: BombIcon
            },
            {
                title: "Most active today",
                url: "#",
                icon: ChartLineIcon
            },
            {
                title: "Most Shorted Stocks",
                url: "#",
                icon: ArrowDownWideNarrowIcon
            }
        ]
    }
]

export function AppSidebar() {


    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item, idx) => (
                                item.isGroup ?
                                    (
                                        <Collapsible key={`sidebar-child-${idx}`} className="group/collapsible">
                                            <SidebarMenuItem>
                                                <CollapsibleTrigger asChild>
                                                    <SidebarMenuButton>
                                                        <item.icon />
                                                        <span>{item.title}</span>
                                                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                                    </SidebarMenuButton>
                                                </CollapsibleTrigger>
                                                <CollapsibleContent>
                                                    <SidebarMenuSub>
                                                        {
                                                            item.children?.map((child, idx) => (
                                                                <SidebarMenuSubItem key={`sidebar-child-child-${idx}`}>
                                                                    <SidebarMenuButton asChild>
                                                                        <a href={child.url}>
                                                                            <child.icon />
                                                                            <span>{child.title}</span>
                                                                        </a>
                                                                    </SidebarMenuButton>
                                                                </SidebarMenuSubItem>
                                                            ))
                                                        }
                                                        <SidebarMenuSubItem />
                                                    </SidebarMenuSub>
                                                </CollapsibleContent>
                                            </SidebarMenuItem>
                                        </Collapsible>
                                    )
                                    :
                                    (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}