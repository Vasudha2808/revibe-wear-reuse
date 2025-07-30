import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-card/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
              ReVibe
            </h1>
            <span className="text-xs text-muted-foreground">Old Threads, New Stories</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </a>
            <a href="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            <a href="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <Button variant="luxury" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;