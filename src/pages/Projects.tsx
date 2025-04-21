
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Users } from "lucide-react";

// Sample data - expanded set
const projects = [
  {
    id: 1,
    title: "EcoTrack",
    description: "A mobile app that tracks personal carbon footprint and provides tips for reducing environmental impact.",
    lookingFor: ["Mobile Developer", "Backend Engineer", "UI Designer"],
    members: 2,
    maxMembers: 5,
    event: "ClimateHack 2024",
    tags: ["Mobile", "Sustainability", "React Native"]
  },
  {
    id: 2,
    title: "MediConnect",
    description: "Telemedicine platform connecting patients in rural areas with healthcare providers.",
    lookingFor: ["Frontend Developer", "ML Engineer"],
    members: 3,
    maxMembers: 5,
    event: "HealthTech Hackathon",
    tags: ["Healthcare", "AI", "Web"]
  },
  {
    id: 3,
    title: "FinLiteracy",
    description: "Educational platform teaching financial literacy to young adults through interactive lessons.",
    lookingFor: ["Full-Stack Developer", "Content Creator"],
    members: 2,
    maxMembers: 4,
    event: "FinTech Summit 2024",
    tags: ["Education", "Finance", "JavaScript"]
  },
  {
    id: 4,
    title: "CommunityMarket",
    description: "Peer-to-peer marketplace app for local communities to buy, sell and trade goods and services.",
    lookingFor: ["Backend Developer", "UX Designer", "Mobile Developer"],
    members: 1,
    maxMembers: 4,
    event: "Community Tech Jam",
    tags: ["Marketplace", "Community", "Mobile"]
  },
  {
    id: 5,
    title: "SmartHome Hub",
    description: "Centralized dashboard to control and monitor various smart home devices across different platforms.",
    lookingFor: ["IoT Specialist", "Frontend Developer"],
    members: 2,
    maxMembers: 4,
    event: "IoT Hackfest",
    tags: ["IoT", "Smart Home", "React"]
  },
  {
    id: 6,
    title: "StudyBuddy",
    description: "AI-powered study companion that adapts to students' learning styles and helps prepare for exams.",
    lookingFor: ["ML Engineer", "Education Specialist", "Frontend Developer"],
    members: 1,
    maxMembers: 5,
    event: "EduTech Hackathon",
    tags: ["Education", "AI", "Web"]
  },
  {
    id: 7,
    title: "PetConnect",
    description: "Platform connecting pet owners with local veterinarians, sitters, and other pet services.",
    lookingFor: ["UX Designer", "Backend Developer"],
    members: 2,
    maxMembers: 4,
    event: "PetTech Expo",
    tags: ["Pets", "Services", "Mobile"]
  },
  {
    id: 8,
    title: "CodeMentor",
    description: "Real-time collaborative coding platform with integrated mentoring features for beginners.",
    lookingFor: ["Full-Stack Developer", "DevOps Engineer"],
    members: 2,
    maxMembers: 5,
    event: "DevTools Hackathon",
    tags: ["Education", "Coding", "WebRTC"]
  }
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [eventFilter, setEventFilter] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesEvent = eventFilter ? project.event === eventFilter : true;
    
    return matchesSearch && matchesEvent;
  });

  const uniqueEvents = Array.from(new Set(projects.map(project => project.event)));

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Browse Projects</h1>
              <p className="mt-2 text-muted-foreground">
                Find hackathon projects looking for teammates with your skills.
              </p>
            </div>
            <Link to="/projects/new">
              <Button>Create Project</Button>
            </Link>
          </div>

          <div className="mb-8 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by title, description, or tags..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={eventFilter} onValueChange={setEventFilter}>
              <SelectTrigger className="w-full md:w-[250px]">
                <SelectValue placeholder="Filter by hackathon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Hackathons</SelectItem>
                {uniqueEvents.map((event) => (
                  <SelectItem key={event} value={event}>
                    {event}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader className="pb-3">
                  <Link to={`/projects/${project.id}`}>
                    <h3 className="text-lg font-semibold hover:text-primary transition-colors">{project.title}</h3>
                  </Link>
                  <Badge variant="outline" className="w-fit">
                    {project.event}
                  </Badge>
                </CardHeader>
                <CardContent className="pb-1">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  
                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium">Looking for:</h4>
                    <ul className="mt-1 space-y-1">
                      {project.lookingFor.map((role) => (
                        <li key={role} className="flex items-center text-xs text-muted-foreground">
                          <span className="mr-1 h-1 w-1 rounded-full bg-hackmate-purple"></span>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <Users className="mr-1 h-4 w-4" />
                    <span>{project.members}/{project.maxMembers} members</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link to={`/projects/${project.id}`} className="w-full">
                    <Button variant="default" size="sm" className="w-full">
                      View Project
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

export default Projects;
