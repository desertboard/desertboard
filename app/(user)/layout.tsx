import type { Metadata } from "next";
import "../../app/globals.css";
import "../../app/components/Common/common.scss";
import Footer from "../components/Common/footer";
import Header from "../components/Header";


export const metadata: Metadata = {
   title: "Desert Board World's first Wooden Board made from Palm Waste - Desert Board",
  description: "Welcome to Desert Board. Pioneering a carbon negative future from the UAE to the World. Introducing the world's first Wooden Board made from Date Palm Biomass.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden`}
      >
        <Header/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
