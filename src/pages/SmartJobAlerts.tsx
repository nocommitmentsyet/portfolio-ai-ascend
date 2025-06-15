
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, ArrowLeft } from "lucide-react";

const SmartJobAlerts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Bell className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Smart Job Alerts</h1>
            <p className="text-xl text-muted-foreground">
              Get notified about relevant job opportunities matching your skills and preferences
            </p>
          </div>
          
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl">Coming Soon!</CardTitle>
              <CardDescription className="text-lg">
                We're working hard to bring you intelligent job alerts that match your career goals.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-left space-y-3">
                <h3 className="font-semibold">What to expect:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Personalized job recommendations based on your profile</li>
                  <li>• Real-time notifications for new opportunities</li>
                  <li>• Smart filtering by location, salary, and company size</li>
                  <li>• Integration with major job boards</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Button asChild>
                  <Link to="/">Return to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SmartJobAlerts;
