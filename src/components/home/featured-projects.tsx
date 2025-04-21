
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Users } from "lucide-react";

// Sample data
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
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-muted-foreground">
              Join innovative projects looking for teammates like you.
            </p>
          </div>
          <Link to="/projects">
            <Button variant="outline">View All Projects</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
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
    </section>
  );
}
