import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'

function CallToAction() {
  return (
    <div className="relative pb-16 pt-20 text-center sm:py-24">
      <hgroup>
        <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Mau Test 
          <br></br>
          Drive Mobil BYD?
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
      90% konsumen yang test drive BYD melakukan pemesanan unit. Jangan lewatkan kesempatan ini!
      </p>
      <div className="mt-6">
        <Button
          className="w-full sm:w-auto"
          href="https://wa.me/+6281383940305"
          target="_blank"
        >
          Hubungi Melalui WhatsApp
        </Button>
      </div>
    </div>
  )
}

function SocialIconFacebook(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  )
}

function SocialIconInstagram(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" {...props}>
      <path
        d="M8.00303 4.40625C6.01553 4.40625 4.4124 6.00937 4.4124 7.99687C4.4124 9.98437 6.01553 11.5875 8.00303 11.5875C9.99053 11.5875 11.5937 9.98437 11.5937 7.99687C11.5937 6.00937 9.99053 4.40625 8.00303 4.40625ZM8.00303 10.3312C6.71865 10.3312 5.66865 9.28437 5.66865 7.99687C5.66865 6.70937 6.71553 5.6625 8.00303 5.6625C9.29053 5.6625 10.3374 6.70937 10.3374 7.99687C10.3374 9.28437 9.2874 10.3312 8.00303 10.3312ZM12.578 4.25937C12.578 4.725 12.203 5.09687 11.7405 5.09687C11.2749 5.09687 10.903 4.72187 10.903 4.25937C10.903 3.79687 11.278 3.42187 11.7405 3.42187C12.203 3.42187 12.578 3.79687 12.578 4.25937ZM14.9562 5.10937C14.903 3.9875 14.6468 2.99375 13.8249 2.175C13.0062 1.35625 12.0124 1.1 10.8905 1.04375C9.73428 0.978123 6.26865 0.978123 5.1124 1.04375C3.99365 1.09687 2.9999 1.35312 2.17803 2.17187C1.35615 2.99062 1.10303 3.98437 1.04678 5.10625C0.981152 6.2625 0.981152 9.72812 1.04678 10.8844C1.0999 12.0062 1.35615 13 2.17803 13.8187C2.9999 14.6375 3.99053 14.8937 5.1124 14.95C6.26865 15.0156 9.73428 15.0156 10.8905 14.95C12.0124 14.8969 13.0062 14.6406 13.8249 13.8187C14.6437 13 14.8999 12.0062 14.9562 10.8844C15.0218 9.72812 15.0218 6.26562 14.9562 5.10937ZM13.4624 12.125C13.2187 12.7375 12.7468 13.2094 12.1312 13.4562C11.2093 13.8219 9.02178 13.7375 8.00303 13.7375C6.98428 13.7375 4.79365 13.8187 3.8749 13.4562C3.2624 13.2125 2.79053 12.7406 2.54365 12.125C2.17803 11.2031 2.2624 9.01562 2.2624 7.99687C2.2624 6.97812 2.18115 4.7875 2.54365 3.86875C2.7874 3.25625 3.25928 2.78437 3.8749 2.5375C4.79678 2.17187 6.98428 2.25625 8.00303 2.25625C9.02178 2.25625 11.2124 2.175 12.1312 2.5375C12.7437 2.78125 13.2155 3.25312 13.4624 3.86875C13.828 4.79062 13.7437 6.97812 13.7437 7.99687C13.7437 9.01562 13.828 11.2062 13.4624 12.125Z"
        fill="currentColor"
      />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://www.facebook.com/share/1AsXVeKBtT/"
        target="_blank"
        aria-label="Contact sales on Facebook"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconFacebook className="size-4" />
      </Link>
      <Link
        href="https://www.instagram.com/apip_byd?igsh=MXMydHlydGlsd2Z4eg=="
        target="_blank"
        aria-label="Contact sales on Instagram"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconInstagram className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} BYD Kota Bogor
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container>
          <CallToAction />
          <PlusGrid className="pb-16">
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}
