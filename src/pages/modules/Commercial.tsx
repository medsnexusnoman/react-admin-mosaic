
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ExternalLink } from "lucide-react";

const commercialAds = [
  {
    id: 1,
    title: "Premium Business Listing",
    business: "Sindh Textiles",
    description: "Quality fabrics and traditional Sindhi textiles for all occasions.",
    contact: "+92-21-35678901",
    website: "https://example.com/sindhitextiles",
    featured: true,
  },
  {
    id: 2,
    title: "Professional Services",
    business: "Al-Kareem Law Associates",
    description: "Specialized legal services for business and personal matters.",
    contact: "+92-21-36789012",
    website: "https://example.com/alkareem",
    featured: false,
  },
  {
    id: 3,
    title: "Restaurant Advertisement",
    business: "Biryani House",
    description: "Authentic Sindhi biryani and traditional dishes prepared with care.",
    contact: "+92-21-37890123",
    website: "https://example.com/biryanihouse",
    featured: true,
  },
  {
    id: 4,
    title: "Educational Services",
    business: "Sindh Learning Academy",
    description: "Quality education with a focus on preserving cultural values.",
    contact: "+92-21-38901234",
    website: "https://example.com/sindhacademy",
    featured: false,
  },
  {
    id: 5,
    title: "Healthcare Services",
    business: "Community Health Clinic",
    description: "Affordable healthcare services for the community members.",
    contact: "+92-21-39012345",
    website: "https://example.com/healthclinic",
    featured: true,
  },
  {
    id: 6,
    title: "Real Estate Services",
    business: "Pakistan Properties",
    description: "Helping you find your perfect home or business location.",
    contact: "+92-21-40123456",
    website: "https://example.com/properties",
    featured: false,
  },
];

const Commercial = () => {
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Commercial Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Promote your business within our community. Browse our commercial listings or advertise your own business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {commercialAds.map((ad) => (
          <Card key={ad.id} className={`hover:shadow-lg transition-shadow ${ad.featured ? 'border-2 border-islamabad-red' : ''}`}>
            <CardContent className="p-6">
              {ad.featured && (
                <div className="bg-islamabad-red text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-3">
                  Featured
                </div>
              )}
              <div className="flex items-start mb-4">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-orange-100 text-islamabad-orange mr-4">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{ad.title}</h3>
                  <p className="text-sm text-islamabad-blue font-medium">{ad.business}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{ad.description}</p>
              
              <div className="text-sm text-gray-500 mb-6">
                <p><strong>Contact:</strong> {ad.contact}</p>
              </div>
              
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm" className="text-islamabad-red border-islamabad-red hover:bg-red-50">
                  Contact Business
                </Button>
                <a href={ad.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-islamabad-blue hover:underline text-sm">
                  Visit Website
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Advertise Your Business</h2>
          <p className="text-gray-600 mb-6">
            Reach our community members by placing your business advertisement on our platform. 
            Choose from different packages to suit your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Basic Package</h3>
                <p className="text-3xl font-bold text-islamabad-red mb-4">₨2,000<span className="text-sm text-gray-500">/month</span></p>
                <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Standard listing</li>
                  <li>• 30 days visibility</li>
                  <li>• Business contact info</li>
                </ul>
                <Button variant="outline" className="w-full text-islamabad-red border-islamabad-red hover:bg-red-50">
                  Select Package
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-islamabad-blue">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Premium Package</h3>
                <p className="text-3xl font-bold text-islamabad-blue mb-4">₨5,000<span className="text-sm text-gray-500">/month</span></p>
                <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Featured listing</li>
                  <li>• 60 days visibility</li>
                  <li>• Business contact info</li>
                  <li>• Website link</li>
                  <li>• Enhanced visibility</li>
                </ul>
                <Button className="w-full bg-islamabad-blue hover:bg-blue-700">
                  Select Package
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise Package</h3>
                <p className="text-3xl font-bold text-islamabad-orange mb-4">₨10,000<span className="text-sm text-gray-500">/month</span></p>
                <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Premium featured listing</li>
                  <li>• 90 days visibility</li>
                  <li>• Business contact info</li>
                  <li>• Website link</li>
                  <li>• Top position in listings</li>
                  <li>• Newsletter mention</li>
                </ul>
                <Button variant="outline" className="w-full text-islamabad-orange border-islamabad-orange hover:bg-orange-50">
                  Select Package
                </Button>
              </CardContent>
            </Card>
          </div>
          <Button className="bg-gradient-islamabad">Contact for Custom Advertising Solutions</Button>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Why Advertise With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <div className="rounded-full w-16 h-16 flex items-center justify-center bg-red-100 text-islamabad-red mx-auto mb-4">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">Targeted Audience</h3>
            <p className="text-gray-600">Reach community members directly interested in your services.</p>
          </div>
          
          <div>
            <div className="rounded-full w-16 h-16 flex items-center justify-center bg-blue-100 text-islamabad-blue mx-auto mb-4">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">Build Trust</h3>
            <p className="text-gray-600">Leverage our community's trust to enhance your business credibility.</p>
          </div>
          
          <div>
            <div className="rounded-full w-16 h-16 flex items-center justify-center bg-orange-100 text-islamabad-orange mx-auto mb-4">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">Support Community</h3>
            <p className="text-gray-600">Your advertising fees help support our cultural and welfare programs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;
