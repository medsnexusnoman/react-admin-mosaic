
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, BookOpen, ShoppingBag, GraduationCap, Newspaper, Briefcase } from "lucide-react";

const Index = () => {
  const modules = [
    {
      title: "Matrimonial",
      description: "Find life partners within the community",
      icon: Heart,
      link: "/modules/matrimonial",
      color: "bg-red-100 text-islamabad-red",
    },
    {
      title: "Directory",
      description: "Community member directory",
      icon: BookOpen,
      link: "/modules/directory",
      color: "bg-blue-100 text-islamabad-blue",
    },
    {
      title: "Commercial",
      description: "Advertise your business",
      icon: ShoppingBag,
      link: "/modules/commercial",
      color: "bg-orange-100 text-islamabad-orange",
    },
    {
      title: "Academy",
      description: "Online learning resources",
      icon: GraduationCap,
      link: "/modules/academy",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "News",
      description: "Latest news and updates",
      icon: Newspaper,
      link: "/modules/news",
      color: "bg-blue-100 text-islamabad-blue",
    },
    {
      title: "Jobs",
      description: "Career opportunities",
      icon: Briefcase,
      link: "/modules/jobs",
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-islamabad h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-10 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Islambohan Sindhera Cultural & Welfare Association
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Promoting cultural heritage and community welfare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-islamabad-red hover:bg-red-700">
                <Link to="/signup">Join Our Community</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/about/manifesto">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Welcome to ISCWA</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are dedicated to preserving and promoting the cultural heritage of the Sindhi community
            while providing welfare services and support to our members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To promote cultural awareness, provide welfare assistance, and create a supportive
                community for all members of the Islambohan Sindhera Cultural & Welfare Association.
              </p>
              <Button asChild variant="link" className="mt-4 p-0 text-islamabad-red">
                <Link to="/about/manifesto">Read Our Manifesto</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Get Involved</h3>
              <p className="text-gray-600">
                Join our growing community and participate in cultural events, welfare programs,
                and social initiatives. Together, we can make a difference.
              </p>
              <Button asChild variant="link" className="mt-4 p-0 text-islamabad-red">
                <Link to="/about/membership">Become a Member</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Modules</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our various modules designed to serve the community's diverse needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${module.color}`}>
                    <module.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <Button asChild variant="link" className="p-0 text-islamabad-red">
                    <Link to={module.link}>Explore {module.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-islamabad text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community Today</h2>
          <p className="text-lg mb-8">
            Become a part of our vibrant community and contribute to preserving our cultural heritage
            while supporting welfare initiatives.
          </p>
          <Button asChild size="lg" className="bg-white text-islamabad-red hover:bg-gray-100">
            <Link to="/signup">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
