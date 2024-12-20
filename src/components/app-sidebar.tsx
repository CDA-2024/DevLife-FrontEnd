import * as React from "react"

import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar"
import { TeamSwitcher } from "./team-switcher"

// Données de l'application
const data = {
  user: {
    name: "Fatal.xxl",
    email: "fatal@example.com",
    avatar: "/avatars/user.jpg",
    website: "twitch.yodegoulook.com"
  },
  teams: [
    {
      name: "Nom du jeu",
      logo: "https://loremicon.com/grad/128/128/853580496045/jpg",
      plan: "Enterprise",
    },
  ],
  navItems: [
    {
      title: "Page perso",
      icon: "👤",
      url: "/profile",
      variant: "default",
    },
    {
      title: "Équipe",
      icon: "👥",
      url: "/team",
      variant: "ghost",
    },
    {
      title: "Contrat",
      icon: "📄",
      url: "/contract",
      variant: "ghost",
    },
    {
      title: "Materiels",
      icon: "💻",
      url: "/equipment",
      variant: "ghost",
    },
    {
      title: "Recrutement",
      icon: "🎯",
      url: "/recruitment",
      variant: "ghost",
    },
    {
      title: "Budget",
      icon: "💰",
      url: "/budget",
      variant: "ghost",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-2">
        <SidebarMenu className="flex flex-col mt-12">
          {data.navItems.map((item) => (
            <SidebarMenuItem key={item.title} className="px-2">
              <SidebarMenuButton
                variant={item.variant as "default" | "outline" | null}
                size="lg"
                className="w-full justify-start gap-2 text-base"
              >
                <span className="flex-none">{item.icon}</span>
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t pt-2">
        <NavUser
          user={{
            name: data.user.name,
            website: data.user.website,
            avatar: "😎"
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}