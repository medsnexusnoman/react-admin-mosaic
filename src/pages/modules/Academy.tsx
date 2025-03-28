
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Book, Video, Clock, User, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: 1,
    title: "Introduction to Sindhi Culture",
    instructor: "Prof. Fatima Khoso",
    duration: "6 weeks",
    level: "Beginner",
    students: 128,
    image: "https://images.unsplash.com/photo-1594050753835-3c8ee21410b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmRofGVufDB8fDB8fHww",
    category: "culture",
    featured: true,
  },
  {
    id: 2,
    title: "Sindhi Language Basics",
    instructor: "Dr. Ahmed Memon",
    duration: "8 weeks",
    level: "Beginner",
    students: 94,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "language",
  },
  {
    id: 3,
    title: "Advanced Sindhi Literature",
    instructor: "Dr. Saima Soomro",
    duration: "10 weeks",
    level: "Advanced",
    students: 67,
    image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "literature",
  },
  {
    id: 4,
    title: "Traditional Sindhi Music",
    instructor: "Ustad Kareem Nizamani",
    duration: "6 weeks",
    level: "Intermediate",
    students: 85,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "culture",
    featured: true,
  },
  {
    id: 5,
    title: "History of Sindh",
    instructor: "Prof. Zulfiqar Mirza",
    duration: "12 weeks",
    level: "Intermediate",
    students: 112,
    image: "https://images.unsplash.com/photo-1566096650255-98773eb4452a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "history",
  },
  {
    id: 6,
    title: "Sindhi Crafts & Embroidery",
    instructor: "Ms. Samina Ibrahim",
    duration: "8 weeks",
    level: "Beginner",
    students: 76,
    image: "https://images.unsplash.com/photo-1606722590732-3ac92d5c9b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "culture",
  },
];

const webinars = [
  {
    id: 1,
    title: "Preserving Sindhi Culture in Modern Times",
    speaker: "Dr. Ayesha Khuhro",
    date: "October 15, 2023",
    time: "3:00 PM PKT",
    duration: "90 minutes",
    category: "culture",
  },
  {
    id: 2,
    title: "Career Opportunities for Sindhi Youth",
    speaker: "Mr. Zulfiqar Shah",
    date: "October 22, 2023",
    time: "5:00 PM PKT",
    duration: "60 minutes",
    category: "career",
  },
  {
    id: 3,
    title: "Digital Literacy Workshop",
    speaker: "Eng. Bilal Memon",
    date: "November 5, 2023",
    time: "4:00 PM PKT",
    duration: "120 minutes",
    category: "technology",
  },
];

const Academy = () => {
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Online Academy</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover courses and educational resources focused on Sindhi culture, language, and heritage
        </p>
      </div>

      <Tabs defaultValue="courses" className="mb-12">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="webinars">Webinars & Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="courses">
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Available Courses</h2>
              <p className="text-gray-600">Enhance your knowledge with our curated courses</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="text-sm" size="sm">All Categories</Button>
              <Button variant="outline" className="text-sm" size="sm">Culture</Button>
              <Button variant="outline" className="text-sm" size="sm">Language</Button>
              <Button variant="outline" className="text-sm" size="sm">History</Button>
              <Button variant="outline" className="text-sm" size="sm">Literature</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className={`overflow-hidden hover:shadow-lg transition-shadow ${course.featured ? 'border-2 border-islamabad-red' : ''}`}>
                <div className="relative h-48 w-full">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                  {course.featured && (
                    <Badge className="absolute top-2 right-2 bg-islamabad-red">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span>{course.instructor}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span>{course.students} students</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                    <Badge variant="outline" className="text-xs capitalize">
                      {course.category}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-islamabad-blue hover:bg-blue-700">
                    View Course
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-2">Load More Courses</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="webinars">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Upcoming Webinars & Events</h2>
            <p className="text-gray-600">Join our live sessions with experts</p>
          </div>
          
          <div className="space-y-6">
            {webinars.map((webinar) => (
              <Card key={webinar.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex items-center justify-center bg-blue-50 rounded-lg p-6">
                      <div className="text-center">
                        <Calendar className="h-12 w-12 text-islamabad-blue mx-auto mb-2" />
                        <p className="font-bold text-lg">{webinar.date}</p>
                        <p className="text-sm text-gray-500">{webinar.time}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <Badge className="mb-2 capitalize bg-islamabad-red">
                        {webinar.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                      <p className="text-gray-600 mb-4">
                        Join this interactive session where we discuss important topics related to our community and culture.
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>Speaker: {webinar.speaker}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Duration: {webinar.duration}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        <Button className="bg-islamabad-blue hover:bg-blue-700">
                          Register Now
                        </Button>
                        <Button variant="outline">
                          Add to Calendar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Propose a Webinar</h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Are you an expert in Sindhi culture, history, or language? Share your knowledge with our community by hosting a webinar.
            </p>
            <Button className="bg-islamabad-red hover:bg-red-700">Submit Webinar Proposal</Button>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="bg-gradient-islamabad text-white rounded-lg p-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Academy Today</h2>
          <p className="mb-6">
            Access all courses, webinars, and educational resources with an academy membership.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white text-gray-800">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Basic Access</h3>
                <p className="text-3xl font-bold text-islamabad-red mb-4">Free</p>
                <ul className="text-left text-sm space-y-2 mb-6">
                  <li>• Access to free webinars</li>
                  <li>• Community forums</li>
                  <li>• Basic learning resources</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-gray-800 border-2 border-islamabad-blue">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Premium Access</h3>
                <p className="text-3xl font-bold text-islamabad-blue mb-4">₨1,500<span className="text-sm text-gray-500">/month</span></p>
                <ul className="text-left text-sm space-y-2 mb-6">
                  <li>• All basic features</li>
                  <li>• Full course access</li>
                  <li>• Webinar recordings</li>
                  <li>• Certificates of completion</li>
                  <li>• Direct Q&A with instructors</li>
                </ul>
                <Button className="w-full bg-islamabad-blue hover:bg-blue-700">
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-gray-800">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Annual Plan</h3>
                <p className="text-3xl font-bold text-islamabad-orange mb-4">₨15,000<span className="text-sm text-gray-500">/year</span></p>
                <ul className="text-left text-sm space-y-2 mb-6">
                  <li>• All premium features</li>
                  <li>• 2 months free</li>
                  <li>• Early access to new courses</li>
                  <li>• Exclusive webinars</li>
                  <li>• Downloadable resources</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Subscribe Yearly
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Learn with Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div>
            <div className="rounded-full w-16 h-16 flex items-center justify-center bg-red-100 text-islamabad-red mx-auto mb-4">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from recognized authorities in Sindhi culture and heritage.</p>
          </div>
          
          <div>
            <div className="rounded-full w-16 h-16 flex items-center justify-center bg-blue-100 text-islamabad-blue mx-auto mb-4">
              <Book className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">Quality Content</h3>
            <p className="text-gray-600">Carefully curated materials to ensure authentic and accurate information.</p>
          </div>
          
          <div>
            <div className="rounded-full w-16 h-16 flex items-center justify-center bg-orange-100 text-islamabad-orange mx-auto mb-4">
              <Video className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">Interactive Learning</h3>
            <p className="text-gray-600">Engage through videos, quizzes, and live sessions for better retention.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
