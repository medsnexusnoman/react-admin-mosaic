
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock, Globe, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We will respond shortly.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };
  
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get in touch with us for inquiries, support, or to learn more about our association
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-red-100 text-islamabad-red mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Our Location</h3>
                <p className="text-gray-600">
                  ISCWA Head Office<br />
                  123 Main Street, Clifton<br />
                  Karachi, Pakistan
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-100 text-islamabad-blue mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Contact Numbers</h3>
                <p className="text-gray-600">
                  Main Office: +92-21-12345678<br />
                  Welfare Services: +92-21-87654321<br />
                  Emergency Helpline: +92-300-1234567
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-orange-100 text-islamabad-orange mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Addresses</h3>
                <p className="text-gray-600">
                  General Inquiries: info@iscwa.org<br />
                  Membership Services: members@iscwa.org<br />
                  Support & Welfare: support@iscwa.org
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" rows={5} required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-islamabad-red hover:bg-red-700" disabled={isLoading}>
                    {isLoading ? 
                      "Sending..." : 
                      <span className="flex items-center">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </span>
                    }
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Office Hours & Information</h2>
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start mb-6">
                  <div className="rounded-full w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Office Hours</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                      <li>Saturday: 10:00 AM - 2:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 mr-4">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Regional Offices</h3>
                    <ul className="space-y-4 text-gray-600">
                      <li>
                        <strong>Hyderabad Office:</strong><br />
                        45-B, Shah Latif Colony<br />
                        Hyderabad, Pakistan<br />
                        Phone: +92-22-1234567
                      </li>
                      <li>
                        <strong>Sukkur Office:</strong><br />
                        78 Main Street, Military Road<br />
                        Sukkur, Pakistan<br />
                        Phone: +92-71-9876543
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115812.38133847052!2d67.02129263296347!3d24.879830267216856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x25e252450977839b!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1634563619171!5m2!1sen!2sus" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Office Location Map"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">How can I become a member?</h3>
              <p className="text-gray-600 mb-4">
                You can apply for membership through our online portal or by visiting our main office. Check our Membership page for detailed information.
              </p>
              
              <h3 className="font-bold mb-2">What welfare services do you provide?</h3>
              <p className="text-gray-600 mb-4">
                We offer healthcare support, educational assistance, emergency aid, and various other welfare services to our community members.
              </p>
              
              <h3 className="font-bold mb-2">How can I volunteer with the association?</h3>
              <p className="text-gray-600">
                We welcome volunteers for various programs and initiatives. Contact our office or submit your information through our volunteer registration form.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Do you provide financial assistance?</h3>
              <p className="text-gray-600 mb-4">
                Yes, we offer financial assistance to eligible community members for education, healthcare, and emergency situations through our welfare programs.
              </p>
              
              <h3 className="font-bold mb-2">How can I participate in cultural events?</h3>
              <p className="text-gray-600 mb-4">
                Information about upcoming events is posted on our website and social media. Members receive direct invitations to participate in our cultural programs.
              </p>
              
              <h3 className="font-bold mb-2">Can I donate to support your initiatives?</h3>
              <p className="text-gray-600">
                Yes, we welcome donations to support our welfare and cultural initiatives. Contact our office for donation options or use the online donation portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
