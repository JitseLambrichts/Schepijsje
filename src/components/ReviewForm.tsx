
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewFormProps {
  onReviewAdded: () => void;
}

const ReviewForm = ({ onReviewAdded }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check for existing session
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
    };
    
    getUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Waardering nodig",
        description: "Geef een aantal sterren voor je review.",
        variant: "destructive",
      });
      return;
    }

    if (!user) {
      toast({
        title: "Inloggen vereist",
        description: "Je moet ingelogd zijn om een review te plaatsen.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const { error } = await supabase.from("reviews").insert({
        rating,
        comment,
        user_id: user.id
      });
      
      if (error) throw error;
      
      toast({
        title: "Bedankt voor je review!",
        description: "Je review is succesvol geplaatst.",
      });
      
      // Reset form
      setRating(0);
      setComment("");
      
      // Refresh reviews list
      onReviewAdded();
    } catch (error: any) {
      toast({
        title: "Fout bij het plaatsen van je review",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mb-8 max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-center text-xl">Deel jouw ervaring</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            {[1, 2, 3, 4, 5].map((value) => (
              <Star
                key={value}
                size={32}
                className={`cursor-pointer mx-1 ${
                  (hoverRating || rating) >= value
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(value)}
                onMouseEnter={() => setHoverRating(value)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
          <Textarea
            placeholder="Vertel ons over jouw ervaring..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[100px]"
          />
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-schepijsje-lime hover:bg-schepijsje-lime/90 text-schepijsje-brown" 
            disabled={loading || !user}
          >
            {loading ? "Bezig met plaatsen..." : user ? "Plaats Review" : "Log in om een review te plaatsen"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ReviewForm;
