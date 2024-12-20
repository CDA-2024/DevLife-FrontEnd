import { SidebarTrigger } from "../../../shared/components/ui/sidebar"
import { Progress } from "../../../shared/components/ui/progress"
import { Separator } from "../../../shared/components/ui/separator"
import { useState } from "react"
import { useEffect } from "react"
import { Button } from "../../../shared/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../../shared/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

interface HeaderStats {
    exp: number
    maxExp: number
    coins: number
}

function Header() {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const stats: HeaderStats = {
        exp: 58421,
        maxExp: 100000,
        coins: 16502
    }


    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    }

    return (
        <header className="flex h-16 shrink-0 items-center gap-2border-b border-zinc-800 backdrop-blur">
            <div className="flex items-center gap-2 lg:gap-4 px-4 w-full">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="h-6 bg-zinc-800" />

                {/* Stats Section */}
                <div className="flex items-center gap-2 lg:gap-6 flex-1 lg:px-4">
                    {/* XP Bar */}
                    <div className="flex items-center gap-3 flex-1 max-w-[300px]">
                        <div className="w-full">
                            <Progress
                                value={(stats.exp / stats.maxExp) * 100}
                            />
                        </div>
                        <span className="text-sm font-medium text-zinc-400 flex items-center">
                            {stats.exp.toLocaleString()}
                            <span className="mx-1 text-zinc-600 inline-block align-middle">/</span>
                            {stats.maxExp.toLocaleString()}
                            <span role="img" aria-label="XP" className="text-zinc-400 ml-1 inline align-middle">
                                xp
                            </span>
                        </span>
                    </div>

                    <div className="flex items-center gap-2 lg:gap-4">
                        {/* Time */}
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-400/20 rounded-md border border-zinc-700/10">
                            <span role="img" aria-label="horloge" className="text-zinc-400">
                                🕒
                            </span>
                            <span className="text-zinc-400 font-medium">
                                {formatTime(currentTime)}
                            </span>
                        </div>

                        {/* Coins */}
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-400/20 rounded-md border border-zinc-700/10">
                            <span className="text-amber-500 font-medium">
                                {stats.coins.toLocaleString()}
                            </span>
                            <span role="img" aria-label="pièces" className="text-amber-500">
                                🪙
                            </span>
                        </div>
                    </div>
                </div>

                {/* Navigation avec menu déroulant sur mobile et boutons sur desktop */}
                <div className="flex items-center">
                    {/* Menu déroulant pour mobile/tablet */}
                    <div className="lg:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem>
                                    Objectifs
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Succès
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Classement
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Boutons pour desktop */}
                    <nav className="hidden lg:flex items-center">
                        <button className="px-3 py-1.5 text-sm text-zinc-600 hover:text-zinc-800 transition-colors cursor-pointer">
                            Objectifs
                        </button>
                        <button className="px-3 py-1.5 text-sm text-zinc-600 hover:text-zinc-800 transition-colors cursor-pointer">
                            Succès
                        </button>
                        <button className="px-3 py-1.5 text-sm text-zinc-600 hover:text-zinc-800 transition-colors cursor-pointer">
                            Classement
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
