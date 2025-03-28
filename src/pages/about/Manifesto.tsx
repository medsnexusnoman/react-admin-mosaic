
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Heart, BookOpen, GraduationCap, Briefcase } from "lucide-react";

const Manifesto = () => {
  const goals = [
    {
      title: "Preserve Cultural Heritage",
      description: "Promote and preserve the rich cultural heritage of the Sindhi community through education, events, and documentation.",
      icon: BookOpen,
    },
    {
      title: "Community Welfare",
      description: "Provide welfare support to community members through healthcare initiatives, financial assistance, and emergency services.",
      icon: Heart,
    },
    {
      title: "Education Development",
      description: "Support educational advancement by providing scholarships, training programs, and learning resources.",
      icon: GraduationCap,
    },
    {
      title: "Career Opportunities",
      description: "Create and facilitate career opportunities through job placements, career counseling, and entrepreneurship support.",
      icon: Briefcase,
    },
    {
      title: "Community Unity",
      description: "Foster unity among community members through regular gatherings, celebrations, and collaborative initiatives.",
      icon: Users,
    },
  ];
  
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Our Manifesto</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          The guiding principles and vision of the Islambohan Sindhera Cultural & Welfare Association
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Vision Statement</h2>
            <p className="text-xl text-center italic mb-6 text-gray-700">
              "To preserve and promote the cultural heritage of the Sindhi community while ensuring the welfare and advancement of all members."
            </p>
            
            <h2 className="text-2xl font-bold mb-6 text-center">Mission Statement</h2>
            <p className="text-gray-600 mb-8">
              The Islambohan Sindhera Cultural & Welfare Association is dedicated to preserving and promoting the rich cultural heritage of the Sindhi community. 
              We strive to provide welfare support, educational opportunities, and career advancement for all our members while fostering unity and collaboration 
              within the community.
            </p>
            
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div key={index} className="flex items-start">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-red-100 text-islamabad-red mr-4 shrink-0">
                    <goal.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{goal.title}</h3>
                    <p className="text-gray-600">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Integrity</span>
                    <p className="text-gray-600 text-sm">Acting with honesty, transparency, and ethical principles in all our endeavors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Inclusivity</span>
                    <p className="text-gray-600 text-sm">Embracing diversity and ensuring all community members feel welcome and valued.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Service</span>
                    <p className="text-gray-600 text-sm">Dedicating ourselves to meeting the needs of our community members with compassion.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Excellence</span>
                    <p className="text-gray-600 text-sm">Striving for the highest quality in all programs and services we provide.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Cooperation</span>
                    <p className="text-gray-600 text-sm">Working together with members and organizations to achieve our shared goals.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Our Commitments</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Cultural Preservation</span>
                    <p className="text-gray-600 text-sm">Documenting, preserving, and promoting Sindhi language, arts, customs, and traditions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Education Support</span>
                    <p className="text-gray-600 text-sm">Providing scholarships, educational resources, and mentoring to community members.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Health Initiatives</span>
                    <p className="text-gray-600 text-sm">Organizing health camps, awareness programs, and providing healthcare assistance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Economic Empowerment</span>
                    <p className="text-gray-600 text-sm">Supporting business development, job placements, and financial assistance programs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Community Building</span>
                    <p className="text-gray-600 text-sm">Organizing events, celebrations, and gatherings to strengthen community bonds.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-islamabad text-white rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
            <p className="mb-6">
              Become a part of our vibrant community and help us fulfill our mission of preserving cultural heritage and supporting community welfare.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-white text-islamabad-red hover:bg-gray-100">
                <a href="/about/membership">Become a Member</a>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                <a href="/about/activities">View Our Activities</a>
              </Button>
            </div>
          </div>
        </div>
        
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Historical Background</h2>
            <p className="text-gray-600 mb-6">
              The Islambohan Sindhera Cultural & Welfare Association was established in 1985 by a group of dedicated community leaders who recognized the need to preserve
              the cultural heritage of the Sindhi community while addressing their welfare needs. Over the decades, the association has grown to become a trusted institution
              serving thousands of community members.
            </p>
            <p className="text-gray-600 mb-6">
              From humble beginnings with just a few dozen members, the association now serves as a central hub for cultural activities, welfare programs, educational initiatives, 
              and community support services. Our journey reflects our commitment to adapting to the changing needs of our community while staying true to our core values.
            </p>
            <p className="text-gray-600">
              Today, we continue to build upon the strong foundation laid by our founders, expanding our reach and impact to better serve our community members in all aspects of their lives.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Manifesto;
