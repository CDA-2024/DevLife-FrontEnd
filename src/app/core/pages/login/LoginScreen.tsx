import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../../shared/components/ui/form";
import { Input } from "../../../shared/components/ui/input";
import { Button } from "../../../shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../shared/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "../../schemas/auth/LoginSchema";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

type LoginFormInputs = z.infer<typeof LoginFormSchema>;

const LoginScreen = () => {
  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onBlur",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await fetch(
        `http://localhost:3000/users?name=${data.username}&password=${data.password}`
      );
      const users = await response.json();

      if (users.length === 1) {
        console.log("Connexion réussie", users[0]);
        navigate("/game");
      } else {
        setErrorMessage("Nom d'utilisateur ou mot de passe incorrect");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
      setErrorMessage("Erreur lors de la connexion");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-4 shadow-md">
        <CardHeader>
          <div className="mt-4 flex items-center justify-between">
            <CardTitle>Connexion</CardTitle>
            <p className="text-sm mt-2">
              <Link
                to="/auth/register"
                className="text-blue-500 hover:underline"
              >
                Pas de compte ?
              </Link>
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom d'utilisateur</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre nom d'utilisateur" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Mot de passe</FormLabel>
                      <Link
                        to="/auth/forgot-password"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        Mot de passe oublié ?
                      </Link>
                    </div>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Votre mot de passe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={!form.formState.isValid}
                className="w-full"
              >
                Connexion
              </Button>
              {errorMessage && (
                <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginScreen;
