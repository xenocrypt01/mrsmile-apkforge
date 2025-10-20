import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Image, 
  Palette, 
  Lock, 
  FileCode, 
  Package,
  CheckCircle2
} from "lucide-react";

const ModdingDashboard = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Modding Dashboard
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional tools at your fingertips
          </p>
        </div>

        <Tabs defaultValue="icon" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-card/50 backdrop-blur-md border border-primary/20">
            <TabsTrigger value="icon" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Image className="w-4 h-4 mr-2" />
              Icon
            </TabsTrigger>
            <TabsTrigger value="theme" className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary">
              <Palette className="w-4 h-4 mr-2" />
              Theme
            </TabsTrigger>
            <TabsTrigger value="permissions" className="data-[state=active]:bg-accent/20 data-[state=active]:text-accent">
              <Lock className="w-4 h-4 mr-2" />
              Permissions
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <FileCode className="w-4 h-4 mr-2" />
              Resources
            </TabsTrigger>
            <TabsTrigger value="build" className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary">
              <Package className="w-4 h-4 mr-2" />
              Build
            </TabsTrigger>
          </TabsList>

          <TabsContent value="icon" className="space-y-6 mt-8">
            <Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30">
              <h3 className="text-2xl font-bold mb-4 text-foreground">App Icon Customization</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="aspect-square rounded-lg bg-muted flex items-center justify-center border-2 border-dashed border-primary/30">
                    <span className="text-muted-foreground">Current Icon Preview</span>
                  </div>
                  <Button variant="cyber" className="w-full">Upload New Icon</Button>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Icon Requirements:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>PNG format recommended</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>512x512 pixels or higher</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Transparent background supported</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="theme" className="space-y-6 mt-8">
            <Card className="p-6 bg-gradient-card backdrop-blur-md border-secondary/30">
              <h3 className="text-2xl font-bold mb-4 text-foreground">UI Theme Editor</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Primary Color</label>
                  <div className="flex gap-2">
                    <input type="color" className="w-full h-12 rounded-lg cursor-pointer bg-input border border-border" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Accent Color</label>
                  <div className="flex gap-2">
                    <input type="color" className="w-full h-12 rounded-lg cursor-pointer bg-input border border-border" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Background Color</label>
                  <div className="flex gap-2">
                    <input type="color" className="w-full h-12 rounded-lg cursor-pointer bg-input border border-border" />
                  </div>
                </div>
              </div>
              <Button variant="secondary" className="w-full mt-6">Apply Theme</Button>
            </Card>
          </TabsContent>

          <TabsContent value="permissions" className="space-y-6 mt-8">
            <Card className="p-6 bg-gradient-card backdrop-blur-md border-accent/30">
              <h3 className="text-2xl font-bold mb-4 text-foreground">App Permissions Manager</h3>
              <div className="space-y-3">
                {["Camera", "Storage", "Location", "Network", "Contacts"].map((permission) => (
                  <div key={permission} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border">
                    <span className="font-medium text-foreground">{permission}</span>
                    <input type="checkbox" className="w-5 h-5" defaultChecked />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6 mt-8">
            <Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Resource Editor</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/20 border border-border font-mono text-sm">
                  <div className="text-muted-foreground">// AndroidManifest.xml</div>
                  <div className="text-accent">&lt;manifest&gt;</div>
                  <div className="pl-4 text-foreground">...</div>
                  <div className="text-accent">&lt;/manifest&gt;</div>
                </div>
                <Button variant="cyber" className="w-full">Edit Manifest</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="build" className="space-y-6 mt-8">
            <Card className="p-6 bg-gradient-card backdrop-blur-md border-secondary/30">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Build & Export</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">Security Check Passed</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Your modified APK is ready to build</p>
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  <Package className="mr-2" />
                  Build Modified APK
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ModdingDashboard;
