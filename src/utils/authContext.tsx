import React from "react";
import { User } from "@supabase/supabase-js";
import supabase from "../supaBase";

interface IContext {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  loading: boolean;
}

const AuthContext = React.createContext<IContext | null>(null);

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function getLatestUser(accessToken: string) {
      const { user: latestUser } = await supabase.auth.api.getUser(accessToken);
      setUser(latestUser);
      setLoading(false);
    }
    const jwt = localStorage.getItem("supabase.auth.token");
    if (!jwt) return setLoading(false);
    const {
      currentSession: { access_token },
    } = JSON.parse(jwt);
    getLatestUser(access_token);
  }, []);

  console.log(user);

  function handleError(message: string) {
    setLoading(false);
    throw new Error(message);
  }

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const response = await supabase.auth.signIn({ email, password });
    if (response.error) handleError(response.error.message);
    setUser(response.user);
    setLoading(false);
  };

  const signOut = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setLoading(false);
  };

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    const response = await supabase.auth.signUp({ email, password });
    if (response.error) handleError(response.error.message);
    setUser(response.user);
    setLoading(false);
  };

  const context: IContext = {
    user,
    signIn,
    signOut,
    signUp,
    loading,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
