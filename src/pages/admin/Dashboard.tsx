
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Users, Heart, Eye, MessageSquare, UserPlus, DollarSign, GraduationCap, Briefcase } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">Welcome to your ISCWA admin dashboard</p>
      </div>
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,345</div>
            <p className="text-xs text-gray-500">
              <span className="text-green-500 flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                12% increase
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Matrimonial Profiles</CardTitle>
            <Heart className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">476</div>
            <p className="text-xs text-gray-500">
              <span className="text-green-500 flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                8% increase
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18,549</div>
            <p className="text-xs text-gray-500">
              <span className="text-green-500 flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                24% increase
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">27</div>
            <p className="text-xs text-gray-500">
              <span className="text-red-500 flex items-center">
                <ArrowDown className="h-3 w-3 mr-1" />
                5% decrease
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Module Activity</CardTitle>
            <CardDescription>User engagement across different modules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Matrimonial</span>
                    <span className="text-sm text-gray-500">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-islamabad-red h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Directory</span>
                    <span className="text-sm text-gray-500">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-islamabad-blue h-2 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Commercial</span>
                    <span className="text-sm text-gray-500">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-islamabad-orange h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Academy</span>
                    <span className="text-sm text-gray-500">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-islamabad-yellow h-2 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">News</span>
                    <span className="text-sm text-gray-500">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Jobs</span>
                    <span className="text-sm text-gray-500">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-3 bg-blue-100 p-2 rounded-full">
                  <UserPlus className="h-4 w-4 text-islamabad-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium">New user registered</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 bg-red-100 p-2 rounded-full">
                  <Heart className="h-4 w-4 text-islamabad-red" />
                </div>
                <div>
                  <p className="text-sm font-medium">New matrimonial profile created</p>
                  <p className="text-xs text-gray-500">4 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 bg-orange-100 p-2 rounded-full">
                  <DollarSign className="h-4 w-4 text-islamabad-orange" />
                </div>
                <div>
                  <p className="text-sm font-medium">New commercial advertisement added</p>
                  <p className="text-xs text-gray-500">yesterday</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 bg-yellow-100 p-2 rounded-full">
                  <GraduationCap className="h-4 w-4 text-islamabad-yellow" />
                </div>
                <div>
                  <p className="text-sm font-medium">New course added to academy</p>
                  <p className="text-xs text-gray-500">yesterday</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 bg-purple-100 p-2 rounded-full">
                  <Briefcase className="h-4 w-4 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">New job posting created</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
