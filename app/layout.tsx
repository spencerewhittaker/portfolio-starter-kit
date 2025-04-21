import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Next.js Portfolio Starter',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var o="bf9e3d7e",n="https://api.commandbar.com",a=void 0,t=window;
              function r(o,n){void 0===n&&(n=!1),"complete"!==document.readyState&&window.addEventListener("load",r.bind(null,o,n),{capture:!1,once:!0});var a=document.createElement("script");a.type="text/javascript",a.async=n,a.src=o,document.head.appendChild(a)}
              function e(){var e;if(void 0===t.CommandBar){delete t.__CommandBarBootstrap__;var c=Symbol.for("CommandBar::configuration"),d=Symbol.for("CommandBar::disposed"),i=Symbol.for("CommandBar::isProxy"),m=Symbol.for("CommandBar::queue"),u=Symbol.for("CommandBar::unwrap"),s=Symbol.for("CommandBar::eventSubscriptions"),l=[],p=localStorage.getItem("commandbar.lc");p&&p.includes("local")&&(n="http://localhost:8000",a=void 0);var f=Object.assign(((e={})[c]={uuid:o,api:n,cdn:a},e[d]=!1,e[i]=!0,e[m]=new Array,e[u]=function(){return f},e[s]=void 0,e),t.CommandBar),v=["addCommand","boot","addEventSubscriber","addRecordAction","setFormFactor"],b=f;Object.assign(f,{shareCallbacks:function(){return{}},shareContext:function(){return{}}}),t.CommandBar=new Proxy(f,{get:function(o,n){return n in b?f[n]:"then"!==n?v.includes(n)?function(){var o=Array.prototype.slice.call(arguments);return new Promise((function(a,t){o.unshift(n,a,t),f[m].push(o)}))}:function(){var o=Array.prototype.slice.call(arguments);o.unshift(n),f[m].push(o)}:void 0}}),null!==p&&l.push("lc=".concat(p)),l.push("version=2"),a&&l.push("cdn=".concat(encodeURIComponent(a))),r("".concat(n,"/latest/").concat(o,"?").concat(l.join("&")),!0)}}
              e();
              window.CommandBar.boot('12345');
            `,
          }}
        />
      </head>
      import CommandBarLoader from './components/CommandBarLoader'
...
<body className="..." >
  <CommandBarLoader />

      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        ...

        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
