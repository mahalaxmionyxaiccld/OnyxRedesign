import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function ClientLogosSection() {
  const [api, setApi] = useState<CarouselApi>();

  const clientLogos = [
    {
      id: 1,
      name: "BOBST India",
      logoPath: "/clientlogo/bobst.png"
    },
    {
      id: 2,
      name: "Mahindra & Mahindra",
      logoPath: "/clientlogo/mahindra.png"
    },
    {
      id: 3,
      name: "ONGC",
      logoPath: "/clientlogo/ongc.jpg"
    },
    {
      id: 4,
      name: "BBS Automation",
      logoPath: "/clientlogo/bbsautomation.png"
    },
    {
      id: 5,
      name: "Ecoppia Scientific LLP",
      logoPath: "/clientlogo/ecoppia.png"
    },
    {
      id: 6,
      name: "Packam Controls",
      logoPath: "/clientlogo/packam.png"
    },
    {
      id: 7,
      name: "Infinity Automation Systems pvt ltd",
      logoPath: "/clientlogo/infinityautomation.jpg"
    },
    {
      id: 8,
      name: "Milcon Engineers",
      logoPath: "/clientlogo/milcon.jpg"
    },
    {
      id: 9,
      name: "SSIG Manufacturing Advancements",
      logoPath: "/clientlogo/ssig.png"
    },
    {
      id: 10,
      name: "Divide by Zero Technologies",
      logoPath: "/clientlogo/dividebyzero.png"
    },
    {
      id: 11,
      name: "Nayam Innovation",
      logoPath: "/clientlogo/nayam.png"
    },
    {
      id: 12,
      name: "Advaitech Studios",
      logoPath: "/clientlogo/advaitech.png"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="section-padding bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="clients-title">
            Our Clients
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="clients-description">
            Trusted by leading companies across industries
          </p>
        </div>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background/5 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background/5 to-transparent z-10 pointer-events-none" />

          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {clientLogos.map((logo) => (
                <CarouselItem key={logo.id} className="pl-4 md:pl-8 basis-1/2 md:basis-1/4 lg:basis-1/5">
                  <div className="flex justify-center items-center h-24 bg-card/50 rounded-lg p-4 hover:bg-card transition-colors duration-300" data-testid={`client-logo-${logo.id}`}>
                    <img
                      src={logo.logoPath}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
