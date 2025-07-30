import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import { Upload, Palette, CheckCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Redesign = () => {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    preferences: "",
    occasion: "",
    budget: "",
    timeline: ""
  });

  const redesignOptions = [
    {
      id: 1,
      title: "Elegant Evening",
      description: "Transform into a sophisticated evening gown with luxury details",
      image: "/placeholder.svg",
      price: 1500
    },
    {
      id: 2,
      title: "Modern Chic",
      description: "Contemporary styling with clean lines and modern cuts",
      image: "/placeholder.svg",
      price: 1200
    },
    {
      id: 3,
      title: "Vintage Charm",
      description: "Classic vintage-inspired design with timeless appeal",
      image: "/placeholder.svg",
      price: 1300
    },
    {
      id: 4,
      title: "Boho Style",
      description: "Free-spirited bohemian look with flowing fabrics",
      image: "/placeholder.svg",
      price: 1100
    },
    {
      id: 5,
      title: "Minimalist",
      description: "Simple, clean design focused on perfect fit and comfort",
      image: "/placeholder.svg",
      price: 1000
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setOriginalImage(file);
    }
  };

  const handleOrder = () => {
    if (!originalImage) {
      toast.error("Please upload a photo of your dress");
      return;
    }
    if (selectedDesign === null) {
      toast.error("Please select a redesign option");
      return;
    }
    
    const selectedOption = redesignOptions.find(option => option.id === selectedDesign);
    const halfPayment = selectedOption ? selectedOption.price / 2 : 0;
    
    toast.success(`Order placed! Half payment of ₹${halfPayment} required upfront. Our team will contact you soon.`);
    console.log("Redesign order:", { originalImage, selectedDesign, formData });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">
            Dress Redesign Studio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your existing dress into something extraordinary with our expert redesign services
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Step 1: Upload Original Dress */}
          <Card className="p-8 bg-gradient-card border-border/50">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Upload className="w-6 h-6 mr-3 text-luxury" />
              Step 1: Upload Your Dress Photo
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center hover:border-luxury/50 transition-colors">
                <div className="flex flex-col items-center space-y-4">
                  {originalImage ? (
                    <div className="relative">
                      <img
                        src={URL.createObjectURL(originalImage)}
                        alt="Original dress"
                        className="w-64 h-64 object-cover rounded-lg"
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => setOriginalImage(null)}
                      >
                        ×
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="p-4 bg-luxury/10 rounded-full">
                        <Upload className="w-8 h-8 text-luxury" />
                      </div>
                      <div>
                        <p className="text-lg font-medium mb-2">Upload your dress photo</p>
                        <p className="text-muted-foreground mb-4">Clear photo for best results</p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="original-upload"
                        />
                        <label htmlFor="original-upload">
                          <Button variant="luxury" size="sm" className="cursor-pointer">
                            Choose Photo
                          </Button>
                        </label>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="preferences">Style Preferences</Label>
                  <Textarea
                    id="preferences"
                    value={formData.preferences}
                    onChange={(e) => setFormData(prev => ({...prev, preferences: e.target.value}))}
                    placeholder="Describe your preferred style, colors, or specific modifications..."
                    className="mt-2"
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="occasion">Occasion</Label>
                    <Input
                      id="occasion"
                      value={formData.occasion}
                      onChange={(e) => setFormData(prev => ({...prev, occasion: e.target.value}))}
                      placeholder="Wedding, Party, etc."
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range (₹)</Label>
                    <Input
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData(prev => ({...prev, budget: e.target.value}))}
                      placeholder="1000-2000"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Step 2: Choose Redesign Style */}
          <Card className="p-8 bg-gradient-card border-border/50">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Palette className="w-6 h-6 mr-3 text-luxury" />
              Step 2: Choose Your Redesign Style
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {redesignOptions.map((option) => (
                <Card 
                  key={option.id}
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-luxury hover:-translate-y-2 ${
                    selectedDesign === option.id 
                      ? 'ring-2 ring-luxury shadow-glow' 
                      : 'bg-gradient-card border-border/50'
                  }`}
                  onClick={() => setSelectedDesign(option.id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {selectedDesign === option.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-luxury rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-luxury-foreground" />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-luxury">₹{option.price}</span>
                      <span className="text-xs text-muted-foreground">Half upfront</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Step 3: Order Summary */}
          {selectedDesign && (
            <Card className="p-8 bg-gradient-card border-border/50">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-luxury" />
                Step 3: Order Summary
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Service Details</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Selected Style:</span> {redesignOptions.find(o => o.id === selectedDesign)?.title}</p>
                    <p><span className="font-medium">Total Cost:</span> ₹{redesignOptions.find(o => o.id === selectedDesign)?.price}</p>
                    <p><span className="font-medium">Upfront Payment:</span> ₹{(redesignOptions.find(o => o.id === selectedDesign)?.price || 0) / 2}</p>
                    <p><span className="font-medium">Final Payment:</span> After delivery completion</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Process Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury rounded-full"></div>
                      <span className="text-sm">Order confirmation & payment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury rounded-full"></div>
                      <span className="text-sm">Our team collects your dress</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury rounded-full"></div>
                      <span className="text-sm">Professional redesign (7-14 days)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury rounded-full"></div>
                      <span className="text-sm">Delivery & final payment</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="premium" 
                size="xl" 
                className="w-full mt-8"
                onClick={handleOrder}
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Place Redesign Order
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Redesign;