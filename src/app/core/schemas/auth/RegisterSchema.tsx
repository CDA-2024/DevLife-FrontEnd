import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    username: z
      .string()
      .min(3, {
        message: "Le nom d'utilisateur doit contenir au moins 3 caractères.",
      })
      .max(50, {
        message: "Le nom d'utilisateur ne doit pas dépasser 50 caractères.",
      }),
    email: z
      .string()
      .email({ message: "Veuillez entrer une adresse email valide." }).max(50),
    password: z
      .string()
      .regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
        message:
          "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.",
      }).max(50),
    confirmPassword: z.string().max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas.",
    path: ["confirmPassword"],
  });
