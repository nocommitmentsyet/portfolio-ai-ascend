
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const DashboardPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-portfolioai-soft-purple/30 to-white">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Job Search Command Center</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your progress, manage your applications, and improve your materials all in one place.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 max-w-5xl mx-auto animate-scale-in">
          {/* Dashboard Header */}
          <div className="bg-portfolioai-purple p-6 text-white">
            <h3 className="text-xl font-medium">Welcome back, Jessica!</h3>
            <p className="text-sm opacity-90">Your job search is 70% complete. Keep going!</p>
          </div>

          {/* Dashboard Content */}
          <div className="grid md:grid-cols-3 divide-x divide-gray-100">
            {/* Sidebar */}
            <div className="bg-gray-50 p-6">
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-500 mb-3">JOB SEARCH PROGRESS</h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Portfolio</span>
                    <span className="text-portfolioai-purple">Complete</span>
                  </div>
                  <Progress value={100} className="h-2 bg-gray-200" />
                  
                  <div className="flex justify-between text-sm mb-1">
                    <span>Resume</span>
                    <span className="text-portfolioai-purple">Complete</span>
                  </div>
                  <Progress value={100} className="h-2 bg-gray-200" />
                  
                  <div className="flex justify-between text-sm mb-1">
                    <span>Mock Interviews</span>
                    <span className="text-gray-500">2/5 Complete</span>
                  </div>
                  <Progress value={40} className="h-2 bg-gray-200" />
                  
                  <div className="flex justify-between text-sm mb-1">
                    <span>Applications</span>
                    <span className="text-gray-500">8/15 Target</span>
                  </div>
                  <Progress value={53} className="h-2 bg-gray-200" />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-3">UPCOMING</h4>
                <div className="bg-white p-3 rounded border border-gray-200 mb-2 progress-item-hover">
                  <div className="text-sm font-medium">Mock Interview</div>
                  <div className="text-xs text-gray-500">Tomorrow, 2:00 PM</div>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200 progress-item-hover">
                  <div className="text-sm font-medium">Application Deadline</div>
                  <div className="text-xs text-gray-500">Google, Front-end Developer</div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-2 p-6">
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-4">Continue Where You Left Off</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 progress-item-hover">
                    <h4 className="font-medium mb-2">Resume Generator</h4>
                    <p className="text-sm text-gray-600 mb-4">Update your skills section with new technologies.</p>
                    <Button variant="outline" size="sm">Continue</Button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 progress-item-hover">
                    <h4 className="font-medium mb-2">Interview Practice</h4>
                    <p className="text-sm text-gray-600 mb-4">3 more technical questions recommended.</p>
                    <Button variant="outline" size="sm">Start Practice</Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">Personalized Recommendations</h3>
                <div className="border border-gray-200 rounded-lg p-5 bg-portfolioai-soft-blue/20">
                  <h4 className="font-medium mb-2">Skill Gap Analysis</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Based on your target role as Front-end Developer, consider strengthening these skills:
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="bg-portfolioai-soft-purple px-2 py-1 rounded text-xs">React Hooks</span>
                    <span className="bg-portfolioai-soft-purple px-2 py-1 rounded text-xs">TypeScript</span>
                    <span className="bg-portfolioai-soft-purple px-2 py-1 rounded text-xs">GraphQL</span>
                  </div>
                  <Button className="bg-portfolioai-purple hover:bg-portfolioai-vivid-purple" size="sm">
                    View Learning Resources
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
