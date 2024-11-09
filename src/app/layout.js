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
        <div className="box-border flex min-h-[100vh] items-center justify-center bg-[#111111] p-[30px] text-[#bbbbbb]">
          <div className="flex min-h-[92vh] w-full max-w-[1250px] select-none flex-col items-center justify-between">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
