import type { Metadata } from "next";
import "../../app/globals.css";
import "../../app/components/Common/common.scss";
import Footer from "../components/Common/footer";
import Header from "../components/Header";
import Script from "next/script";
import apiService from "../services/apiService";

// export const metadata: Metadata = {
//   title:
//     "Desert Board World's first Wooden Board made from Palm Waste - Desert Board",
//   description:
//     "Welcome to Desert Board. Pioneering a carbon negative future from the UAE to the World. Introducing the world's first Wooden Board made from Date Palm Biomass.",
// };

export const dynamic = "force-dynamic";

interface HomeData {
  home: {
    metaTitle: string;
    metaDescription: string;
  }[];
}

interface GTMConfigData {
  gtmConfig: {
    gtmId: string;
    googleAnalyticsId: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await apiService.get<HomeData>("/home");

  const metadataTitle =
    data?.home[0]?.metaTitle || "Desert Board World's first Wooden Board made from Palm Waste - Desert Board";
  const metadataDescription =
    data?.home[0]?.metaDescription ||
    "Welcome to Desert Board. Pioneering a carbon negative future from the UAE to the World. Introducing the world's first Wooden Board made from Date Palm Biomass.";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch GTM configuration
  const gtmData = await apiService.get<GTMConfigData>("/gtm-config");
  const gtmId = gtmData?.gtmConfig?.gtmId || "GTM-NZPT95ZG";
  const googleAnalyticsId = gtmData?.gtmConfig?.googleAnalyticsId || "AW-16905314007";

  return (
    <html lang="en">
      <head>
        {/* <title>
          Desert Board World&apos;s first Wooden Board made from Palm Waste -
          Desert Board
        </title>
        <meta
          name="description"
          content="Welcome to Desert Board. Pioneering a carbon negative future from the UAE to the World. Introducing the world's first Wooden Board made from Date Palm Biomass."
        /> */}
        {/* Google Tag Manager Script */}

        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalyticsId}');
        `}
        </Script>
      </head>
      <body className={`antialiased overflow-x-hidden`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager */}
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
