import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authApiService } from "../../../services/apiAuthService";
import { useApiCallTracker } from "../../../hooks/useApiCallTracker";
import { isEmail } from "../../../schemas/auth/LoginSchema";

/**
 * Interface describing the connected user (<i>loginResponse</i>).
 */
export interface User {
    _id: string;
    name: string;
    email: string;
    role?: string;
    is_tutorial_finished?: boolean;
    is_deleted?: boolean;
}

/**
 * Interface for login data
 */
export interface LoginData {
    name?: string;
    email?: string;
    password: string;
    identifier?: string; // Peut être un email ou un nom d'utilisateur
}

/**
 * Interface for registration data
 */
export interface RegisterData {
    name: string;
    email: string;
    password: string;
}

/**
 * Interface for registration response (<i>registerResponse</i>) including a message
 */
export interface RegisterResponse {
    _id: string;
    name: string;
    email: string;
    message: string;
}

// Interface pour la réponse de vérification d'email
export interface EmailVerificationResponse {
    success: boolean;
    message: string;
    user?: {
        name: string;
        email: string;
    };
}

/**
 * Authentication hook centralizing login, registration, and logout logic.
 * This hook also provides state and error handling, while respecting
 * best practices for accessibility and performance.
 */
export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const { track, untrack, getState, setError } = useApiCallTracker();
    const navigate = useNavigate();

    // Keys to track API calls
    const loginKey = "auth:login";
    const registerKey = "auth:register";
    const logoutKey = "auth:logout";
    const verifyEmailKey = "auth:verify-email";
    const resendEmailKey = "auth:resend-verification";

    // Check at loading if a user is already connected (stored locally)
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Error reading user data:", error);
                localStorage.removeItem("user");
            }
        }
    }, []);

    /**
     * Login function that adapts the <i>loginResponse</i> from the backend.
     * Determines if the identifier is an email or username.
     * On success, user information is stored and a redirect is performed.
     */
    const login = async (data: LoginData): Promise<User> => {
        try {
            const loginData = { ...data };

            // If identifier is provided, determine if it's an email or username
            if (data.identifier) {
                if (isEmail(data.identifier)) {
                    loginData.email = data.identifier;
                } else {
                    loginData.name = data.identifier;
                }
                delete loginData.identifier;
            }

            const response = await track(loginKey, async () => {
                // API call for login (POST to /auth/login)
                return await authApiService.login<User, LoginData>("auth/login", {
                    data: loginData,
                });
            });

            // Store user information locally for persistence
            localStorage.setItem("user", JSON.stringify(response));
            setUser(response);

            // Redirect (here to /game page, adapt according to needs)
            navigate("/game");

            return response;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        } finally {
            untrack(loginKey);
        }
    };

    /**
     * Registration function that adapts the <i>registerResponse</i> from the backend.
     * The response contains a message to be displayed to inform the user of next steps.
     */
    const register = async (data: RegisterData): Promise<RegisterResponse> => {
        try {
            const response = await track(registerKey, async () => {
                // API call for registration (POST to /auth/register)
                return await authApiService.register<RegisterResponse, RegisterData>("auth/register", {
                    data: data
                });
            });

            console.log(response);

            // The front-end can use response.message to notify the user.
            return response;
        } catch (error) {
            console.error("Error during registration:", error);
            setError(registerKey, error as Error);
            throw error;
        } finally {
            untrack(registerKey);
        }
    };

    /**
     * Logout function that removes stored user data and redirects to the home page.
     */
    const logout = async () => {
        try {
            await track(logoutKey, async () => {
                // API call for logout (GET to /auth/logout)
                return await authApiService.get("auth/logout", {});
            });

            localStorage.removeItem("user");
            setUser(null);

            // Redirect to home page
            navigate("/");
        } catch (error) {
            console.error("Error during logout:", error);
            throw error;
        } finally {
            untrack(logoutKey);
        }
    };

    /**
     * Checks if a user is logged in.
     */
    const isLoggedIn = () => {
        return !!user;
    };

    /**
     * Vérifie un token d'email en appelant l'API de vérification.
     * @param token Le token de vérification reçu par email
     * @returns Une promesse qui résout avec la réponse de vérification
     */
    const verifyEmail = async (token: string): Promise<EmailVerificationResponse> => {
        try {
            const response = await track(verifyEmailKey, async () => {
                // Appel à l'API de vérification d'email
                return await authApiService.verifyEmail<EmailVerificationResponse>(token);
            });
            
            return response;
        } catch (error) {
            console.error("Erreur lors de la vérification de l'email:", error);
            throw error;
        } finally {
            untrack(verifyEmailKey);
        }
    };

    /**
     * Renvoie l'email de vérification à l'utilisateur.
     * @param email L'adresse email à laquelle envoyer l'email de vérification
     * @returns Une promesse qui résout lorsque l'email a été envoyé
     */
    const resendVerificationEmail = async (email: string): Promise<void> => {
        try {
            // Utiliser la clé constante pour suivre cet appel API spécifique
            await track(resendEmailKey, async () => {
                return await authApiService.get("auth/resend-verification", {
                    email: email
                });
            });
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email de vérification:", error);
            throw error;
        } finally {
            // S'assurer que l'état est nettoyé, quelle que soit l'issue
            untrack(resendEmailKey);
        }
    };

    // Retourner toutes les fonctions et états pertinents
    return {
        user,
        login,
        register,
        logout,
        verifyEmail,
        resendVerificationEmail,
        isLoggedIn,
        loginLoading: getState(loginKey).loading,
        loginError: getState(loginKey).error,
        registerLoading: getState(registerKey).loading,
        registerError: getState(registerKey).error,
        verifyEmailLoading: getState(verifyEmailKey).loading,
        verifyEmailError: getState(verifyEmailKey).error,
        resendEmailLoading: getState(resendEmailKey).loading,
        resendEmailError: getState(resendEmailKey).error
    };
};