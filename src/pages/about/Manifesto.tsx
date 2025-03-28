
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Users, 
  Heart, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Building, 
  Globe, 
  Ambulance, 
  TreePine
} from "lucide-react";

const Manifesto = () => {
  const clauses = [
    {
      number: "1",
      title: "Name of the Association",
      content: "The name of Association shall be \"Islamabadian Sindhiera Cultural and Welfare Association\", hereafter called as \"ISCWA\""
    },
    {
      number: "2",
      title: "Address of the Association",
      content: "The Registered Office of the Association is situated at \"Office # 19, 3rd Floor, Capital Plaza, Sector G-11 Markaz, Islamabad\""
    },
    {
      number: "3",
      title: "Area of operation",
      content: "The Area of operation is Islamabad Capital Territory (ICT)"
    },
    {
      number: "4",
      title: "Definitions",
      content: "In these Articles unless there is anything repugnant in the subject or context.",
      definitions: [
        { key: "Articles of Association", value: "Means Articles of Association of Islamabadian Sindhiera Cultural and Welfare Association as originally framed or as altered/amended will be time to time by Managing Committee duly approved by Executive Body." },
        { key: "Association", value: "Means Islamabadian Sindhiera Cultural and Welfare Association" },
        { key: "President", value: "Means President of Islamabadian Sindhiera Cultural and Welfare Association" },
        { key: "Office Bearers", value: "Means any member holding post in the Council of Members or Executive Body or Governing Committee and includes at Centre: 1.President 2. Vice President 3. General Secretary 4. Joint General Secretary 5. Finance Secretary. 6. Joint Finance Secretary 7. Press Secretary" },
        { key: "Council", value: "Means Council of Members of Islamabadian Sindhiera Cultural and Welfare Association" },
        { key: "Executive Body", value: "Means Ordinary, Honorary and Life Members" },
        { key: "Member", value: "Means life member or member or honorary member or ordinary member of Islamabadian Sindhiera Cultural and Welfare Association /enrolled with any authorized Committee(s)." },
        { key: "Committee", value: "Means a committee formed by the Executive Body for some specific purpose." },
        { key: "Rules", value: "Means Rules of Association framed for day-to-day business." },
        { key: "Sindhiera", value: "Means Sindhi." },
        { key: "Community", value: "Means Sindhi(s) living in Islamabad Capital Territory (ICT)." }
      ]
    },
    {
      number: "5",
      title: "Nature",
      content: "The Association shall be non-political, nonsectarian and volunteer Social Welfare Association. It can get affiliate with other registered welfare association(s) and organization(s)."
    }
  ];
  
  const objectives = [
    {
      title: "Welfare of Sindhis",
      description: "Welfare of the Sindhi(s) living in the Islamabad and to address the day to day challenges faced by them.",
      icon: Heart,
    },
    {
      title: "Cultural Heritage",
      description: "To promote and flourish Sindhi Language and Culture Heritage. Organize symposiums and conferences to facilitate discussions on Sindhi language, culture, and the Indus Valley Civilization.",
      icon: BookOpen,
    },
    {
      title: "Strategic Partnerships",
      description: "Collaborate with like-minded organizations, government agencies, and stakeholders to enhance our collective impact and leverage resources to address challenges effectively.",
      icon: Users,
    },
    {
      title: "Health Facilitation",
      description: "Blood Donation, Blood Data Bank, and conduct various Health awareness programs for the community.",
      icon: Heart,
    },
    {
      title: "Education & Career",
      description: "Career Counseling & Scholarship Wing to empower community members through education, job placement, and professional development.",
      icon: GraduationCap,
    },
    {
      title: "IT Empowerment",
      description: "Empower community members with digital skills and knowledge, foster innovation, and promote responsible technology use within the community.",
      icon: Briefcase,
    },
    {
      title: "Business Hub",
      description: "Explore partnership opportunities with business communities and assist in setting up small businesses after conducting feasibility studies.",
      icon: Building,
    },
    {
      title: "Matrimonial Services",
      description: "Help community to find suitable matches supporting them in finding compatible life partners and fostering healthy marriages within the community.",
      icon: Users,
    },
    {
      title: "Emergency Services",
      description: "Offer emergency ambulance services in Islamabad and to Sindh in emergency or casualty cases with round-the-clock availability.",
      icon: Ambulance,
    },
    {
      title: "Environmental Sustainability",
      description: "Conduct tree planting drives, environmental awareness campaigns, and activities to reduce pollution in Islamabad and surrounding cities.",
      icon: TreePine,
    },
    {
      title: "Community Center",
      description: "Develop a multi-purpose facility including a marriage hall, conference room, cultural arena, gym, swimming pool, and student hostel to serve the diverse needs of the community.",
      icon: Building,
    },
    {
      title: "Women Empowerment",
      description: "Ensure access to quality education for women and girls, promoting literacy, skill development, and creating opportunities for financial independence.",
      icon: Users,
    },
  ];
  
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Constitution & Manifesto</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          The guiding principles and vision of the Islamabadian Sindhiera Cultural & Welfare Association
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Founding Charter</h2>
            
            <div className="space-y-8 mb-8">
              {clauses.map((clause, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-xl font-bold mb-3">Clause ({clause.number}) {clause.title}</h3>
                  <p className="text-gray-700 mb-4">{clause.content}</p>
                  
                  {clause.definitions && (
                    <div className="pl-4 mt-4 space-y-3">
                      {clause.definitions.map((def, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-2">
                          <div className="md:col-span-3 font-semibold">{def.key}:</div>
                          <div className="md:col-span-9 text-gray-600">{def.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-center">Clause (6) Aims and Objectives</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-red-100 text-islamabad-red mr-4 shrink-0">
                    <objective.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{objective.title}</h3>
                    <p className="text-gray-600">{objective.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
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
      </div>
    </div>
  );
};

export default Manifesto;
