
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Calendar, ArrowRight, Newspaper, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const newsArticles = [
  {
    id: 1,
    title: "Cultural Festival Celebrates Sindhi Heritage",
    summary: "Annual cultural event showcases traditional music, dance, and food of Sindh region.",
    date: "October 5, 2023",
    author: "Zainab Khan",
    category: "Culture",
    views: 1243,
    image: "https://images.unsplash.com/photo-1508984583595-0ec5f1c23d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
  },
  {
    id: 2,
    title: "Association Launches New Welfare Program for Members",
    summary: "Islambohan Sindhera Cultural & Welfare Association introduces healthcare support initiative for community members.",
    date: "September 28, 2023",
    author: "Ahmed Malik",
    category: "Welfare",
    views: 985,
    image: "https://images.unsplash.com/photo-1582213782179-e0d4d3cce33a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Educational Scholarships Awarded to 50 Students",
    summary: "ISCWA provides educational financial support to deserving students from the community.",
    date: "September 15, 2023",
    author: "Bilal Hassan",
    category: "Education",
    views: 1102,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Community Clean-Up Drive Organized in Karachi",
    summary: "Members join hands for environmental initiative in local neighborhoods.",
    date: "August 30, 2023",
    author: "Fatima Ali",
    category: "Community",
    views: 876,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "New Board of Directors Elected for 2023-2025 Term",
    summary: "ISCWA announces new leadership following biennial elections.",
    date: "August 15, 2023",
    author: "Saima Memon",
    category: "Association",
    views: 1320,
    image: "https://images.unsplash.com/photo-1573497701240-345a300b8d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
  },
  {
    id: 6,
    title: "Annual General Meeting Highlights Association Achievements",
    summary: "Summary of key milestones and financial reports presented at yearly gathering.",
    date: "July 28, 2023",
    author: "Kamran Ahmed",
    category: "Association",
    views: 945,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const newsChannels = [
  {
    id: 1,
    name: "Sindh TV News",
    description: "Leading Sindhi language news channel covering regional and national events.",
    logoUrl: "https://via.placeholder.com/100x50?text=Sindh+TV",
    websiteUrl: "https://www.sindhtvnews.com",
  },
  {
    id: 2,
    name: "KTN News",
    description: "Comprehensive coverage of Sindhi news, culture, and current affairs.",
    logoUrl: "https://via.placeholder.com/100x50?text=KTN+News",
    websiteUrl: "https://www.ktnnews.pk",
  },
  {
    id: 3,
    name: "Awaz TV",
    description: "Voice of Sindh providing news and entertainment in Sindhi language.",
    logoUrl: "https://via.placeholder.com/100x50?text=Awaz+TV",
    websiteUrl: "https://www.awaztv.pk",
  },
  {
    id: 4,
    name: "Dawn News",
    description: "English language news covering national events with focus on regional developments.",
    logoUrl: "https://via.placeholder.com/100x50?text=Dawn+News",
    websiteUrl: "https://www.dawn.com",
  },
  {
    id: 5,
    name: "Express Tribune",
    description: "Daily English newspaper with comprehensive Pakistan and international coverage.",
    logoUrl: "https://via.placeholder.com/100x50?text=Express",
    websiteUrl: "https://tribune.com.pk",
  },
  {
    id: 6,
    name: "Daily Kawish",
    description: "Popular Sindhi language newspaper with extensive regional coverage.",
    logoUrl: "https://via.placeholder.com/100x50?text=Kawish",
    websiteUrl: "https://www.kawish.com",
  },
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Culture", "Welfare", "Education", "Community", "Association"];
  
  const filteredNews = activeCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);
  
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">News & Media</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest news, events, and activities from our community
        </p>
      </div>

      <Tabs defaultValue="news" className="mb-12">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="news">Association News</TabsTrigger>
          <TabsTrigger value="channels">News Channels & Papers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="news">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map(category => (
                <Button 
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category ? "bg-islamabad-red hover:bg-red-700" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Featured News (If Any) */}
            {filteredNews.some(article => article.featured) && (
              <div className="mb-8">
                {filteredNews.filter(article => article.featured).map(article => (
                  <Card key={article.id} className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="h-64 md:h-auto">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6 flex flex-col">
                        <div className="mb-auto">
                          <Badge className="mb-2 bg-islamabad-red">Featured</Badge>
                          <Badge variant="outline" className="mb-2 ml-2">{article.category}</Badge>
                          <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
                          <p className="text-gray-600 mb-4">{article.summary}</p>
                        </div>
                        
                        <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            <span>{article.views} views</span>
                          </div>
                        </div>
                        
                        <Button className="mt-6 bg-islamabad-blue hover:bg-blue-700">
                          Read Full Article
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            
            {/* Regular News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.filter(article => !article.featured).map(article => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 w-full">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-2">{article.category}</Badge>
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.summary}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{article.views} views</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="ghost" className="text-islamabad-blue hover:text-blue-700 p-0 h-auto">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mr-2">Previous</Button>
              <Button variant="outline" className="mr-2 bg-islamabad-red text-white hover:bg-red-700">1</Button>
              <Button variant="outline" className="mr-2">2</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="channels">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">News Channels & Newspapers</h2>
            <p className="text-gray-600 mb-8">
              Stay informed with these trusted news sources covering Sindh and Pakistani news
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsChannels.map(channel => (
                <Card key={channel.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-14 mb-4 flex items-center">
                      <div className="bg-gray-100 p-2 rounded">
                        <img 
                          src={channel.logoUrl} 
                          alt={channel.name}
                          className="h-10 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{channel.name}</h3>
                    <p className="text-gray-600 mb-6">{channel.description}</p>
                    <a 
                      href={channel.websiteUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-islamabad-blue hover:underline"
                    >
                      Visit Website <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="max-w-3xl mx-auto">
              <Newspaper className="h-12 w-12 text-islamabad-red mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get weekly updates on community news, events, and announcements directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="rounded-md border border-input bg-background px-3 py-2 flex-grow"
                />
                <Button className="bg-islamabad-red hover:bg-red-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default News;
