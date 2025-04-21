
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center rounded-full bg-hackmate-purple p-1">
              <Users className="h-6 w-6 text-white" />
            </div>
            <span className="hidden font-bold sm:inline-block">HackMate</span>
          </Link>
          {!isMobile && (
            <nav className="ml-8 flex items-center space-x-4 lg:space-x-6">
              <Link
                to="/hackers"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary"
                )}
              >
                Hackers
              </Link>
              <Link
                to="/projects"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary"
                )}
              >
                Projects
              </Link>
              <Link
                to="/events"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary"
                )}
              >
                Events
              </Link>
            </nav>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!isMobile && (
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          )}
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
