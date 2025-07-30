import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import { Upload, Camera, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Sell = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    originalPrice: "",
    condition: "",
    size: "",
    brand: "",
    category: ""
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const handleSubmit = () => {
    if (selectedFiles.length === 0) {
      toast.error("Please upload at least one photo of your dress");
      return;
    }
    
    // TODO: Implement submission logic
    toast.success("Your dress has been submitted for review! We'll notify you when we're ready to purchase.");
    console.log("Form data:", formData, "Files:", selectedFiles);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">
              Sell Your Dresses
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Turn your wardrobe into cash. Upload photos of your dresses and we'll notify you when we're ready to purchase
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Photo Upload Section */}
            <Card className="p-8 bg-gradient-card border-border/50">
              <h2 className="text-2xl font-semibold mb-6 text-center">Upload Photos</h2>
              
              <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center mb-6 hover:border-luxury/50 transition-colors">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 bg-luxury/10 rounded-full">
                    <Upload className="w-8 h-8 text-luxury" />
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-2">Drag & drop photos here</p>
                    <p className="text-muted-foreground mb-4">or click to browse</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Button variant="luxury" size="sm" className="cursor-pointer">
                        <Camera className="w-4 h-4 mr-2" />
                        Choose Photos
                      </Button>
                    </label>
                  </div>
                </div>
              </div>

              {/* Selected Photos */}
              {selectedFiles.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-4">Selected Photos ({selectedFiles.length})</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeFile(index)}
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Dress Details Form */}
            <Card className="p-8 bg-gradient-card border-border/50">
              <h2 className="text-2xl font-semibold mb-6 text-center">Dress Details</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="title">Dress Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
                    placeholder="e.g., Black Evening Gown"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                    placeholder="Describe the dress, any special features, etc."
                    className="mt-2"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="brand">Brand</Label>
                    <Input
                      id="brand"
                      value={formData.brand}
                      onChange={(e) => setFormData(prev => ({...prev, brand: e.target.value}))}
                      placeholder="e.g., Zara, H&M"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="size">Size</Label>
                    <Input
                      id="size"
                      value={formData.size}
                      onChange={(e) => setFormData(prev => ({...prev, size: e.target.value}))}
                      placeholder="e.g., M, L"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="originalPrice">Original Price (₹)</Label>
                    <Input
                      id="originalPrice"
                      type="number"
                      value={formData.originalPrice}
                      onChange={(e) => setFormData(prev => ({...prev, originalPrice: e.target.value}))}
                      placeholder="2000"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="condition">Condition</Label>
                    <Input
                      id="condition"
                      value={formData.condition}
                      onChange={(e) => setFormData(prev => ({...prev, condition: e.target.value}))}
                      placeholder="New, Like New, Good"
                      className="mt-2"
                    />
                  </div>
                </div>

                <Button 
                  variant="premium" 
                  size="lg" 
                  className="w-full"
                  onClick={handleSubmit}
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Submit for Review
                </Button>
              </div>
            </Card>
          </div>

          {/* Process Steps */}
          <Card className="mt-12 p-8 bg-gradient-card border-border/50">
            <h3 className="text-xl font-semibold mb-6 text-center">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-luxury/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-luxury">1</span>
                </div>
                <h4 className="font-semibold mb-2">Upload & Submit</h4>
                <p className="text-sm text-muted-foreground">Upload photos and details of your dress</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-luxury/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-luxury">2</span>
                </div>
                <h4 className="font-semibold mb-2">Get Notification</h4>
                <p className="text-sm text-muted-foreground">We'll notify you when we're ready to purchase</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-luxury/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-luxury">3</span>
                </div>
                <h4 className="font-semibold mb-2">Get Paid</h4>
                <p className="text-sm text-muted-foreground">Receive payment when our team collects the dress</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sell;