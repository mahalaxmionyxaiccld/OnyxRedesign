import { Switch, Route, Router as WouterRouter } from "wouter";
// ... imports

function Router() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/offerings/3d-printing" component={ThreeDPrintingPage} />
        <Route path="/offerings/machining" component={MachiningPage} />
        <Route path="/offerings/sheet-metal" component={SheetMetalPage} />
        <Route path="/offerings/vacuum-casting" component={VacuumCastingPage} />
        <Route path="/offerings/fabrication" component={FabricationPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/products/material-handling-crane" component={MaterialHandlingCranePage} />
        <Route path="/products/software-services" component={SoftwareServicesPage} />
        <Route path="/blogs" component={BlogsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
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
