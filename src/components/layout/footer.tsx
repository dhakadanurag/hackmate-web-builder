
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold">HackMate</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Find the perfect teammates for your next hackathon project.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Explore</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/hackers" className="text-muted-foreground transition-colors hover:text-foreground">
                    Hackers
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-muted-foreground transition-colors hover:text-foreground">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-muted-foreground transition-colors hover:text-foreground">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-muted-foreground transition-colors hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-4">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} HackMate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
