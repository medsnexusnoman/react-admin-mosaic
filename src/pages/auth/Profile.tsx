
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { CalendarIcon, Save } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Profile = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState<Date>();
  
  // Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    cast: "",
    cnic: "",
    gender: "",
    religion: "",
    bloodGroup: "",
    age: "",
  });

  // Education Information
  const [educationInfo, setEducationInfo] = useState({
    lastEducation: "",
    instituteName: "",
  });

  // Address Information
  const [currentAddress, setCurrentAddress] = useState({
    po: "",
    village: "",
    uc: "",
    tehsil: "",
    district: "",
    province: "",
  });

  const [permanentAddress, setPermanentAddress] = useState({
    house: "",
    street: "",
    sector: "",
    near: "",
    opposite: "",
    city: "",
    colonySociety: "",
  });

  // Professional Information
  const [professionalInfo, setProfessionalInfo] = useState({
    department: "",
    designation: "",
    business: "",
    postAddress: "",
  });

  // Contact Information
  const [contactInfo, setContactInfo] = useState({
    mobile: "",
    officeNumber: "",
    email: "",
    socialAccount: "",
  });

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo({ ...personalInfo, [e.target.id]: e.target.value });
  };

  const handleEducationInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducationInfo({ ...educationInfo, [e.target.id]: e.target.value });
  };

  const handleCurrentAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAddress({ ...currentAddress, [e.target.id]: e.target.value });
  };

  const handlePermanentAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPermanentAddress({ ...permanentAddress, [e.target.id]: e.target.value });
  };

  const handleProfessionalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfessionalInfo({ ...professionalInfo, [e.target.id]: e.target.value });
  };

  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    }, 1500);
  };

  return (
    <div className="container py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>
        
        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="current-address">Current Address</TabsTrigger>
              <TabsTrigger value="permanent-address">Permanent Address</TabsTrigger>
              <TabsTrigger value="professional">Professional</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
            
            {/* Personal Information Tab */}
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        value={personalInfo.firstName}
                        onChange={handlePersonalInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        value={personalInfo.lastName}
                        onChange={handlePersonalInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cast">Cast</Label>
                      <Input 
                        id="cast" 
                        value={personalInfo.cast}
                        onChange={handlePersonalInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cnic">CNIC</Label>
                      <Input 
                        id="cnic" 
                        placeholder="00000-0000000-0"
                        value={personalInfo.cnic}
                        onChange={handlePersonalInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Date of Birth</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input 
                        id="age" 
                        type="number" 
                        value={personalInfo.age}
                        onChange={handlePersonalInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select onValueChange={(value) => setPersonalInfo({ ...personalInfo, gender: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="religion">Religion</Label>
                      <Input 
                        id="religion" 
                        value={personalInfo.religion}
                        onChange={handlePersonalInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bloodGroup">Blood Group</Label>
                      <Select onValueChange={(value) => setPersonalInfo({ ...personalInfo, bloodGroup: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select blood group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A+">A+</SelectItem>
                          <SelectItem value="A-">A-</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="B-">B-</SelectItem>
                          <SelectItem value="AB+">AB+</SelectItem>
                          <SelectItem value="AB-">AB-</SelectItem>
                          <SelectItem value="O+">O+</SelectItem>
                          <SelectItem value="O-">O-</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Education Tab */}
            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle>Education Information</CardTitle>
                  <CardDescription>
                    Update your education details here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="lastEducation">Last Education</Label>
                      <Input 
                        id="lastEducation" 
                        value={educationInfo.lastEducation}
                        onChange={handleEducationInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="instituteName">University/College/Institute Name</Label>
                      <Input 
                        id="instituteName" 
                        value={educationInfo.instituteName}
                        onChange={handleEducationInfoChange}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Current Address Tab */}
            <TabsContent value="current-address">
              <Card>
                <CardHeader>
                  <CardTitle>Current Address</CardTitle>
                  <CardDescription>
                    Update your current address details here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="po">PO</Label>
                      <Input 
                        id="po" 
                        value={currentAddress.po}
                        onChange={handleCurrentAddressChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="village">Village</Label>
                      <Input 
                        id="village" 
                        value={currentAddress.village}
                        onChange={handleCurrentAddressChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="uc">UC</Label>
                      <Input 
                        id="uc" 
                        value={currentAddress.uc}
                        onChange={handleCurrentAddressChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tehsil">Tehsil</Label>
                      <Input 
                        id="tehsil" 
                        value={currentAddress.tehsil}
                        onChange={handleCurrentAddressChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="district">District</Label>
                      <Input 
                        id="district" 
                        value={currentAddress.district}
                        onChange={handleCurrentAddressChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="province">Province</Label>
                      <Select onValueChange={(value) => setCurrentAddress({ ...currentAddress, province: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select province" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sindh">Sindh</SelectItem>
                          <SelectItem value="punjab">Punjab</SelectItem>
                          <SelectItem value="kpk">Khyber Pakhtunkhwa</SelectItem>
                          <SelectItem value="balochistan">Balochistan</SelectItem>
                          <SelectItem value="gilgit">Gilgit-Baltistan</SelectItem>
                          <SelectItem value="ajk">Azad Jammu & Kashmir</SelectItem>
                          <SelectItem value="islamabad">Islamabad Capital Territory</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Permanent Address Tab */}
            <TabsContent value="permanent-address">
              <Card>
                <CardHeader>
                  <CardTitle>Permanent Address</CardTitle>
                  <CardDescription>
                    Update your permanent address details here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="house">House</Label>
                      <Input 
                        id="house" 
                        value={permanentAddress.house}
                        onChange={handlePermanentAddressChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="street">Street or Gali</Label>
                      <Input 
                        id="street" 
                        value={permanentAddress.street}
                        onChange={handlePermanentAddressChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="sector">Sector</Label>
                      <Input 
                        id="sector" 
                        value={permanentAddress.sector}
                        onChange={handlePermanentAddressChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="near">Near</Label>
                      <Input 
                        id="near" 
                        value={permanentAddress.near}
                        onChange={handlePermanentAddressChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="opposite">Opposite</Label>
                      <Input 
                        id="opposite" 
                        value={permanentAddress.opposite}
                        onChange={handlePermanentAddressChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        value={permanentAddress.city}
                        onChange={handlePermanentAddressChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="colonySociety">Colony/Society</Label>
                      <Input 
                        id="colonySociety" 
                        value={permanentAddress.colonySociety}
                        onChange={handlePermanentAddressChange}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Professional Tab */}
            <TabsContent value="professional">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Information</CardTitle>
                  <CardDescription>
                    Update your professional details here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="department">Department or Ministry</Label>
                      <Input 
                        id="department" 
                        value={professionalInfo.department}
                        onChange={handleProfessionalInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="designation">Designation</Label>
                      <Input 
                        id="designation" 
                        value={professionalInfo.designation}
                        onChange={handleProfessionalInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="business">Business</Label>
                      <Input 
                        id="business" 
                        value={professionalInfo.business}
                        onChange={handleProfessionalInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="postAddress">Post Address</Label>
                      <Input 
                        id="postAddress" 
                        value={professionalInfo.postAddress}
                        onChange={handleProfessionalInfoChange}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Contact Tab */}
            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Update your contact details here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile</Label>
                      <Input 
                        id="mobile" 
                        value={contactInfo.mobile}
                        onChange={handleContactInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="officeNumber">Office Number</Label>
                      <Input 
                        id="officeNumber" 
                        value={contactInfo.officeNumber}
                        onChange={handleContactInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email" 
                        value={contactInfo.email}
                        onChange={handleContactInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="socialAccount">Social Account</Label>
                      <Input 
                        id="socialAccount" 
                        value={contactInfo.socialAccount}
                        onChange={handleContactInfoChange}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-end mt-8">
            <Button type="submit" className="bg-islamabad-red hover:bg-red-700" disabled={isLoading}>
              {isLoading ? (
                <span>Saving...</span>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Profile
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
