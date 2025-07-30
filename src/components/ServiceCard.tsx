import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  buttonText: string;
  onButtonClick: () => void;
}

const ServiceCard = ({ 
  title, 
  description, 
  image, 
  features, 
  buttonText, 
  onButtonClick 
}: ServiceCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-foreground/80">
              <div className="w-1.5 h-1.5 bg-luxury rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          variant="premium" 
          className="w-full" 
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;