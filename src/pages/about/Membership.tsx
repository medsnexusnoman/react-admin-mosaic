
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Users, User, Clock, Calendar, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const membershipStats = {
  totalMembers: 5782,
  newMembers: 124,
  activeMembers: 4853,
  lifetimeMembers: 2143,
};

const benefitsData = [
  {
    title: "Community Connection",
    description: "Build relationships with fellow community members and participate in cultural events.",
    icon: Users,
  },
  {
    title: "Welfare Services",
    description: "Access healthcare support, emergency assistance, and other welfare programs.",
    icon: ShieldCheck,
  },
  {
    title: "Educational Support",
    description: "Benefit from scholarships, educational resources, and skills development programs.",
    icon: User,
  },
  {
    title: "Career Advancement",
    description: "Access job placement services, career counseling, and networking opportunities.",
    icon: User,
  },
  {
    title: "Matrimonial Services",
    description: "Connect with potential life partners from within the community through our secure platform.",
    icon: Users,
  },
  {
    title: "Directory Access",
    description: "View and connect with members from various professional backgrounds.",
    icon: Users,
  },
];

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState("regular");
  
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Membership</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Join our growing community and gain access to all the benefits and services offered by our association
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-10 w-10 text-islamabad-red mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-1">{membershipStats.totalMembers.toLocaleString()}</h3>
            <p className="text-gray-600">Total Members</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <User className="h-10 w-10 text-islamabad-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-1">{membershipStats.newMembers.toLocaleString()}</h3>
            <p className="text-gray-600">New Members This Month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Clock className="h-10 w-10 text-islamabad-orange mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-1">{membershipStats.activeMembers.toLocaleString()}</h3>
            <p className="text-gray-600">Active Members</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-1">{membershipStats.lifetimeMembers.toLocaleString()}</h3>
            <p className="text-gray-600">Lifetime Members</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Membership Benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-red-100 text-islamabad-red mr-4 shrink-0">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Membership Plans</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Select Your Membership Type</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedPlan} onValueChange={setSelectedPlan} className="w-full">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
                <TabsTrigger value="regular">Regular Membership</TabsTrigger>
                <TabsTrigger value="family">Family Membership</TabsTrigger>
                <TabsTrigger value="lifetime">Lifetime Membership</TabsTrigger>
              </TabsList>
              
              <TabsContent value="regular">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Regular Membership</h3>
                    <p className="text-gray-600 mb-6">
                      Our standard individual membership provides access to all the core benefits and services of the association.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                        <span>Annual membership with renewal option</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                        <span>Access to all standard benefits</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                        <span>Participation in community events</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                        <span>Eligibility for welfare services</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-red mr-2 shrink-0 mt-0.5" />
                        <span>Voting rights in association elections</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Badge className="mb-2">Most Popular</Badge>
                      <p className="text-2xl font-bold">₨2,000 <span className="text-sm font-normal text-gray-500">per year</span></p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Eligibility Requirements</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                      <li>Must be at least 18 years of age</li>
                      <li>Must be a member of the Sindhi community</li>
                      <li>Must provide valid identification</li>
                      <li>Must complete the application form</li>
                    </ul>
                    
                    <h3 className="text-lg font-bold mb-4">Required Documents</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                      <li>Copy of CNIC or other government-issued ID</li>
                      <li>Recent passport-sized photograph</li>
                      <li>Proof of address</li>
                      <li>Completed application form</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="family">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Family Membership</h3>
                    <p className="text-gray-600 mb-6">
                      Extend the benefits of membership to your entire family with our comprehensive family plan.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                        <span>Coverage for primary member, spouse, and children under 18</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                        <span>All standard benefits for all family members</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                        <span>Family welfare support services</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                        <span>Educational support for children</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-blue mr-2 shrink-0 mt-0.5" />
                        <span>Discounted rates for family events</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Badge className="mb-2 bg-islamabad-blue">Best Value</Badge>
                      <p className="text-2xl font-bold">₨3,500 <span className="text-sm font-normal text-gray-500">per year</span></p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Eligibility Requirements</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                      <li>Primary member must be at least 18 years of age</li>
                      <li>Must be a member of the Sindhi community</li>
                      <li>Must provide valid identification for all adult family members</li>
                      <li>Children must be under 18 years of age</li>
                    </ul>
                    
                    <h3 className="text-lg font-bold mb-4">Required Documents</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                      <li>Copy of CNIC or other government-issued ID for all adult members</li>
                      <li>Recent passport-sized photographs for all family members</li>
                      <li>Proof of address</li>
                      <li>Marriage certificate (if applicable)</li>
                      <li>Birth certificates for children</li>
                      <li>Completed family application form</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="lifetime">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Lifetime Membership</h3>
                    <p className="text-gray-600 mb-6">
                      Make a long-term commitment to our community with a one-time payment that ensures lifetime benefits.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-orange mr-2 shrink-0 mt-0.5" />
                        <span>One-time payment for lifetime membership</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-orange mr-2 shrink-0 mt-0.5" />
                        <span>All standard benefits for life</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-orange mr-2 shrink-0 mt-0.5" />
                        <span>Priority access to welfare services</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-orange mr-2 shrink-0 mt-0.5" />
                        <span>Recognition in association publications</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-orange mr-2 shrink-0 mt-0.5" />
                        <span>Special invitations to exclusive events</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-islamabad-orange mr-2 shrink-0 mt-0.5" />
                        <span>Eligibility for leadership positions</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Badge className="mb-2 bg-islamabad-orange">Lifetime Value</Badge>
                      <p className="text-2xl font-bold">₨25,000 <span className="text-sm font-normal text-gray-500">one-time payment</span></p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Eligibility Requirements</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                      <li>Must be at least 21 years of age</li>
                      <li>Must be a member of the Sindhi community</li>
                      <li>Must provide valid identification</li>
                      <li>Must have been a regular member for at least 1 year (recommended)</li>
                    </ul>
                    
                    <h3 className="text-lg font-bold mb-4">Required Documents</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                      <li>Copy of CNIC or other government-issued ID</li>
                      <li>Recent passport-sized photograph</li>
                      <li>Proof of address</li>
                      <li>Reference from existing members (if applicable)</li>
                      <li>Completed lifetime membership application</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild className="bg-islamabad-red hover:bg-red-700">
              <a href="/signup">Apply for Membership</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Membership Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-red-100 text-islamabad-red mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Application</h3>
                <p className="text-gray-600 text-sm">
                  Complete and submit the membership application form with required documents and payment.
                </p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-blue-100 text-islamabad-blue mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Verification</h3>
                <p className="text-gray-600 text-sm">
                  Our membership committee reviews your application and verifies the submitted information.
                </p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-orange-100 text-islamabad-orange mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Approval</h3>
                <p className="text-gray-600 text-sm">
                  Upon approval, you receive your membership credentials and can access all member benefits.
                </p>
              </div>
            </div>
            
            <Separator className="mb-8" />
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              
              <div className="text-left space-y-6 max-w-3xl mx-auto">
                <div>
                  <h4 className="font-bold mb-1">How long does the application process take?</h4>
                  <p className="text-gray-600">
                    The typical processing time is 7-10 business days from the receipt of a complete application with all required documents.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-1">Can I upgrade my membership type later?</h4>
                  <p className="text-gray-600">
                    Yes, members can upgrade from Regular to Family or Lifetime membership at any time by paying the difference in fees and 
                    completing the necessary paperwork.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-1">Are there any additional fees beyond the membership cost?</h4>
                  <p className="text-gray-600">
                    The membership fee covers all basic benefits. Some specialized services or events may have additional nominal charges.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-1">What happens if I miss the annual renewal?</h4>
                  <p className="text-gray-600">
                    There is a 30-day grace period for renewals. After that, a late fee may apply, or you may need to reapply as a new member.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Membership;
