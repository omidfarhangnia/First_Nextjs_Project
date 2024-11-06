import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "First NextJs Project",
  description: "this is an online shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex box-border justify-between h-[100vh] w-[100vw] flex-col items-center overflow-hidden bg-[#111111] p-[30px] text-[#bbbbbb]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
