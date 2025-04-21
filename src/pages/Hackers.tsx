
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

// Sample data - expanded set
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
  },
  {
    id: 5,
    name: "David Kim",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    bio: "Full stack developer passionate about building seamless user experiences.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    bio: "Data scientist with experience in ML and predictive modeling.",
  },
  {
    id: 7,
    name: "James Chen",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    bio: "Automating deployment pipelines and optimizing infrastructure for scale.",
  },
  {
    id: 8,
    name: "Aisha Khan",
    role: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    skills: ["React Native", "iOS", "Android", "Flutter"],
    bio: "Creating performant and beautiful mobile experiences across platforms.",
  }
];

const Hackers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const filteredHackers = hackers.filter((hacker) => {
    const matchesSearch = hacker.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          hacker.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hacker.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRole = roleFilter ? hacker.role === roleFilter : true;
    
    return matchesSearch && matchesRole;
  });

  const uniqueRoles = Array.from(new Set(hackers.map(hacker => hacker.role)));

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Find Hackers</h1>
            <p className="mt-2 text-muted-foreground">
              Discover talented individuals to collaborate with on your next hackathon project.
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name, skills, or bio..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Roles</SelectItem>
                {uniqueRoles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredHackers.map((hacker) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default Hackers;
