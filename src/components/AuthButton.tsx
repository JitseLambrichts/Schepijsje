
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { User, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AuthButton = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check for existing session
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
      setLoading(false);
    };

    getUser();

    // Set up auth listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogin = () => {
    navigate("/auth");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Uitgelogd",
      description: "Je bent succesvol uitgelogd."
    });
    navigate("/");
  };

  if (loading) {
    return (
      <Button className="bg-schepijsje-lightlime text-schepijsje-brown hover:bg-schepijsje-lime" disabled>
        <User size={20} className="mr-2" /> Laden...
      </Button>
    );
  }

  if (user) {
    return (
      <Button 
        className="bg-schepijsje-lightlime text-schepijsje-brown hover:bg-schepijsje-lime" 
        onClick={handleLogout}
      >
        <LogOut size={20} className="mr-2" /> Uitloggen
      </Button>
    );
  }

  return (
    <Button 
      className="bg-schepijsje-lightlime text-schepijsje-brown hover:bg-schepijsje-lime" 
      onClick={handleLogin}
    >
      <User size={20} className="mr-2" /> Inloggen
    </Button>
  );
};

export default AuthButton;
