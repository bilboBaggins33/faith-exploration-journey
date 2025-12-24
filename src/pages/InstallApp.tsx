import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Apple, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const InstallApp = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-4">
              Install Bible Quest on Your Device
            </h1>
            <p className="text-lg text-bible-dark/80 max-w-2xl mx-auto">
              Follow these simple steps to add Bible Quest to your home screen for a native app-like experience.
            </p>
          </div>

          <Tabs defaultValue="ios" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="ios" className="flex items-center">
                <Apple className="h-4 w-4 mr-2" />
                iPhone / iPad
              </TabsTrigger>
              <TabsTrigger value="android" className="flex items-center">
                <Smartphone className="h-4 w-4 mr-2" />
                Android
              </TabsTrigger>
              <TabsTrigger value="desktop" className="flex items-center">
                <Chrome className="h-4 w-4 mr-2" />
                Desktop
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ios" className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Installing on iOS (iPhone & iPad)</h2>
              <div className="space-y-8">
                <InstallStep number={1} title="Open in Safari" description="This website must be opened in Safari to install it as a web app." />
                <InstallStep number={2} title="Tap the Share Button" description="Tap the Share button at the bottom center of the browser (box with an up arrow)." />
                <InstallStep number={3} title="Find 'Add to Home Screen'" description="Scroll down in the share menu and tap on 'Add to Home Screen'." />
                <InstallStep number={4} title="Confirm Installation" description="Tap 'Add' in the top right corner to add the app to your home screen." />
                <InstallStep number={5} title="Launch from Home Screen" description="The app is now installed. Tap the icon on your home screen to open it." />
              </div>
            </TabsContent>

            <TabsContent value="android" className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Installing on Android</h2>
              <div className="space-y-8">
                <InstallStep number={1} title="Open in Chrome" description="Make sure you're using Chrome browser on your Android device." />
                <InstallStep number={2} title="Tap the Menu Button" description="Tap the three dots ⋮ in the top right corner to open the menu." />
                <InstallStep number={3} title="Select 'Add to Home Screen'" description="Tap on 'Add to Home screen' or 'Install app' from the menu." />
                <InstallStep number={4} title="Confirm Installation" description="Tap 'Add' or 'Install' to confirm adding the app to your home screen." />
                <InstallStep number={5} title="Launch from Home Screen" description="The app is now installed. Tap the icon on your home screen to open it." />
              </div>
            </TabsContent>

            <TabsContent value="desktop" className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Installing on Desktop (Chrome)</h2>
              <div className="space-y-8">
                <InstallStep number={1} title="Open in Chrome" description="Make sure you're using Google Chrome browser on your computer." />
                <InstallStep number={2} title="Look for Install Icon" description="Look for the install icon (➕) in the address bar on the right side." />
                <InstallStep number={3} title="Click 'Install'" description="Click on 'Install' in the prompt that appears." />
                <InstallStep number={4} title="Launch as an App" description="The app will now run in its own window, without the browser interface." />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <Link to="/">
              <Button className="bg-bible-blue hover:bg-bible-deepBlue">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

interface InstallStepProps {
  number: number;
  title: string;
  description: string;
}

const InstallStep = ({ number, title, description }: InstallStepProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center">
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-bible-sky text-bible-deepBlue font-bold text-xl">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-bible-dark/70">{description}</p>
      </div>
      <div className="w-full md:w-48 h-auto rounded-lg overflow-hidden border shadow-sm">
        <div className="bg-gray-100 flex items-center justify-center h-24 w-full">
          <span className="text-sm text-gray-500">Screenshot</span>
        </div>
      </div>
    </div>
  );
};

export default InstallApp;
