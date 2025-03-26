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

interface HomeData {
    home: {
      metaTitle: string;
      metaDescription: string;
    }[];
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await apiService.get<HomeData>("/home");

  const metadataTitle = data?.home[0]?.metaTitle;
  const metadataDescription =
    data?.home[0]?.metaDescription;

    console.log(metadataTitle, metadataDescription)

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16905314007');
        `}
      </Script>
      </head>
      <body className={`antialiased overflow-x-hidden`}>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16905314007"
      />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
