import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import ThreeDPrintingPage from "@/pages/offerings/3d-printing";
import MachiningPage from "@/pages/offerings/machining";
import SheetMetalPage from "@/pages/offerings/sheet-metal";
import VacuumCastingPage from "@/pages/offerings/vacuum-casting";
import FabricationPage from "@/pages/offerings/fabrication";
import ProductsPage from "@/pages/products";
import BlogsPage from "@/pages/blogs";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/offerings/3d-printing" component={ThreeDPrintingPage} />
      <Route path="/offerings/machining" component={MachiningPage} />
      <Route path="/offerings/sheet-metal" component={SheetMetalPage} />
      <Route path="/offerings/vacuum-casting" component={VacuumCastingPage} />
      <Route path="/offerings/fabrication" component={FabricationPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/blogs" component={BlogsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
