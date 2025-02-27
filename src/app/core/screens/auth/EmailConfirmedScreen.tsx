import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "../../../shared/components/Shadcn/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../shared/components/Shadcn/ui/card";
import { toast } from "../../../shared/hooks/use-toast";
import { CheckCircle2, XCircle, Loader2, LogIn } from "lucide-react";
import { useAuth } from "./hooks/useAuth";

/**
 * Écran affiché lorsque l'utilisateur clique sur le lien de vérification d'email
 * Récupère le token dans l'URL et vérifie sa validité via le hook useAuth
 */
const EmailConfirmedScreen = () => {
    const { verifyEmail, verifyEmailLoading } = useAuth();
    const [verificationStatus, setVerificationStatus] = useState<'waiting' | 'success' | 'error'>('waiting');
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [redirectCountdown, setRedirectCountdown] = useState(5); // Compte à rebours de 5 secondes
    const location = useLocation();
    const navigate = useNavigate();
    
    // Effet pour gérer le compte à rebours et la redirection
    useEffect(() => {
        let timer: NodeJS.Timeout;
        
        if (verificationStatus === 'success') {
            if (redirectCountdown > 0) {
                timer = setTimeout(() => {
                    setRedirectCountdown(prev => prev - 1);
                }, 1000);
            } else {
                navigate('/auth/login');
            }
        }
        
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [verificationStatus, redirectCountdown, navigate]);

    useEffect(() => {
        const checkEmailVerification = async () => {
            try {
                // Récupérer le token de l'URL
                const params = new URLSearchParams(location.search);
                const token = params.get('token');

                if (!token) {
                    setVerificationStatus('error');
                    setErrorMessage("Lien de vérification invalide. Le token est manquant.");
                    return;
                }

                // Utiliser la méthode du hook useAuth pour vérifier le token
                const response = await verifyEmail(token);
                
                if (response.success) {
                    // Si succès, mettre à jour le statut
                    setVerificationStatus('success');
                    
                    // Afficher un toast de succès
                    toast({
                        title: "Email vérifié avec succès",
                        description: "Votre compte a été activé. Vous allez être redirigé vers la page de connexion.",
                        variant: "success",
                        duration: 5000,
                    });
                } else {
                    // En cas d'échec avec un message
                    setVerificationStatus('error');
                    setErrorMessage(response.message || "La vérification a échoué pour une raison inconnue.");
                    
                    toast({
                        title: "Échec de la vérification",
                        description: response.message,
                        variant: "destructive",
                        duration: 5000,
                    });
                }
            } catch (error) {
                console.error("Erreur lors de la vérification de l'email:", error);
                setVerificationStatus('error');
                
                // Si nous avons un message d'erreur spécifique du serveur, l'utiliser
                if (error instanceof Error) {
                    setErrorMessage(error.message || "Lien de vérification invalide ou expiré.");
                } else {
                    setErrorMessage("Une erreur est survenue lors de la vérification de votre email.");
                }
                
                // Afficher un toast d'erreur
                toast({
                    title: "Échec de la vérification",
                    description: "Le lien de vérification est invalide ou a expiré.",
                    variant: "destructive",
                    duration: 5000,
                });
            }
        };

        // Ne lancer la vérification que si nous sommes en état d'attente
        if (verificationStatus === 'waiting' && !verifyEmailLoading) {
            checkEmailVerification();
        }
    }, [location.search, verifyEmail, verificationStatus, verifyEmailLoading]);

    // Déterminer le statut à afficher en fonction des états combinés
    const displayStatus = verifyEmailLoading ? 'loading' : verificationStatus;

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
                            <div className={`h-20 w-20 rounded-full flex items-center justify-center ${displayStatus === 'loading' ? 'bg-muted' :
                                    displayStatus === 'success' ? 'bg-success/10' : 'bg-destructive/10'
                                }`}>
                                {displayStatus === 'loading' && (
                                    <Loader2 className="h-10 w-10 text-muted-foreground animate-spin" />
                                )}
                                {displayStatus === 'success' && (
                                    <CheckCircle2 className="h-10 w-10 text-success" />
                                )}
                                {displayStatus === 'error' && (
                                    <XCircle className="h-10 w-10 text-destructive" />
                                )}
                            </div>
                        </div>

                        <CardTitle className="text-2xl font-semibold text-center">
                            {displayStatus === 'loading' && "Vérification en cours..."}
                            {displayStatus === 'success' && "Email vérifié avec succès !"}
                            {displayStatus === 'error' && "Échec de la vérification"}
                        </CardTitle>

                        <CardDescription className="text-center">
                            {displayStatus === 'loading' && "Nous vérifions votre lien d'activation..."}
                            {displayStatus === 'success' && (
                                <>
                                    Votre compte a été activé. Vous serez redirigé vers la page de connexion dans <span className="font-semibold">{redirectCountdown}</span> secondes.
                                </>
                            )}
                            {displayStatus === 'error'  && errorMessage }
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        {displayStatus === 'success' && (
                            <div className="bg-success/10 p-4 rounded-lg text-sm border border-success/30">
                                <p className="font-medium text-success">Félicitations !</p>
                                <p className="mt-1">Votre compte est maintenant actif. Profitez de toutes les fonctionnalités de DevLife.</p>
                            </div>
                        )}

                        {displayStatus === 'error' && (
                            <div className="bg-destructive/10 p-4 rounded-lg text-sm border border-destructive/30">
                                <p className="font-medium text-destructive">Un problème est survenu</p>
                                <p className="mt-1">Le lien que vous avez utilisé n'est pas valide ou a expiré. Veuillez demander un nouveau lien de vérification.</p>
                            </div>
                        )}
                    </CardContent>

                    <CardFooter className="flex flex-col space-y-3 pt-0">
                        {displayStatus !== 'loading' && (
                            <>
                                {displayStatus === 'success' ? (
                                    <Button
                                        className="w-full"
                                        onClick={() => navigate('/auth/login')}
                                    >
                                        <LogIn className="mr-2 h-4 w-4" />
                                        Se connecter maintenant
                                    </Button>
                                ) : (
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                        onClick={() => navigate('/auth/register')}
                                    >
                                        Retour à l'inscription
                                    </Button>
                                )}

                                <div className="text-center text-sm">
                                    <Link to="/" className="font-medium text-primary hover:underline">
                                        Retour à l'accueil
                                    </Link>
                                </div>
                            </>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default EmailConfirmedScreen; 