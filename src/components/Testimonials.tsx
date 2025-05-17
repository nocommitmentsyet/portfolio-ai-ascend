
import { Card, CardContent } from "@/components/ui/card";

const testimonialsData = [
  {
    quote: "The portfolio builder saved me hours of work and helped me land interviews at three companies within a week!",
    name: "Alex Chen",
    position: "UX Designer",
    avatar: "AC",
  },
  {
    quote: "As a bootcamp graduate, I was struggling to showcase my projects professionally. PortfolioAI solved that problem instantly.",
    name: "Maria Rodriguez",
    position: "Junior Developer",
    avatar: "MR",
  },
  {
    quote: "The interview coaching feature gave me confidence I never had before. I felt so prepared for my job interviews.",
    name: "James Wilson",
    position: "Data Analyst",
    avatar: "JW",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how PortfolioAI has helped job seekers like you land their dream roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-white to-portfolioai-soft-purple/20 border-0 shadow-md animate-scale-in">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg className="h-8 w-8 text-portfolioai-purple opacity-70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H10V18H0Z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 flex-grow mb-6">{testimonial.quote}</p>
                  <div className="flex items-center mt-auto">
                    <div className="bg-portfolioai-purple text-white rounded-full h-10 w-10 flex items-center justify-center font-medium text-sm">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
