import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { VideoBackground } from '@/components/gradient'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoTimeline } from '@/components/logo-timeline'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

// function Hero() {
//   return (
//     <div className="relative">
//       {/* Latar Belakang Video */}
//       <VideoBackground videoSrc="home background video.mp4"/>
//       <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-black"></div>
//       <Container className="relative">
//         <Navbar
//           banner={
//             <a
//               href="https://wa.me/+6281383940305"
//               target="_blank"
//               className="flex items-center gap-1 rounded-full bg-white/35 px-3 py-0.5 text-sm/6 font-medium text-white hover:bg-fuchsia-950/30"
//             >
//               Hubungi melalui WhatsApp
//               <ChevronRightIcon className="size-4" />
//             </a>
//           }
//         />
//         <div className="pt-60 text-center">
//           <span className="text-xs uppercase font-semibold text-white tracking-wide inline-flex items-center gap-2">
//             <span className="block w-1 h-3 bg-red-500"></span> Kepemilikan Mobil di Luar Sekadar Mengemudi
//           </span>
//           <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-4xl">
//             Lebih Dari Sekadar Mobil
//           </h1>
//           <p className="mt-4 max-w-2xl mx-auto text-sm font-medium text-white/75 sm:text-base">
//             Rasakan dimensi baru dalam memiliki mobil BYD, di mana menjadi pemilik mobil berarti lebih dari sekadar mengemudi.
//           </p>
//           <div className="mt-6 flex justify-center">
//             <Button variant="primary" href="https://wa.me/+6281383940305" className="bg-red-500 text-white px-5 py-2 rounded-full text-sm hover:bg-red-600">
//               Pesan Test Drive →
//             </Button>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }

function Hero() {
  return (
    <div className="relative min-h-screen">
      <VideoBackground videoSrc="home background video.mp4"/>
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-black"></div>
      <Container className="relative z-10">
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
            <span className="block w-1 h-3 bg-red-500"></span> Kepemilikan Mobil di Luar Sekadar Mengemudi
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-4xl">
            Lebih Dari Sekadar Mobil
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm font-medium text-white/75 sm:text-base">
            Rasakan dimensi baru dalam memiliki mobil BYD, di mana menjadi pemilik mobil berarti lebih dari sekadar mengemudi.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              variant="primary"
              href="https://wa.me/+6281383940305"
              className="bg-red-500 text-white px-5 py-2 rounded-full text-sm hover:bg-red-600"
            >
              Pesan Test Drive →
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

function GradientTransition() {
  return (
    <div className="relative">
      <div className="h-24 bg-gradient-to-b from-black via-gray-800/50 to-gray-100 backdrop-blur-md"></div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      {/* Tambahkan transisi gradien */}
      <GradientTransition />
      <main>
        <div className="bg-gray-100 py-32">
          <BentoSection />
        </div>
      </main>
      <Testimonials />
      <Profil />
      <Footer />
    </div>
  );
}

function BentoSection() {
  return (
    <Container>
      <Heading as="h3" className="mt-2 max-w-4xl">
      Memperkenalkan Teknologi Blade Battery
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          title="Teknologi Blade Battery"
          description="Blade Battery lebih aman, lebih efisien, dan lebih terjangkau daripada baterai lain."
          graphic={
            <div className="h-80 bg-[url(/cars/battery-3.jpg)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          title="Ultra Safe"
          description="Blade Battery menjadi satu-satunya yang lolos Nail Penetration Test, yang menguji kemampuan mengeliminasi potensi terbakarnya baterai saat kecelakaan."
          graphic={
            <div className="h-80 bg-[url(/cars/battery-6.jpg)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2"
        />

        <BentoCard
          title=" Ultra Strength"
          description="Baterai ini juga berhasil melewati uji kekuatan saat dilindas truk seberat 46 ton tanpa kebocoran, deformasi, atau asap."
          graphic={
            <div className="h-80 bg-[url(/cars/battery-2.jpg)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2"
        />

        <BentoCard
          title="Ultra Long Range"
          description="Blade Battery BYD mampu membawa mobil dengan jarak tempuh yang sangat jauh dalam sekali charge."
          graphic={
            <div className="h-80 bg-[url(/cars/battery-5.jpg)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2"
        />

        <BentoCard
          title=" Ultra Long Lifespan"
          description="Blade Battery BYD adalah baterai lithium-ion yang memiliki rentang hidup sekitar 3.000 kali charge atau 1.200.000 km."
          graphic={
            <div className="h-80 bg-[url(/cars/battery-4.jpg)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2"
        />

        <BentoCard
          title="Super Power"
          description="Mampu mengisi baterai dengan sangat cepat, dan memberikan tenaga yang maksimal saat berkendara."
          graphic={
            <div className="h-80 bg-[url(/cars/battery-1.jpg)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function Profil() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pb-24 pt-72 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="/testimonials/Fidi.jpg"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                Suatu kebanggaan bisa memberikan pelayanan terbaik kepada para konsumen BYD Indonesia.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">FidiAvif</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                  BYD Brand Consultant
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}