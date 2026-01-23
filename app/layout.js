// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import WhatsAppSticky from "./components/WhatsAppSticky";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "SwiftLogistics - Global Shipping Solutions",
//   description: "Premium logistics and shipping services worldwide",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
//       >
//         <Navbar />
//         <main className="flex-grow">
//           {children}
//         </main>
//         <Footer />
//         <WhatsAppSticky />
//       </body>
//     </html>
//   );
// }


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppSticky from "./components/WhatsAppSticky";
import CallSticky from "./components/CallSticky";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Invictus Logistics Solutions",
  description: " Revolutionizing global supply chains with cutting-edge technology, real-time visibility, and unparalleled security for your shipments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CallSticky />

        {/* Floating buttons on all pages via Root Layout */}
        <WhatsAppSticky />
        
      </body>
    </html>
  );
}
