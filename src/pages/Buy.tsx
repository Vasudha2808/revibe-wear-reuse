import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

const Buy = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const dressCategories = [
    { id: "all", name: "All Dresses" },
    { id: "evening", name: "Evening Wear" },
    { id: "casual", name: "Casual" },
    { id: "formal", name: "Formal" },
    { id: "party", name: "Party Wear" }
  ];

  const dresses = [
    {
      id: 1,
      name: "Midnight Elegance",
      price: 2499,
      category: "evening",
      image: "/placeholder.svg",
      description: "Luxurious evening gown with intricate beadwork",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "Royal Purple",
      price: 1899,
      category: "formal",
      image: "/placeholder.svg",
      description: "Sophisticated formal dress for special occasions",
      sizes: ["S", "M", "L"]
    },
    {
      id: 3,
      name: "Casual Chic",
      price: 1299,
      category: "casual",
      image: "/placeholder.svg",
      description: "Comfortable yet stylish for everyday wear",
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 4,
      name: "Party Sparkle",
      price: 2199,
      category: "party",
      image: "/placeholder.svg",
      description: "Stunning party dress with sequin details",
      sizes: ["S", "M", "L"]
    },
    {
      id: 5,
      name: "Office Elite",
      price: 1599,
      category: "formal",
      image: "/placeholder.svg",
      description: "Professional yet fashionable business attire",
      sizes: ["S", "M", "L", "XL"]
    }
  ];

  const filteredDresses = selectedCategory === "all" 
    ? dresses 
    : dresses.filter(dress => dress.category === selectedCategory);

  const handleOrder = (dress: any) => {
    // TODO: Implement order logic
    console.log("Ordering dress:", dress);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">
            Premium Dress Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of dresses for every occasion
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {dressCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "luxury" : "card"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-300"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Dress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDresses.map((dress) => (
            <Card key={dress.id} className="group overflow-hidden bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={dress.image}
                  alt={dress.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-luxury text-luxury-foreground">
                  {dress.category}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dress.name}</h3>
                <p className="text-muted-foreground mb-4">{dress.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-luxury">
                    ₹{dress.price.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {dress.sizes.map((size) => (
                    <Badge key={size} variant="outline" className="text-xs">
                      {size}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="premium" 
                    className="flex-1"
                    onClick={() => handleOrder(dress)}
                  >
                    Order Online
                  </Button>
                  <Button 
                    variant="card" 
                    className="flex-1"
                    onClick={() => handleOrder(dress)}
                  >
                    COD
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buy;