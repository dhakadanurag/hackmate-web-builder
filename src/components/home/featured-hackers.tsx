
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

// Sample data
const hackers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    bio: "Passionate frontend dev with experience in building responsive web applications.",
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "UX/UI Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    skills: ["Figma", "User Research", "Prototyping"],
    bio: "Creating intuitive and aesthetic user experiences that solve real problems.",
  },
  {
    id: 3,
    name: "Miguel Rodriguez",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    skills: ["Node.js", "Python", "MongoDB"],
    bio: "Backend engineer specializing in API development and database architecture.",
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    skills: ["Strategy", "Roadmapping", "User Stories"],
    bio: "Experienced PM with a track record of delivering successful products.",
  }
];

export function FeaturedHackers() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Hackers</h2>
            <p className="mt-2 text-muted-foreground">
              Connect with talented individuals ready to collaborate on your next project.
            </p>
          </div>
          <Link to="/hackers">
            <Button variant="outline">View All Hackers</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hackers.map((hacker) => (
            <Card key={hacker.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={hacker.image}
                    alt={hacker.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-semibold">{hacker.name}</h3>
                <p className="text-sm text-muted-foreground">{hacker.role}</p>
                <p className="mt-2 text-sm">{hacker.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {hacker.skills.map((skill) => (
                    <Badge key={skill} variant="skill">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                <Link to={`/hackers/${hacker.id}`} className="w-full">
                  <Button variant="default" size="sm" className="w-full">
                    View Profile
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
