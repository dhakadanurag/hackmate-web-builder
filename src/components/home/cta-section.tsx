
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-hackmate-purple/10" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl rounded-xl bg-gradient-to-r from-hackmate-purple to-hackmate-blue p-px shadow-lg">
          <div className="rounded-[calc(0.5rem-1px)] bg-white p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to find your dream hackathon team?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Join thousands of hackers who have found the perfect teammates through HackMate. Start building amazing projects today!
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Create Your Profile
                </Button>
              </Link>
              <Link to="/projects/new">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Start a Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
