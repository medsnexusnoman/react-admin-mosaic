import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Image, Play, Clock, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Cultural Festival",
    date: "November 15, 2023",
    time: "3:00 PM - 9:00 PM",
    location: "Community Center, Karachi",
    description: "Celebrate our cultural heritage with traditional music, dance performances, art exhibitions, and authentic Sindhi cuisine.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
  },
  {
    id: 2,
    title: "Health Camp",
    date: "December 5, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "ISCWA Medical Center, Hyderabad",
    description: "Free medical check-ups, consultations, and health awareness sessions for all community members.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Educational Scholarship Ceremony",
    date: "December 20, 2023",
    time: "11:00 AM - 1:00 PM",
    location: "ISCWA Auditorium, Karachi",
    description: "Annual scholarship awards ceremony for deserving students from our community.",
    image: "https://images.unsplash.com/photo-1603206004639-23ebf62eafed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const pastEvents = [
  {
    id: 1,
    title: "Community Iftar Dinner",
    date: "April 10, 2023",
    location: "ISCWA Community Hall, Karachi",
    description: "Annual Iftar dinner bringing together community members for breaking fast during Ramadan.",
    images: [
      "https://images.unsplash.com/photo-1532947974358-a218d18d8d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    hasVideo: true,
  },
  {
    id: 2,
    title: "Career Guidance Workshop",
    date: "May 25, 2023",
    location: "ISCWA Youth Center, Hyderabad",
    description: "Workshop to guide young community members on career options and professional development.",
    images: [
      "https://images.unsplash.com/photo-1538092722163-a956d4cc161b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    hasVideo: false,
  },
  {
    id: 3,
    title: "Independence Day Celebrations",
    date: "August 14, 2023",
    location: "Public Park, Karachi",
    description: "Flag hoisting ceremony and cultural program to celebrate Pakistan's independence day.",
    images: [
      "https://images.unsplash.com/photo-1569263900347-a7a451dcd54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1565180285496-07d6be22675f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    hasVideo: true,
  },
  {
    id: 4,
    title: "Community Clean-Up Drive",
    date: "September 10, 2023",
    location: "Various Neighborhoods, Karachi",
    description: "Environmental initiative where members joined hands to clean up local neighborhoods.",
    images: [
      "https://images.unsplash.com/photo-1616680214608-9b3a1b7b127f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    hasVideo: false,
  },
];

const ongoingPrograms = [
  {
    id: 1,
    title: "Educational Support Program",
    description: "Ongoing initiative providing scholarships, tutoring, and educational resources to students from our community.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Healthcare Assistance",
    description: "Continuous healthcare support including subsidized medical consultations, medicines, and emergency assistance.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Cultural Documentation Project",
    description: "Ongoing effort to document, preserve, and promote Sindhi traditions, language, arts, and heritage.",
    image: "https://images.unsplash.com/photo-1532602511633-ae99bdb503e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Community Support Network",
    description: "Continuous program connecting community members for mutual support during life events and challenges.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d4d3cce33a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Activities = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Activities & Events</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore the various events, programs, and initiatives organized by our association
        </p>
      </div>

      <Tabs defaultValue="upcoming" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Activities</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing Programs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          <div className="mb-8">
            {/* Featured Event (if any) */}
            {upcomingEvents.filter(event => event.featured).map(event => (
              <Card key={event.id} className="mb-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-islamabad-red">Featured Event</Badge>
                    <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2 text-islamabad-red" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2 text-islamabad-red" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2 text-islamabad-red" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <Button className="bg-islamabad-red hover:bg-red-700">
                      Register for Event
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
            
            {/* Other Upcoming Events */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.filter(event => !event.featured).map(event => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 w-full">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2 text-islamabad-blue" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2 text-islamabad-blue" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2 text-islamabad-blue" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-islamabad-blue hover:bg-blue-700">
                      Event Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <a href="#">View All Upcoming Events</a>
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="past">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Past Events & Activities</h2>
            
            {selectedEvent ? (
              <div className="mb-8">
                <Button variant="outline" className="mb-6" onClick={() => setSelectedEvent(null)}>
                  <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                  Back to Events
                </Button>
                
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <Calendar className="h-4 w-4 mr-2 text-islamabad-red" />
                      <span>{selectedEvent.date}</span>
                      <MapPin className="h-4 w-4 ml-4 mr-2 text-islamabad-red" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-8">{selectedEvent.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-bold mb-4">Event Gallery</h3>
                      <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                        <img 
                          src={selectedEvent.images[selectedImageIndex]} 
                          alt={`${selectedEvent.title} - Image ${selectedImageIndex + 1}`}
                          className="h-full w-full object-cover"
                        />
                        
                        {selectedEvent.hasVideo && (
                          <div className="absolute top-4 right-4">
                            <Button className="rounded-full w-12 h-12 p-0 bg-islamabad-red">
                              <Play className="h-6 w-6" />
                            </Button>
                          </div>
                        )}
                      </div>
                      
                      {selectedEvent.images.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          {selectedEvent.images.map((img: string, idx: number) => (
                            <button 
                              key={idx}
                              className={`h-20 w-20 rounded-md overflow-hidden flex-shrink-0 ${selectedImageIndex === idx ? 'ring-2 ring-islamabad-red' : ''}`}
                              onClick={() => setSelectedImageIndex(idx)}
                            >
                              <img 
                                src={img} 
                                alt={`Thumbnail ${idx + 1}`}
                                className="h-full w-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold mb-4">Event Highlights</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Successfully brought together over 200 community members</li>
                        <li>Showcased traditional Sindhi cultural performances</li>
                        <li>Raised funds for community welfare initiatives</li>
                        <li>Recognized volunteers and contributors to association programs</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => {
                    setSelectedEvent(event);
                    setSelectedImageIndex(0);
                  }}>
                    <div className="h-48 w-full relative">
                      <img 
                        src={event.images[0]} 
                        alt={event.title}
                        className="h-full w-full object-cover"
                      />
                      {event.images.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold flex items-center">
                          <Image className="h-3 w-3 mr-1" />
                          {event.images.length}
                        </div>
                      )}
                      {event.hasVideo && (
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-islamabad-red">
                            <Play className="h-3 w-3 mr-1" /> 
                            Video
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-2 text-islamabad-blue" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                      <Button variant="ghost" className="p-0 h-auto text-islamabad-blue hover:text-blue-700">
                        View Event Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            {!selectedEvent && (
              <div className="text-center mt-12">
                <Button asChild variant="outline">
                  <a href="#">View More Past Events</a>
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="ongoing">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Ongoing Programs & Initiatives</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoingPrograms.map((program) => (
                <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 w-full">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <Button className="bg-islamabad-orange hover:bg-orange-600">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Get Involved</h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                We welcome community members to participate in our programs and initiatives. Whether you want to volunteer your time, 
                contribute resources, or share your expertise, there are many ways to get involved.
              </p>
              <Button className="bg-islamabad-red hover:bg-red-700">
                Volunteer with Us
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="max-w-5xl mx-auto bg-gradient-islamabad text-white rounded-lg p-8 mt-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated on Our Activities</h2>
          <p className="mb-6 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive regular updates about upcoming events, program news, and community activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="rounded-md border border-input bg-white px-3 py-2 flex-grow"
            />
            <Button className="bg-white text-islamabad-red hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
