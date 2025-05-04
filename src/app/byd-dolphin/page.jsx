import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { VideoBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { AnimatedNumber } from '@/components/animated-number'
import { Gradient } from '@/components/gradient'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from '@/components/link'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'

export const metadata = {
  description:
    'Explore the unparalleled experience with BYD M6, redefining luxury and performance.',
}

function HeroSeal() {
  return (
    <div className="relative min-h-screen">
      {/* Latar Belakang Video */}
      <VideoBackground videoSrc="background dolphin.mp4" />
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
        <div className="sm:mt-27 lg:mt-32 md-30 pt-80 text-center">
          <span className="text-xs uppercase font-semibold text-white tracking-wide inline-flex items-center gap-2">
            <span className="block w-1 h-3 bg-blue-500"></span> Elevating Driving Experience
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-4xl">
            BYD DOLPHIN
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm font-medium text-white/75 sm:text-base">
          From Rp. 369.000.000
          </p>
          <div className="mt-6 flex justify-center">
            <Button variant="primary" href="https://wa.me/+6281383940305" className="bg-red-500 text-white px-5 py-2 rounded-full text-sm hover:bg-red-600">
              Pesan Test Drive →
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

export default function seal() {
  return (
    <main className="overflow-hidden">
      <HeroSeal />
      <GradientTransition />
      <Features />
      <Header />
      <PricingCards />
      <Footer />
    </main>
  )
}

function Features() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Canggih, Lincah dan Efisien
      </Heading>
      <Lead className="mt-6 max-w-3xl">
      BYD Dolphin mendapatkan rating bintang lima saat uji EURO NCAP
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Keunggulan</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
          Konsol Tengah Mengambang. Desain konsol tengah yang futuristik menciptakan lingkungan berkendara yang modern dan dinamis dengan detail trim logam yang melintang di seluruh dashboard, membentuk permukaan melengkung yang indah dan minimalis.
        </p>
          <p className="mt-8 text-sm/6 text-gray-600">
          Teknologi Baterai Blade Paten Ultra-Aman. Saat menjalani uji penetrasi paku, Baterai Blade tidak mengeluarkan asap maupun api setelah tertusuk, dan suhunya hanya mencapai 30 hingga 60°C. Sel-sel Baterai Blade juga lulus uji kondisi ekstrem lainnya, seperti dihancurkan, dibengkokkan, dipanaskan dalam tungku hingga 300°C, dan diisi daya berlebih hingga 260%. Tidak ada dari kondisi ini yang mengakibatkan kebakaran atau ledakan.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/cars/dolphin1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/cars/dolphin2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/cars/dolphin3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/cars/dolphin4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>The Numbers</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Harga otr</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                Rp. <AnimatedNumber start={0} end={369} /> Jt
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Jarak tempuh</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={15} end={490} /> KM
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Torsi Maksimum</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={40} end={310}/> Nm
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Kapasitas Baterai</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0.40} end={60.48} decimals={2} /> kWh
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Pilihan program pembiayaan yang cocok untuk Anda
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16960746136">
      </script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'AW-16960746136');
      </script>
      </Heading>
      <Lead className="mt-6 max-w-3xl">
      Kami bekerja sama dengan banyak lembaga pembiayaan yang murah, mudah, dan cepat.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 bottom-0 top-48 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function PricingCard({ tier }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              {tier.priceMonthly}
            </div>
            {tier.name === "Program Bunga Rendah" ? (
              <div className="text-lg text-gray-950/75">
              <p>Jutaan</p>
              <p>Per Bulan</p>
            </div>
            ) : (
              <div className="text-lg text-gray-950">
              <p>Jutaan</p>
            </div>
            )}
          </div>
          <div className="mt-8">
            <Button href="https://wa.me/+6281383940305">Minta simulasi</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Termasuk:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const tiers = [
  {
    name: 'Program DP Rendah',
    slug: 'Program DP Rendah',
    description: 'Dp mulai dari 9%',
    priceMonthly: 30,
    href: '#',
    highlights: [
      { description: 'Biaya Administrasi' },
      { description: 'Asuransi Kendaraan Kombinasi' },
    ],
    features: [

    ],
  },
  {
    name: 'Program Bunga Rendah',
    slug: 'Program Bunga Rendah',
    description: 'Bunga mulai 0% per tahun.',
    priceMonthly: 5,
    href: '#',
    highlights: [
      { description: 'Biaya Administrasi' },
      { description: 'Asuransi Kendaraan Kombinasi' },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 10 },
      { section: 'Features', name: 'Deal progress boards', value: 'Unlimited' },
      { section: 'Features', name: 'Sourcing platforms', value: '100+' },
      { section: 'Features', name: 'Contacts', value: 1000 },
      { section: 'Features', name: 'AI assisted outreach', value: true },
      { section: 'Analysis', name: 'Competitor analysis', value: '5 / month' },
      { section: 'Analysis', name: 'Dashboard reporting', value: true },
      { section: 'Analysis', name: 'Community insights', value: true },
      { section: 'Analysis', name: 'Performance analysis', value: true },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: '24 / 7 call center support', value: true },
      { section: 'Support', name: 'Dedicated account manager', value: false },
    ],
  },
  {
    name: 'Program Pembiayaan Syariah',
    slug: 'Program Pembiayaan Syariah',
    description: 'DP mulai dari 25%',
    priceMonthly: 80,
    href: '#',
    highlights: [
      { description: 'Biaya Administrasi' },
      { description: 'Biaya Akad' },
      { description: 'Asuransi Kendaraan Kombinasi' },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 'Unlimited' },
      { section: 'Features', name: 'Deal progress boards', value: 'Unlimited' },
      { section: 'Features', name: 'Sourcing platforms', value: '100+' },
      { section: 'Features', name: 'Contacts', value: 'Unlimited' },
      { section: 'Features', name: 'AI assisted outreach', value: true },
      { section: 'Analysis', name: 'Competitor analysis', value: 'Unlimited' },
      { section: 'Analysis', name: 'Dashboard reporting', value: true },
      { section: 'Analysis', name: 'Community insights', value: true },
      { section: 'Analysis', name: 'Performance analysis', value: true },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: '24 / 7 call center support', value: true },
      { section: 'Support', name: 'Dedicated account manager', value: true },
    ],
  },
]

function FeatureItem({ description, disabled = false }) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}