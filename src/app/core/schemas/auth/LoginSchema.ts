import { z } from "zod";

export const LoginFormSchema = z.object({
  identifier: z
    .string()
    .min(3, { message: "L'identifiant est requis (3 caractères minimum)." })
    .max(50, { message: "L'identifiant ne peut pas dépasser 50 caractères." }),
  password: z
    .string()
    .min(3, { message: "Le mot de passe est requis (3 caractères minimum)." })
    .max(30, { message: "Le mot de passe ne peut pas dépasser 30 caractères." }),
});

// Fonction utilitaire pour déterminer si l'identifiant est un email
export const isEmail = (value: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};