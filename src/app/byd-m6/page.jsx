import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { VideoBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Heading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  description:
    'Explore the unparalleled experience with BYD Sealon, redefining luxury and performance.',
}

function HeroSealon() {
  return (
    <div className="relative">
      {/* Latar Belakang Video */}
      <VideoBackground videoSrc="background m6.mp4" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-black"></div>
      <Container className="relative">
        <Navbar
          banner={
            <a
              href="https://wa.me/+6281383940305"
              target="_blank"
              className="flex items-center gap-1 rounded-full bg-white/35 px-3 py-0.5 text-sm/6 font-medium text-white hover:bg-fuchsia-950/30"
            >
              Hubungi melalui WhatsApp
              <ChevronRightIcon className="size-4" />
            </a>
          }
        />
        <div className="pt-60 text-center">
          <span className="text-xs uppercase font-semibold text-white tracking-wide inline-flex items-center gap-2">
            <span className="block w-1 h-3 bg-blue-500"></span> Elevating Driving Experience
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-4xl">
            Discover BYD Sealon
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm font-medium text-white/75 sm:text-base">
            Experience the next level of luxury and performance with BYD Sealon. Redefining the standards of electric vehicles.
          </p>
          <div className="mt-6 flex justify-center">
            <Button variant="primary" href="/explore-sealon" className="bg-blue-500 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-600">
              Learn More →
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function GradientTransition() {
  return (
    <div className="relative">
      <div className="h-24 bg-gradient-to-b from-black via-gray-800/50 to-gray-100 backdrop-blur-md"></div>
    </div>
  );
}

export default function m6() {
  return (
    <div className="overflow-hidden">
      <HeroSealon />
      <GradientTransition />
      <main>
        <div className="bg-gray-100 py-32">
          <SealonFeatures />
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}

function SealonFeatures() {
  return (
    <Container>
      <Heading as="h3" className="mt-2 max-w-4xl">
        BYD Sealon: Features & Innovation
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          title="Exceptional Range"
          description="Travel farther with BYD Sealon's cutting-edge battery technology."
          graphic={
            <div className="h-80 bg-[url(/sealon/range.jpg)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          title="Luxurious Interior"
          description="Indulge in luxury with Sealon's meticulously designed interior."
          graphic={
            <div className="h-80 bg-[url(/sealon/interior.jpg)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          title="Advanced Safety"
          description="Equipped with state-of-the-art safety features to ensure your peace of mind."
          graphic={
            <div className="h-80 bg-[url(/sealon/safety.jpg)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2"
        />
      </div>
    </Container>
  )
}
