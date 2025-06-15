
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const InterviewCard = () => {
  return (
    <Link to="/mock-interview-coach" className="block transition-transform hover:scale-105">
      <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow">
        <CardHeader>
          <MessageCircle className="h-8 w-8 text-portfolioai-purple mb-2" />
          <CardTitle>Mock Interview Coach</CardTitle>
          <CardDescription>
            Practice interviews with AI-powered coaching tailored to your target role
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Get personalized feedback and improve your interview skills
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default InterviewCard;
