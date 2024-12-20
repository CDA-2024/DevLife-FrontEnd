import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../shared/components/ui/card"
import { Button } from "../../shared/components/ui/button"
import { Input } from "../../shared/components/ui/input"
import { Label } from "../../shared/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/components/ui/avatar"
import { useToast } from "../../shared/hooks/use-toast"

interface UserProfile {
    username: string
    email: string
    avatar: string
    currentPassword: string
    newPassword: string
    confirmPassword: string
}

export default function EditUserProfilePage() {
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [profile, setProfile] = useState<UserProfile>({
        username: "Fatal.xxl",
        email: "fatal@example.com",
        avatar: "/avatars/default.png",
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            // Simuler le changement d'avatar
            setProfile(prev => ({
                ...prev,
                avatar: URL.createObjectURL(file)
            }))
            toast({
                title: "Avatar mis à jour",
                description: "Votre photo de profil a été modifiée avec succès."
            })
        }
    }

    const handlePasswordChange = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Vérification des mots de passe
        if (profile.newPassword !== profile.confirmPassword) {
            toast({
                title: "Erreur",
                description: "Les nouveaux mots de passe ne correspondent pas.",
                variant: "destructive"
            })
            setIsLoading(false)
            return
        }

        // Simuler la mise à jour du mot de passe
        setTimeout(() => {
            setIsLoading(false)
            toast({
                title: "Mot de passe mis à jour",
                description: "Votre mot de passe a été modifié avec succès."
            })
            setProfile(prev => ({
                ...prev,
                currentPassword: "",
                newPassword: "",
                confirmPassword: ""
            }))
        }, 1000)
    }

    return (
        <div className="p-6 bg-white">
            <div className="max-w-2xl mx-auto space-y-6">
                {/* Photo de profil */}
                <Card>
                    <CardHeader>
                        <CardTitle>Photo de profil</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-4">
                        <Avatar className="w-32 h-32">
                            <AvatarImage src={profile.avatar} alt="Photo de profil" />
                            <AvatarFallback>
                                {profile.username.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-4">
                            <Input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                id="avatar-upload"
                                onChange={handleAvatarChange}
                            />
                            <Label
                                htmlFor="avatar-upload"
                                className="cursor-pointer px-4 py-2 bg-primary hover:bg-primary/80 h-10 inline-flex items-center justify-center text-white font-medium rounded-md transition-colors"
                            >
                                Changer la photo
                            </Label>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setProfile(prev => ({
                                        ...prev,
                                        avatar: "/avatars/default.png"
                                    }))
                                    toast({
                                        title: "Avatar réinitialisé",
                                        description: "Votre photo de profil a été réinitialisée."
                                    })
                                }}
                            >
                                Supprimer
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Informations du compte */}
                <Card>
                    <CardHeader>
                        <CardTitle>Informations du compte</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Nom d'utilisateur</Label>
                            <Input
                                id="username"
                                value={profile.username}
                                onChange={(e) => setProfile(prev => ({ ...prev, username: e.target.value }))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Adresse email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={profile.email}
                                onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                            />
                        </div>
                        <Button
                            className="w-full"
                            onClick={() => {
                                toast({
                                    title: "Informations mises à jour",
                                    description: "Vos informations ont été modifiées avec succès."
                                })
                            }}
                        >
                            Sauvegarder les modifications
                        </Button>
                    </CardContent>
                </Card>

                {/* Modification du mot de passe */}
                <Card>
                    <CardHeader>
                        <CardTitle>Modifier le mot de passe</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handlePasswordChange} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current-password">Mot de passe actuel</Label>
                                <Input
                                    id="current-password"
                                    type="password"
                                    value={profile.currentPassword}
                                    onChange={(e) => setProfile(prev => ({ ...prev, currentPassword: e.target.value }))}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new-password">Nouveau mot de passe</Label>
                                <Input
                                    id="new-password"
                                    type="password"
                                    value={profile.newPassword}
                                    onChange={(e) => setProfile(prev => ({ ...prev, newPassword: e.target.value }))}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    value={profile.confirmPassword}
                                    onChange={(e) => setProfile(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? "Modification en cours..." : "Modifier le mot de passe"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
} 