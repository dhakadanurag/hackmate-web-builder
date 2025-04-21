
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Users, Handshake } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">How HackMate Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Find the perfect teammates for your next hackathon in three simple steps
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-hackmate-purple/20">
              <Search className="h-8 w-8 text-hackmate-purple" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Browse Profiles</h3>
            <p className="text-muted-foreground">
              Explore profiles of talented developers, designers, and innovators looking for hackathon teams.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-hackmate-purple/20">
              <Users className="h-8 w-8 text-hackmate-purple" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Create or Join Projects</h3>
            <p className="text-muted-foreground">
              Start your own project or apply to join existing teams that match your skills and interests.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-hackmate-purple/20">
              <Handshake className="h-8 w-8 text-hackmate-purple" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Collaborate & Win</h3>
            <p className="text-muted-foreground">
              Connect with your team members, collaborate effectively, and create winning projects together.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/signup">
            <Button size="lg">Get Started Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
