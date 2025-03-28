
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Phone, Mail, ArrowUpDown } from "lucide-react";

const directoryData = [
  {
    id: 1,
    name: "Abdul Karim",
    designation: "Director General",
    department: "Administration",
    officeNumber: "+92-21-1234567",
    email: "abdul.karim@gov.pk",
  },
  {
    id: 2,
    name: "Fatima Ahmed",
    designation: "Deputy Director",
    department: "Finance",
    officeNumber: "+92-21-2345678",
    email: "fatima.ahmed@gov.pk",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    designation: "Assistant Director",
    department: "Human Resources",
    officeNumber: "+92-21-3456789",
    email: "mohammed.ali@gov.pk",
  },
  {
    id: 4,
    name: "Ayesha Khan",
    designation: "Senior Officer",
    department: "Information Technology",
    officeNumber: "+92-21-4567890",
    email: "ayesha.khan@gov.pk",
  },
  {
    id: 5,
    name: "Bilal Hassan",
    designation: "Project Manager",
    department: "Development",
    officeNumber: "+92-21-5678901",
    email: "bilal.hassan@gov.pk",
  },
  {
    id: 6,
    name: "Sadia Jabbar",
    designation: "Finance Officer",
    department: "Finance",
    officeNumber: "+92-21-6789012",
    email: "sadia.jabbar@gov.pk",
  },
  {
    id: 7,
    name: "Tariq Mahmood",
    designation: "HR Specialist",
    department: "Human Resources",
    officeNumber: "+92-21-7890123",
    email: "tariq.mahmood@gov.pk",
  },
  {
    id: 8,
    name: "Zainab Riaz",
    designation: "IT Manager",
    department: "Information Technology",
    officeNumber: "+92-21-8901234",
    email: "zainab.riaz@gov.pk",
  },
];

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  
  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };
  
  // Filter and sort data
  const filteredData = directoryData.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchLower) ||
      item.designation.toLowerCase().includes(searchLower) ||
      item.department.toLowerCase().includes(searchLower)
    );
  }).sort((a, b) => {
    const fieldA = a[sortBy as keyof typeof a];
    const fieldB = b[sortBy as keyof typeof b];
    
    if (typeof fieldA === 'string' && typeof fieldB === 'string') {
      return sortOrder === "asc"
        ? fieldA.localeCompare(fieldB)
        : fieldB.localeCompare(fieldA);
    }
    
    return 0;
  });

  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Community Directory</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find contact information for members within our organization
        </p>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input 
            placeholder="Search by name, designation, or department" 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-4 py-3 text-left font-medium text-gray-600">
                    <button 
                      className="flex items-center space-x-1"
                      onClick={() => handleSort("name")}
                    >
                      <span>Name</span>
                      {sortBy === "name" && (
                        <ArrowUpDown className="h-4 w-4" />
                      )}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">
                    <button 
                      className="flex items-center space-x-1"
                      onClick={() => handleSort("designation")}
                    >
                      <span>Designation</span>
                      {sortBy === "designation" && (
                        <ArrowUpDown className="h-4 w-4" />
                      )}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">
                    <button 
                      className="flex items-center space-x-1"
                      onClick={() => handleSort("department")}
                    >
                      <span>Department</span>
                      {sortBy === "department" && (
                        <ArrowUpDown className="h-4 w-4" />
                      )}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Office Contact</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((person) => (
                    <tr key={person.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">{person.name}</td>
                      <td className="px-4 py-3">{person.designation}</td>
                      <td className="px-4 py-3">{person.department}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-islamabad-red" />
                          <span>{person.officeNumber}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <Mail className="h-4 w-4 text-islamabad-blue" />
                          <span className="text-sm text-gray-600">{person.email}</span>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                      No records found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-center mt-8">
        <Button variant="outline" className="mr-2">Previous</Button>
        <Button variant="outline" className="mr-2 bg-islamabad-red text-white hover:bg-red-700">1</Button>
        <Button variant="outline" className="mr-2">2</Button>
        <Button variant="outline">Next</Button>
      </div>
      
      <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
        <p className="text-gray-600 mb-6">If you need detailed contact information or assistance, please get in touch with us.</p>
        <Button className="bg-islamabad-blue hover:bg-blue-700">Contact Administration</Button>
      </div>
    </div>
  );
};

export default Directory;
