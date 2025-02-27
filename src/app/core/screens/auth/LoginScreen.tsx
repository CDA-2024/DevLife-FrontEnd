import { Input } from "../../../shared/components/Shadcn/ui/input";
import { Button } from "../../../shared/components/Shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../../shared/components/Shadcn/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "../../schemas/auth/LoginSchema";
import { Link } from "react-router-dom";
import { Label } from "../../../shared/components/Shadcn/ui/label";
import { useAuth } from "./hooks/useAuth";
import { toast } from "../../../shared/hooks/use-toast";
import { Separator } from "../../../shared/components/Shadcn/ui/separator";
import { Loader2, Mail, Lock, ArrowRight } from "lucide-react";

type LoginFormInputs = z.infer<typeof LoginFormSchema>;

const LoginScreen = () => {
  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
    mode: "onBlur",
  });

  const { login, loginLoading, loginError } = useAuth();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await login({
        identifier: data.identifier,
        password: data.password
      });

      toast({
        title: "Connexion réussie",
        description: "Vous êtes maintenant connecté",
        variant: "success",
        duration: 3000,
      });
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
      
      // Affichage d'un toast d'erreur
      toast({
        title: "Échec de la connexion",
        description: "Identifiant ou mot de passe incorrect",
        variant: "destructive",
        duration: 5000, // Durée plus longue pour les erreurs
      });
      
      // Définir une erreur sur le formulaire
      form.setError("root.serverError", {
        message: "Identifiant ou mot de passe incorrect"
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
            <CardTitle className="text-2xl font-semibold text-center">Connexion</CardTitle>
            <CardDescription className="text-center">
              Entrez vos identifiants pour accéder à votre compte
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-4">
              <div className="space-y-6">
                {/* Options de connexion sociale */}
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" type="button" className="h-10">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                        fill="currentColor"
                      />
                    </svg>
                    Apple
                  </Button>
                  <Button variant="outline" type="button" className="h-10">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    Google
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      Ou continuer avec
                    </span>
                  </div>
                </div>
                
                {/* Formulaire de connexion */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      <Label htmlFor="identifier" className="font-medium">Adresse e-mail ou nom d'utilisateur</Label>
                    </div>
                    <Input
                      id="identifier"
                      type="text"
                      placeholder="email@exemple.com ou nom d'utilisateur"
                      autoComplete="username"
                      required
                      {...form.register("identifier")}
                      aria-invalid={!!form.formState.errors.identifier}
                      aria-describedby={form.formState.errors.identifier ? "identifier-error" : undefined}
                      className="h-10"
                    />
                    {form.formState.errors.identifier && (
                      <p id="identifier-error" className="text-sm text-destructive" role="alert">
                        {form.formState.errors.identifier.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Lock className="mr-2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <Label htmlFor="password" className="font-medium">Mot de passe</Label>
                      </div>
                      <Link to="/auth/forgot-password" className="text-xs text-primary hover:underline">
                        Mot de passe oublié ?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      {...form.register("password")}
                      aria-invalid={!!form.formState.errors.password}
                      aria-describedby={form.formState.errors.password ? "password-error" : undefined}
                      className="h-10"
                    />
                    {form.formState.errors.password && (
                      <p id="password-error" className="text-sm text-destructive" role="alert">
                        {form.formState.errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Affichage des erreurs générales */}
              {(loginError || form.formState.errors.root?.serverError) && (
                <div 
                  role="alert" 
                  className="p-3 text-sm text-white bg-destructive rounded-md"
                >
                  {loginError?.message || form.formState.errors.root?.serverError?.message}
                </div>
              )}
              
              {/* Bouton de connexion */}
              <Button 
                type="submit" 
                className="w-full h-10"
                disabled={loginLoading}
                aria-busy={loginLoading}
              >
                {loginLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Connexion en cours...
                  </>
                ) : (
                  <>
                    Se connecter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-3 pt-0">
            <div className="text-center text-sm">
              Vous n'avez pas de compte ?{" "}
              <Link to="/auth/register" className="font-medium text-primary hover:underline">
                S'inscrire maintenant
              </Link>
            </div>
          </CardFooter>
        </Card>
        
        <div className="text-center text-xs text-muted-foreground">
          En vous connectant, vous acceptez nos{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary">Conditions d'utilisation</a>{" "}
          et notre{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary">Politique de confidentialité</a>.
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
