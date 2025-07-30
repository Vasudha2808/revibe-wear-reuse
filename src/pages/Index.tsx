import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import heroImage from "@/assets/hero-fashion.jpg";
import buyImage from "@/assets/buy-section.jpg";
import sellImage from "@/assets/sell-section.jpg";
import redesignImage from "@/assets/redesign-section.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="ReVibe Fashion" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            ReVibe
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
            Old Threads, New Stories - Your Fashion Platform for Buying, Selling & Redesigning
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transform your wardrobe with our curated collection, sell your preloved pieces, 
            or redesign your favorites into something extraordinary.
          </p>
          
          <Button variant="luxury" size="xl" className="shadow-luxury">
            Explore Our Services
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Choose Your Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking to buy, sell, or transform, we have the perfect service for you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ServiceCard
              title="Buy Premium Dresses"
              description="Discover our curated collection of dresses for every occasion. Choose from quality pieces with flexible payment options."
              image={buyImage}
              features={[
                "Curated quality collection",
                "Online payment & COD options",
                "Premium quality guarantee",
                "Wide size range available"
              ]}
              buttonText="Shop Collection"
              onButtonClick={() => navigate("/buy")}
            />

            <ServiceCard
              title="Sell Your Dresses"
              description="Turn your wardrobe into cash. Upload photos of your dresses and get notified when we're ready to purchase."
              image={sellImage}
              features={[
                "Easy photo upload process",
                "Fair pricing evaluation",
                "Doorstep collection service",
                "Instant payment on collection"
              ]}
              buttonText="Start Selling"
              onButtonClick={() => navigate("/sell")}
            />

            <ServiceCard
              title="Redesign & Transform"
              description="Give your favorite dresses a new life. Our expert designers will transform your pieces into stunning new creations."
              image={redesignImage}
              features={[
                "Professional design consultation",
                "Multiple style options",
                "Half payment upfront",
                "7-14 day transformation"
              ]}
              buttonText="Redesign Now"
              onButtonClick={() => navigate("/redesign")}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-foreground">
            Why Choose ReVibe?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold">Quality Assured</h3>
              <p className="text-muted-foreground">Every piece is carefully inspected for quality and authenticity</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold">Doorstep Service</h3>
              <p className="text-muted-foreground">Convenient pickup and delivery right to your door</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold">Premium Designs</h3>
              <p className="text-muted-foreground">Expert designers creating unique, stylish transformations</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold">Flexible Payments</h3>
              <p className="text-muted-foreground">Multiple payment options including COD and online payments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
