import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import ApkUploader from "@/components/ApkUploader";
import ModdingDashboard from "@/components/ModdingDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeaturesSection />
      <ApkUploader />
      <ModdingDashboard />
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container text-center">
          <p className="text-muted-foreground">
            © 2025 <span className="text-primary font-semibold">Mr Smile Modders™ Projects</span> - Advanced APK Modding Tool
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Professional Android App Customization Platform
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
