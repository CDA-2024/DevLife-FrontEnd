import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Progress } from "../../../components/ui/progress"

interface ProfileStats {
  exp: number
  maxExp: number
  coins: number
  pseudo: string
  speciality: string
  level: number
  money: number
}

interface Skill {
  name: string
  percentage: number
}

interface Project {
  name: string
  status: "En cours" | "Terminé" | "En retard"
  remainingDays: number
  potentialGain: number
  progress: number
}

export default function ProfilePage() {
  const stats: ProfileStats = {
    exp: 58421,
    maxExp: 100000,
    coins: 16502,
    pseudo: "Fatal.xxl",
    speciality: "Full-Stack",
    level: 12,
    money: 16502
  }

  const skills: Skill[] = [
    { name: "Front-End", percentage: 75 },
    { name: "Back-End", percentage: 90 },
    { name: "Gestion de projet", percentage: 50 },
    { name: "Cybersécurité", percentage: 40 }
  ]

  const projects: Project[] = [
    {
      name: "Site e-commerce Client A",
      status: "En cours",
      remainingDays: 3,
      potentialGain: 5000,
      progress: 75
    },
    {
      name: "Application Mobile B",
      status: "En retard",
      remainingDays: 1,
      potentialGain: 3000,
      progress: 45
    },
    {
      name: "Dashboard Client C",
      status: "En cours",
      remainingDays: 5,
      potentialGain: 4500,
      progress: 25
    }
  ]

  return (
    <div className="p-6 bg-white">
      <div className="space-y-6">
        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-800">Mes Améliorations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="flex-none">🚀</span>
                  <span>Serveurs rapides : <span className="text-emerald-600">+15%</span> productivité</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="flex-none">🛋️</span>
                  <span>Salle de repos : <span className="text-emerald-600">-10%</span> de malus fatigue</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="flex-none">⚡</span>
                  <span>Outils Premium : <span className="text-emerald-600">+5%</span> de réussite sur les projets</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-800">Mon profil</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-gray-400">👤</span>
                  <span>Pseudo : </span>
                  <span className="text-amber-600 font-medium">{stats.pseudo}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-gray-400">💼</span>
                  <span>Spécialité : </span>
                  <span className="text-amber-600 font-medium">{stats.speciality}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-gray-400">⭐</span>
                  <span>Niveau : </span>
                  <span className="text-amber-600 font-medium">{stats.level}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-gray-400">💰</span>
                  <span>Argent : </span>
                  <span className="text-amber-600 font-medium">{stats.money.toLocaleString()} $</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-800">Mes Compétences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>{skill.name}</span>
                      <span className="text-amber-600 font-medium">{skill.percentage}%</span>
                    </div>
                    <Progress
                      value={skill.percentage}
                      className="h-2 bg-gray-100"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Section */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-gray-800">Mes Projets</CardTitle>
            <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium rounded-md transition-colors">
              Voir tous mes projets →
            </button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-gray-500 text-sm font-medium">Liste des projets actifs :</h3>
              <div className="grid grid-cols-3 gap-4">
                {projects.map((project) => (
                  <div key={project.name} className="border border-gray-200 rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-gray-800 font-medium truncate">{project.name}</h4>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-600 whitespace-nowrap">
                        {project.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div>Délai : <span className="text-gray-800">{project.remainingDays} jours</span></div>
                      <div>Gain : <span className="text-emerald-600">{project.potentialGain.toLocaleString()} €</span></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Progression</span>
                        <span className="text-gray-800">{project.progress}%</span>
                      </div>
                      <Progress 
                        value={project.progress} 
                        className="h-2 bg-gray-100"
                      />
                    </div>
                    <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium rounded-md transition-colors">
                      Voir les détails
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 