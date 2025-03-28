
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash, Eye } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Ahmed Khan",
    email: "ahmed.khan@example.com",
    phone: "+92 301 1234567",
    status: "active",
    role: "member",
    createdAt: "2023-05-15",
  },
  {
    id: 2,
    name: "Fatima Ali",
    email: "fatima.ali@example.com",
    phone: "+92 302 2345678",
    status: "active",
    role: "admin",
    createdAt: "2023-04-20",
  },
  {
    id: 3,
    name: "Bilal Ahmed",
    email: "bilal.ahmed@example.com",
    phone: "+92 303 3456789",
    status: "inactive",
    role: "member",
    createdAt: "2023-06-10",
  },
  {
    id: 4,
    name: "Ayesha Tariq",
    email: "ayesha.tariq@example.com",
    phone: "+92 304 4567890",
    status: "active",
    role: "moderator",
    createdAt: "2023-03-05",
  },
  {
    id: 5,
    name: "Muhammad Ali",
    email: "muhammad.ali@example.com",
    phone: "+92 305 5678901",
    status: "pending",
    role: "member",
    createdAt: "2023-07-01",
  },
  {
    id: 6,
    name: "Sana Rizvi",
    email: "sana.rizvi@example.com",
    phone: "+92 306 6789012",
    status: "active",
    role: "member",
    createdAt: "2023-02-15",
  },
  {
    id: 7,
    name: "Imran Khan",
    email: "imran.khan@example.com",
    phone: "+92 307 7890123",
    status: "inactive",
    role: "member",
    createdAt: "2023-01-20",
  },
  {
    id: 8,
    name: "Zainab Hassan",
    email: "zainab.hassan@example.com",
    phone: "+92 308 8901234",
    status: "active",
    role: "moderator",
    createdAt: "2023-04-12",
  },
  {
    id: 9,
    name: "Tariq Mehmood",
    email: "tariq.mehmood@example.com",
    phone: "+92 309 9012345",
    status: "active",
    role: "member",
    createdAt: "2023-05-25",
  },
  {
    id: 10,
    name: "Hina Akram",
    email: "hina.akram@example.com",
    phone: "+92 310 0123456",
    status: "pending",
    role: "member",
    createdAt: "2023-06-30",
  },
];

const UsersList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredUsers = users.filter((user) => {
    const search = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.phone.includes(search) ||
      user.role.toLowerCase().includes(search)
    );
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "moderator":
        return "bg-blue-100 text-blue-800";
      case "member":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Users Management</h1>
          <p className="text-gray-500">Manage all registered users</p>
        </div>
        <Button className="bg-islamabad-red hover:bg-red-700">
          <Plus className="mr-2 h-4 w-4" /> Add User
        </Button>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search users by name, email, or phone"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>User List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left font-medium">Name</th>
                  <th className="py-3 px-4 text-left font-medium">Email</th>
                  <th className="py-3 px-4 text-left font-medium">Phone</th>
                  <th className="py-3 px-4 text-left font-medium">Status</th>
                  <th className="py-3 px-4 text-left font-medium">Role</th>
                  <th className="py-3 px-4 text-left font-medium">Registered</th>
                  <th className="py-3 px-4 text-center font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{user.name}</td>
                      <td className="py-3 px-4">{user.email}</td>
                      <td className="py-3 px-4">{user.phone}</td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className={getStatusColor(user.status)}>
                          {user.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className={getRoleColor(user.role)}>
                          {user.role}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">{user.createdAt}</td>
                      <td className="py-3 px-4">
                        <div className="flex justify-center space-x-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-700">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-6 text-center text-gray-500">
                      No users found matching your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              Showing {filteredUsers.length} of {users.length} users
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm" className="bg-islamabad-red text-white hover:bg-red-700">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersList;
