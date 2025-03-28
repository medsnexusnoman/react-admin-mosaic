
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const profiles = [
  {
    id: 1,
    name: "Ahmed Khan",
    age: 28,
    gender: "Male",
    education: "MBA",
    occupation: "Business Manager",
    location: "Karachi",
  },
  {
    id: 2,
    name: "Ayesha Ali",
    age: 25,
    gender: "Female",
    education: "MBBS",
    occupation: "Doctor",
    location: "Lahore",
  },
  {
    id: 3,
    name: "Bilal Ahmed",
    age: 30,
    gender: "Male",
    education: "MSc Computer Science",
    occupation: "Software Engineer",
    location: "Islamabad",
  },
  {
    id: 4,
    name: "Fatima Zahra",
    age: 27,
    gender: "Female",
    education: "MA English",
    occupation: "Teacher",
    location: "Hyderabad",
  },
  {
    id: 5,
    name: "Hamza Malik",
    age: 32,
    gender: "Male",
    education: "LLB",
    occupation: "Lawyer",
    location: "Karachi",
  },
  {
    id: 6,
    name: "Zainab Khan",
    age: 26,
    gender: "Female",
    education: "BBA",
    occupation: "HR Manager",
    location: "Sukkur",
  },
];

const Matrimonial = () => {
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Matrimonial Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find suitable life partners from within the community with our trusted matrimonial service
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="mr-2 h-5 w-5 text-islamabad-red" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Age Range</label>
                <div className="flex items-center gap-2">
                  <Input type="number" placeholder="Min" className="w-1/2" />
                  <span>-</span>
                  <Input type="number" placeholder="Max" className="w-1/2" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Gender</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option value="">Any</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Education</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option value="">Any</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Post Graduate</option>
                  <option value="doctorate">Doctorate</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Location</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option value="">Any</option>
                  <option value="karachi">Karachi</option>
                  <option value="lahore">Lahore</option>
                  <option value="islamabad">Islamabad</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="sukkur">Sukkur</option>
                </select>
              </div>
              
              <Button className="w-full bg-islamabad-red hover:bg-red-700">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:w-3/4">
          <div className="mb-6 flex items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search by name, occupation, or location" 
                className="pl-10"
              />
            </div>
            <Button className="ml-2 bg-islamabad-blue hover:bg-blue-700">
              Search
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {profiles.map((profile) => (
              <Card key={profile.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{profile.name}</CardTitle>
                  <CardDescription>
                    {profile.age} years, {profile.gender}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Education:</strong> {profile.education}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Occupation:</strong> {profile.occupation}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Location:</strong> {profile.location}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full text-islamabad-red border-islamabad-red hover:bg-red-50">
                    <Heart className="mr-2 h-4 w-4" /> View Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mr-2">Previous</Button>
            <Button variant="outline" className="mr-2">1</Button>
            <Button variant="outline" className="mr-2 bg-islamabad-red text-white hover:bg-red-700">2</Button>
            <Button variant="outline" className="mr-2">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
      
      <div className="mt-12 bg-gray-50 p-8 rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Join Our Matrimonial Service</h2>
          <p className="text-gray-600">Create your profile and start your search for the perfect match</p>
        </div>
        
        <div className="flex justify-center">
          <Button asChild className="bg-islamabad-red hover:bg-red-700">
            <Link to="/signup">Create Matrimonial Profile</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Matrimonial;
