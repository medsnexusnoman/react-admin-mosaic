
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const boardMembers = [
  {
    id: 1,
    name: "Abdul Karim Soomro",
    position: "Chairman",
    bio: "Abdul Karim Soomro has been serving as the Chairman since 2020. With over 25 years of experience in community service, he brings a wealth of knowledge and leadership to the organization. He has implemented several key initiatives that have strengthened the association's impact in the community.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    contact: {
      email: "abdul.karim@iscwa.org",
      phone: "+92-21-1234567",
    },
  },
  {
    id: 2,
    name: "Fatima Khoso",
    position: "Vice Chairperson",
    bio: "Fatima Khoso is a respected academic and community leader with a PhD in Cultural Studies. She oversees educational initiatives and cultural preservation programs. Her dedication to promoting Sindhi heritage has led to the successful implementation of the Cultural Documentation Project.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    contact: {
      email: "fatima.khoso@iscwa.org",
      phone: "+92-21-2345678",
    },
  },
  {
    id: 3,
    name: "Muhammad Ali Mirza",
    position: "General Secretary",
    bio: "Muhammad Ali Mirza has been serving as the General Secretary for the past 5 years. With a background in public administration, he manages the daily operations of the association efficiently. He has streamlined administrative processes and improved communication between members.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    contact: {
      email: "muhammad.ali@iscwa.org",
      phone: "+92-21-3456789",
    },
  },
  {
    id: 4,
    name: "Ayesha Baloch",
    position: "Treasurer",
    bio: "Ayesha Baloch is a certified financial expert with over 15 years of experience in financial management. She ensures transparency and accountability in all financial matters of the association. Her implementation of digital financial tracking has significantly improved fund management.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    contact: {
      email: "ayesha.baloch@iscwa.org",
      phone: "+92-21-4567890",
    },
  },
  {
    id: 5,
    name: "Zulfiqar Shah",
    position: "Director of Welfare Programs",
    bio: "Zulfiqar Shah oversees all welfare initiatives of the association. With a background in social work, he has developed comprehensive support programs for community members in need. His leadership has expanded healthcare access and emergency assistance services.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    contact: {
      email: "zulfiqar.shah@iscwa.org",
      phone: "+92-21-5678901",
    },
  },
  {
    id: 6,
    name: "Saima Memon",
    position: "Director of Cultural Affairs",
    bio: "Saima Memon is a renowned cultural expert and artist who leads all cultural initiatives. She has organized numerous successful cultural events and exhibitions that highlight Sindhi traditions. Her work in documenting folk arts has received national recognition.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    contact: {
      email: "saima.memon@iscwa.org",
      phone: "+92-21-6789012",
    },
  },
  {
    id: 7,
    name: "Bilal Hassan",
    position: "Director of Education",
    bio: "Bilal Hassan oversees educational programs and scholarship initiatives. An educator by profession, he has implemented innovative learning programs that benefit community youth. His scholarship program has helped over 200 students pursue higher education.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    contact: {
      email: "bilal.hassan@iscwa.org",
      phone: "+92-21-7890123",
    },
  },
  {
    id: 8,
    name: "Nadia Bhutto",
    position: "Director of Public Relations",
    bio: "Nadia Bhutto manages community outreach and public relations for the association. With a background in communications, she has strengthened the organization's public image and community engagement. Her media strategies have increased awareness of the association's work.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    contact: {
      email: "nadia.bhutto@iscwa.org",
      phone: "+92-21-8901234",
    },
  },
];

const executiveMembers = [
  {
    id: 1,
    name: "Tariq Mahmood",
    position: "IT Department Manager",
    bio: "Manages the association's technical infrastructure and digital initiatives.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 2,
    name: "Sadia Jabbar",
    position: "Event Coordinator",
    bio: "Organizes cultural events, community gatherings, and special programs.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 3,
    name: "Ahmed Khan",
    position: "Community Liaison Officer",
    bio: "Serves as a link between the association and various community groups.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 4,
    name: "Rabia Shah",
    position: "Human Resources Manager",
    bio: "Oversees staffing, volunteer coordination, and membership services.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 5,
    name: "Kamran Ahmed",
    position: "Communications Specialist",
    bio: "Manages newsletters, social media, and other communications channels.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 6,
    name: "Shazia Malik",
    position: "Projects Manager",
    bio: "Coordinates and oversees implementation of various community projects.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
];

const Directors = () => {
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Board of Directors</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Meet the dedicated leaders guiding the Islambohan Sindhera Cultural & Welfare Association
        </p>
      </div>

      <Tabs defaultValue="board" className="max-w-5xl mx-auto mb-12">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="board">Board of Directors</TabsTrigger>
          <TabsTrigger value="executive">Executive Team</TabsTrigger>
        </TabsList>
        
        <TabsContent value="board">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-600 mb-8">
              Our Board of Directors is comprised of dedicated individuals who volunteer their time and expertise to guide the association. 
              They are responsible for strategic planning, governance, and ensuring we fulfill our mission.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boardMembers.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 flex flex-col items-center text-center">
                        <Avatar className="w-32 h-32 mb-4">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <Badge className="mt-1 mb-3 bg-islamabad-red">{member.position}</Badge>
                        {member.contact && (
                          <div className="space-y-2 text-sm">
                            <a 
                              href={`mailto:${member.contact.email}`} 
                              className="flex items-center justify-center text-islamabad-blue hover:underline"
                            >
                              <Mail className="h-4 w-4 mr-1" />
                              <span>{member.contact.email}</span>
                            </a>
                            <a 
                              href={`tel:${member.contact.phone}`} 
                              className="flex items-center justify-center text-islamabad-blue hover:underline"
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              <span>{member.contact.phone}</span>
                            </a>
                          </div>
                        )}
                      </div>
                      
                      <div className="md:w-2/3">
                        <p className="text-gray-600">{member.bio}</p>
                        <Button variant="ghost" className="mt-4 text-islamabad-blue hover:text-blue-700 p-0 h-auto">
                          View Full Profile <ExternalLink className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="executive">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Executive Team</h2>
            <p className="text-gray-600 mb-8">
              Our Executive Team manages the day-to-day operations of the association, implementing the strategic vision set by the Board of Directors 
              and ensuring effective delivery of programs and services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {executiveMembers.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <Badge className="mt-1 mb-3 bg-islamabad-blue">{member.position}</Badge>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="max-w-5xl mx-auto">
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Governance Structure</h2>
            <p className="text-gray-600 mb-8">
              The Islambohan Sindhera Cultural & Welfare Association operates under a structured governance system that ensures transparency, 
              accountability, and effective decision-making. Our governance approach follows these principles:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Board Elections</h3>
                <p className="text-gray-600">
                  Board Members are elected through a democratic process every three years. All registered members of the association are eligible to vote 
                  and nominate candidates. This ensures representation of the broader community in leadership positions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Decision Making</h3>
                <p className="text-gray-600">
                  Major decisions are made through a collaborative process involving Board discussions and voting. For significant policy changes or strategic initiatives, 
                  the Board consults with the general membership through town halls and feedback sessions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Accountability</h3>
                <p className="text-gray-600">
                  The association maintains financial transparency through regular audits and publishing of financial reports. Board and executive members adhere to a 
                  strict code of conduct and conflict of interest policies to ensure ethical governance.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Committees</h3>
                <p className="text-gray-600">
                  Various specialized committees oversee specific aspects of the association's work, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 ml-4">
                  <li>Finance and Audit Committee</li>
                  <li>Cultural Programs Committee</li>
                  <li>Welfare and Social Services Committee</li>
                  <li>Education and Scholarship Committee</li>
                  <li>Membership and Community Engagement Committee</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-gradient-islamabad text-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Leadership Team</h2>
            <p className="mb-6">
              We are always looking for dedicated individuals who are passionate about our mission to join our committees and 
              volunteer leadership teams. Your skills and experience can make a significant difference in our community.
            </p>
            <Button className="bg-white text-islamabad-red hover:bg-gray-100">
              Explore Leadership Opportunities
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directors;
