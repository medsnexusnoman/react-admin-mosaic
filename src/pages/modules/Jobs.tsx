
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar, Search, Filter, ArrowRight, Building } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const jobsData = [
  {
    id: 1,
    title: "Administrative Officer",
    company: "Sindh Education Department",
    location: "Karachi",
    type: "Full-time",
    salary: "₨40,000 - ₨60,000",
    posted: "2 days ago",
    deadline: "October 30, 2023",
    featured: true,
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Tech Innovations Pakistan",
    location: "Hyderabad",
    type: "Full-time",
    salary: "₨80,000 - ₨120,000",
    posted: "1 week ago",
    deadline: "November 15, 2023",
  },
  {
    id: 3,
    title: "Financial Analyst",
    company: "Sindh Bank",
    location: "Karachi",
    type: "Full-time",
    salary: "₨70,000 - ₨90,000",
    posted: "3 days ago",
    deadline: "October 25, 2023",
  },
  {
    id: 4,
    title: "Primary School Teacher",
    company: "Islambohan Community School",
    location: "Sukkur",
    type: "Full-time",
    salary: "₨35,000 - ₨45,000",
    posted: "5 days ago",
    deadline: "November 5, 2023",
    featured: true,
  },
  {
    id: 5,
    title: "Marketing Coordinator",
    company: "Sindh Tourism Board",
    location: "Larkana",
    type: "Full-time",
    salary: "₨45,000 - ₨65,000",
    posted: "1 day ago",
    deadline: "October 28, 2023",
  },
  {
    id: 6,
    title: "Medical Officer",
    company: "District Health Department",
    location: "Jamshoro",
    type: "Full-time",
    salary: "₨90,000 - ₨120,000",
    posted: "4 days ago",
    deadline: "October 31, 2023",
  },
  {
    id: 7,
    title: "Content Writer (Sindhi)",
    company: "Media Publications Ltd",
    location: "Karachi",
    type: "Part-time",
    salary: "₨25,000 - ₨35,000",
    posted: "2 weeks ago",
    deadline: "October 23, 2023",
  },
  {
    id: 8,
    title: "Agriculture Extension Worker",
    company: "Sindh Agriculture Department",
    location: "Nawabshah",
    type: "Full-time",
    salary: "₨35,000 - ₨50,000",
    posted: "1 week ago",
    deadline: "November 10, 2023",
  },
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = location === "" || job.location === location;
    const matchesType = jobType === "" || job.type === jobType;
    
    return matchesSearch && matchesLocation && matchesType;
  });
  
  const locations = [...new Set(jobsData.map(job => job.location))];
  const jobTypes = [...new Set(jobsData.map(job => job.type))];
  
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Jobs & Careers</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find employment opportunities within our community network
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search job title or company" 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Locations</SelectItem>
                {locations.map(loc => (
                  <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                {jobTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:col-span-4">
            <Button className="w-full bg-islamabad-blue hover:bg-blue-700">
              <Filter className="mr-2 h-4 w-4" />
              Search Jobs
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Available Positions</h2>
        <p className="text-gray-600 mb-8">
          Displaying {filteredJobs.length} jobs matching your criteria
        </p>
        
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <Card key={job.id} className={`hover:shadow-lg transition-shadow overflow-hidden ${job.featured ? 'border-l-4 border-islamabad-red' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-start">
                        <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-100 text-islamabad-blue mr-4">
                          <Building className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="text-xl font-bold">{job.title}</h3>
                            {job.featured && (
                              <Badge className="ml-2 bg-islamabad-red">Featured</Badge>
                            )}
                          </div>
                          <p className="text-islamabad-blue">{job.company}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4 text-islamabad-red" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="mr-1 h-4 w-4 text-islamabad-blue" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4 text-islamabad-orange" />
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="mb-4 sm:mb-0">
                      <p className="font-semibold">{job.salary} <span className="text-gray-500 font-normal">per month</span></p>
                      <p className="text-sm text-gray-500">Application Deadline: {job.deadline}</p>
                    </div>
                    <Button className="bg-islamabad-blue hover:bg-blue-700">
                      View Details & Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No Jobs Found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any jobs matching your criteria. Please try different search terms.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setLocation("");
                  setJobType("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
        
        {filteredJobs.length > 0 && (
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mr-2">Previous</Button>
            <Button variant="outline" className="mr-2 bg-islamabad-red text-white hover:bg-red-700">1</Button>
            <Button variant="outline" className="mr-2">2</Button>
            <Button variant="outline">Next</Button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">For Job Seekers</h3>
            <p className="text-gray-600 mb-6">
              Take advantage of our community network to find the perfect job opportunity. 
              Complete your profile to receive personalized job recommendations.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                <span>Create a comprehensive profile to showcase your skills</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                <span>Receive notifications for matching job opportunities</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                <span>Apply directly through our platform</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                <span>Track your application status</span>
              </li>
            </ul>
            <Button className="w-full bg-islamabad-red hover:bg-red-700">
              Create Job Seeker Profile
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">For Employers</h3>
            <p className="text-gray-600 mb-6">
              Post job vacancies to reach qualified candidates from our community.
              Our platform helps you find the right talent efficiently.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                <span>Post job openings to reach targeted candidates</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                <span>Review applications and candidate profiles</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                <span>Communicate directly with potential employees</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                <span>Featured job listings for maximum visibility</span>
              </li>
            </ul>
            <Button className="w-full bg-islamabad-blue hover:bg-blue-700">
              Post a Job
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gradient-islamabad text-white rounded-lg p-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need Recruitment Services?</h2>
          <p className="mb-6">
            Our organization offers recruitment services to help match the right candidates with the right employers. 
            Let us help you find qualified talent or your dream job.
          </p>
          <Button className="bg-white text-islamabad-red hover:bg-gray-100">
            Contact Our Recruitment Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
