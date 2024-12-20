import { SidebarTrigger } from "../../../../components/ui/sidebar"
import { Progress } from "../../../../components/ui/progress"
import { Separator } from "../../../../components/ui/separator"

interface HeaderStats {
    exp: number
    maxExp: number
    coins: number
}

function Header() {
    const stats: HeaderStats = {
        exp: 58421,
        maxExp: 100000,
        coins: 16502
    }

    return (
        <header className="flex h-16 shrink-0 items-center gap-2border-b border-zinc-800 backdrop-blur">
            <div className="flex items-center gap-4 px-4 w-full">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="h-6 bg-zinc-800" />

                {/* Stats Section */}
                <div className="flex items-center gap-6 flex-1">
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

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    <button className="px-3 py-1.5 text-sm text-zinc-600 hover:text-zinc-800 transition-colors">
                        Objectifs
                    </button>
                    <button className="px-3 py-1.5 text-sm text-zinc-600 hover:text-zinc-800 transition-colors">
                        Succès
                    </button>
                    <button className="px-3 py-1.5 text-sm text-zinc-600 hover:text-zinc-800 transition-colors">
                        Classement
                    </button>
                </nav>

                {/* Notifications */}
                <button className="relative p-2 text-zinc-400 hover:text-zinc-200 transition-colors">
                    <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] font-medium justify-center items-center text-white">
                            3
                        </span>
                    </span>
                    🔔
                </button>
            </div>
        </header>
    )
}

export default Header