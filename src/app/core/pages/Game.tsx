import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Progress } from "../../../components/ui/progress"
import { Button } from "../../../components/ui/button"
import { useNavigate } from "react-router-dom"

interface Enterprise {
    name: string
    level: number
    employees: number
    revenue: number
}

interface TeamMember {
    name: string
    role: string
    level: number
}

interface Project {
    name: string
    type: "Freelance" | "Enterprise"
    status: "En cours" | "En retard"
    progress: number
    deadline: string
}

interface Specialization {
    name: string
    description: string
    bonus: string
}

interface Equipment {
    name: string
    status: "Bon état" | "Correct" | "Usé" | "Défectueux"
    type: string
}

export default function GamePage() {
    const navigate = useNavigate()

    const enterprise: Enterprise = {
        name: "DevStudio Pro",
        level: 3,
        employees: 5,
        revenue: 25000
    }

    const team: TeamMember[] = [
        { name: "Fatal.xxl", role: "Full-Stack", level: 12 },
        { name: "CodeMaster", role: "Front-End", level: 8 },
        { name: "DataWizard", role: "Back-End", level: 10 }
    ]

    const projects: Project[] = [
        {
            name: "Site E-commerce",
            type: "Enterprise",
            status: "En cours",
            progress: 75,
            deadline: "3 jours"
        },
        {
            name: "App Mobile",
            type: "Freelance",
            status: "En retard",
            progress: 45,
            deadline: "1 jour"
        }
    ]

    const specializations: Specialization[] = [
        {
            name: "Salle de jeux",
            description: "Espace de détente pour l'équipe",
            bonus: "+15% productivité"
        },
        {
            name: "Cafétéria Premium",
            description: "Zone de restauration équipée",
            bonus: "-20% fatigue"
        }
    ]

    const equipment: Equipment[] = [
        { name: "Ordinateur", status: "Bon état", type: "Hardware" },
        { name: "Bureau", status: "Correct", type: "Mobilier" },
        { name: "Chaise", status: "Usé", type: "Mobilier" },
        { name: "Écran", status: "Bon état", type: "Hardware" },
        { name: "Clavier", status: "Défectueux", type: "Hardware" }
    ]

    return (
        <div className="p-6 bg-white">
            <div className="space-y-6">
                {/* Enterprise Card */}
                <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-gray-800">Mon Entreprise</CardTitle>
                        <Button
                            variant="outline"
                            onClick={() => navigate('/enterprise')}
                        >
                            Gérer mon entreprise →
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <p className="text-gray-600">Nom : <span className="text-gray-800 font-medium">{enterprise.name}</span></p>
                                    <p className="text-gray-600">Niveau : <span className="text-amber-600 font-medium">{enterprise.level}</span></p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-600">Employés : <span className="text-gray-800 font-medium">{enterprise.employees}</span></p>
                                    <p className="text-gray-600">Revenus : <span className="text-emerald-600 font-medium">{enterprise.revenue.toLocaleString()}€</span></p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Team Card */}
                <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-gray-800">Mon Équipe</CardTitle>
                        <Button
                            variant="outline"
                            onClick={() => navigate('/staff')}
                        >
                            Gérer l'équipe →
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {team.map((member) => (
                                <div key={member.name} className="flex items-center justify-between p-2 rounded-lg border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">👤</span>
                                        <div>
                                            <p className="font-medium text-gray-800">{member.name}</p>
                                            <p className="text-sm text-gray-600">{member.role}</p>
                                        </div>
                                    </div>
                                    <span className="text-amber-600 font-medium">Niv. {member.level}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Projects Card */}
                <Card className="border-gray-200 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-gray-800">Projets en cours</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {projects.map((project) => (
                                <div key={project.name} className="p-4 border border-gray-200 rounded-lg space-y-3">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-medium text-gray-800">{project.name}</h4>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.type === "Enterprise" ? "bg-blue-100 text-blue-600" : "bg-purple-100 text-purple-600"
                                            }`}>
                                            {project.type}
                                        </span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Progression</span>
                                            <span className="text-gray-800">{project.progress}%</span>
                                        </div>
                                        <Progress value={project.progress} className="h-2 bg-gray-100" />
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Deadline : <span className="text-gray-800">{project.deadline}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Specializations Card */}
                <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-gray-800">Spécialisations</CardTitle>
                        <Button
                            variant="outline"
                            onClick={() => navigate('/enterprise')}
                        >
                            Gérer les spécialisations →
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {specializations.map((spec) => (
                                <div key={spec.name} className="p-4 border border-gray-200 rounded-lg space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium text-gray-800">{spec.name}</h4>
                                        <span className="text-emerald-600 font-medium">{spec.bonus}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{spec.description}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Equipment Card */}
                <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-gray-800">Équipements de base</CardTitle>
                        <Button
                            variant="outline"
                            onClick={() => navigate('/material')}
                        >
                            Gérer les équipements →
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {equipment.map((item) => (
                                <div key={item.name} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">
                                            {item.type === "Hardware" ? "💻" : "🪑"}
                                        </span>
                                        <div>
                                            <p className="font-medium text-gray-800">{item.name}</p>
                                            <p className="text-sm text-gray-600">{item.type}</p>
                                        </div>
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === "Bon état" ? "bg-green-100 text-green-600" :
                                            item.status === "Correct" ? "bg-blue-100 text-blue-600" :
                                                item.status === "Usé" ? "bg-yellow-100 text-yellow-600" :
                                                    "bg-red-100 text-red-600"
                                        }`}>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
} 