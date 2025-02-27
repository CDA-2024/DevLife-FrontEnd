import { Button } from "../../../shared/components/Shadcn/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../shared/components/Shadcn/ui/card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, ArrowRight, RefreshCw } from "lucide-react";
import { toast } from "../../../shared/hooks/use-toast";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";

/**
 * Screen shown after registration to inform the user that they need to verify their email
 */
const EmailVerificationScreen = () => {
    const { resendVerificationEmail, resendEmailLoading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    
    // Récupérer les paramètres de l'URL
    const params = new URLSearchParams(location.search);
    const email = params.get('email') || '';
    const username = params.get('username') || '';
    
    // Vérifier si nous avons les paramètres nécessaires
    useEffect(() => {
        if (!email || !username) {
            toast({
                title: "Informations manquantes",
                description: "Les informations nécessaires sont manquantes. Veuillez réessayer l'inscription.",
                variant: "destructive"
            });
            navigate('/auth/register', { replace: true });
        }
    }, [email, username, navigate]);

    const handleResendEmail = async () => {
        try {
            await resendVerificationEmail(email);
            
            toast({
                title: "Email renvoyé",
                description: `Un nouvel email de vérification a été envoyé à ${email}`,
                variant: "success",
                duration: 5000,
            });
        } catch (error) {
            console.error("Erreur lors du renvoi de l'email:", error);
            
            toast({
                title: "Échec de l'envoi",
                description: "Impossible de renvoyer l'email de vérification. Veuillez réessayer.",
                variant: "destructive",
                duration: 5000,
            });
        }
    };

    return (
        <div className="flex flex-col gap-6 items-center justify-center min-h-screen bg-background py-10 px-4 sm:px-6">
            <div className="w-full max-w-md space-y-5">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">DevLife</h1>
                    <p className="text-muted-foreground">Votre parcours de développeur commence ici</p>
                </div>

                <Card className="w-full shadow-lg border-t-4 border-t-primary">
                    <CardHeader className="space-y-1">
                        <div className="flex justify-center mb-4">
                            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                                <Mail className="h-10 w-10 text-primary" />
                            </div>
                        </div>
                        <CardTitle className="text-2xl font-semibold text-center">Vérifiez votre email</CardTitle>
                        <CardDescription className="text-center">
                            Nous avons envoyé un email de vérification à <strong>{email}</strong>
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <div className="bg-muted p-4 rounded-lg text-sm">
                            <p className="mb-2">Bonjour <strong>{username}</strong>,</p>
                            <p>Veuillez vérifier votre boîte de réception et cliquer sur le lien de vérification pour activer votre compte.</p>
                            <p className="mt-2">Si vous ne trouvez pas l'email, vérifiez votre dossier de spam ou cliquez sur le bouton ci-dessous pour le renvoyer.</p>
                        </div>
                        
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={handleResendEmail}
                            disabled={resendEmailLoading}
                        >
                            {resendEmailLoading ? (
                                <>
                                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                    Envoi en cours...
                                </>
                            ) : (
                                <>
                                    <RefreshCw className="mr-2 h-4 w-4" />
                                    Renvoyer l'email de vérification
                                </>
                            )}
                        </Button>
                    </CardContent>

                    <CardFooter className="flex flex-col space-y-3 pt-0">
                        <div className="text-center text-sm">
                            <Link to="/auth/login" className="font-medium text-primary hover:underline">
                                Retour à la page de connexion
                                <ArrowRight className="ml-1 h-4 w-4 inline" />
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
                
                <div className="text-center text-xs text-muted-foreground">
                    Si vous continuez à rencontrer des problèmes, veuillez{" "}
                    <a href="mailto:support@devlife.com" className="underline underline-offset-4 hover:text-primary">
                        contacter notre équipe support
                    </a>.
                </div>
            </div>
        </div>
    );
};

export default EmailVerificationScreen; 