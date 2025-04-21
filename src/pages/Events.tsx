
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample data
const events = [
  {
    id: 1,
    name: "ClimateHack 2024",
    description: "Build solutions to combat climate change and promote sustainability.",
    date: "May 15-17, 2024",
    location: "Virtual",
    image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    prizes: "$10,000 in prizes",
    tags: ["Climate", "Sustainability", "GreenTech"]
  },
  {
    id: 2,
    name: "HealthTech Hackathon",
    description: "Create innovative solutions to improve healthcare accessibility and patient outcomes.",
    date: "June 3-5, 2024",
    location: "Boston, MA + Virtual",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    prizes: "$15,000 in prizes",
    tags: ["Healthcare", "MedTech", "AI"]
  },
  {
    id: 3,
    name: "FinTech Summit 2024",
    description: "Build the future of financial technology with innovative solutions and applications.",
    date: "July 8-10, 2024",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    prizes: "$20,000 in prizes",
    tags: ["Finance", "Blockchain", "Banking"]
  },
  {
    id: 4,
    name: "Community Tech Jam",
    description: "Develop solutions that strengthen local communities and address social challenges.",
    date: "August 12-14, 2024",
    location: "Virtual",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    prizes: "$5,000 in prizes",
    tags: ["Community", "Social Impact", "Civic Tech"]
  },
  {
    id: 5,
    name: "IoT Hackfest",
    description: "Connect the physical and digital worlds with innovative IoT solutions.",
    date: "September 5-7, 2024",
    location: "San Francisco, CA + Virtual",
    image: "https://images.unsplash.com/photo-1580741186443-0d599a4a1648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    prizes: "$12,500 in prizes",
    tags: ["IoT", "Hardware", "Smart Devices"]
  },
  {
    id: 6,
    name: "EduTech Hackathon",
    description: "Revolutionize education with technology solutions for students and educators.",
    date: "October 15-17, 2024",
    location: "Virtual",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    prizes: "$8,000 in prizes",
    tags: ["Education", "Learning", "EdTech"]
  }
];

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter((event) => {
    return event.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
           event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Upcoming Hackathons</h1>
            <p className="mt-2 text-muted-foreground">
              Discover hackathons happening around the world and online where you can showcase your skills.
            </p>
          </div>

          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for hackathons by name, description, or tags..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link to={`/events/${event.id}`}>
                    <h3 className="text-xl font-bold hover:text-primary transition-colors">{event.name}</h3>
                  </Link>
                  <div className="flex flex-col md:flex-row md:items-center text-sm text-muted-foreground gap-1 md:gap-4">
                    <span>{event.date}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{event.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                  <p className="mt-2 text-sm font-medium text-hackmate-purple">
                    {event.prizes}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link to={`/events/${event.id}`} className="w-full">
                    <Button variant="default" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
