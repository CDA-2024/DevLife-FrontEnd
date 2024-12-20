import { z } from "zod";

export const LoginFormSchema = z.object({
  username: z.string().min(1, { message: "Le nom d'utilisateur est requis." }).max(30),
  password: z.string().min(1, { message: "Le mot de passe est requis." }).max(30),
});