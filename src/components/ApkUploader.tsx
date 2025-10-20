import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileCheck, Loader2 } from "lucide-react";
import apkIcon from "@/assets/apk-icon.png";
import { toast } from "sonner";

const ApkUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.name.endsWith('.apk')) {
        setFile(selectedFile);
        toast.success("APK file loaded successfully!", {
          description: selectedFile.name,
        });
      } else {
        toast.error("Invalid file type", {
          description: "Please select an APK file",
        });
      }
    }
  };

  const handleUpload = () => {
    setUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      toast.success("APK decompiled successfully!", {
        description: "Ready for modification",
      });
    }, 2000);
  };

  return (
    <section className="py-20 px-4">
      <div className="container">
        <Card className="max-w-2xl mx-auto p-8 bg-gradient-card backdrop-blur-md border-primary/30 shadow-glow-primary">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <img src={apkIcon} alt="APK" className="w-24 h-24 animate-float" />
            </div>
            
            <h3 className="text-3xl font-bold text-foreground">Upload Your APK</h3>
            <p className="text-muted-foreground">
              Select an APK file to begin customization
            </p>

            {!file ? (
              <div className="relative">
                <input
                  type="file"
                  accept=".apk"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="apk-upload"
                />
                <label htmlFor="apk-upload">
                  <Button variant="hero" size="lg" className="cursor-pointer" asChild>
                    <span>
                      <Upload className="mr-2" />
                      Select APK File
                    </span>
                  </Button>
                </label>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-accent/10 border border-accent/30">
                  <FileCheck className="w-6 h-6 text-accent" />
                  <span className="text-foreground font-medium">{file.name}</span>
                </div>
                
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleUpload}
                  disabled={uploading}
                  className="w-full"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Start Modding"
                  )}
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ApkUploader;
