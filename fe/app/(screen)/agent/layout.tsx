import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Agent Screen",
  description: "This is the Agent Screen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-slate-50">
        <Header />
        <div className="flex justify-center w-full">
          <div className="flex flex-col w-[80%] h-[]">
            <div>{children}</div>
          </div>
        </div>
        <div className="flex-1" />

        <div className="flex justify-center w-full">
          <div className="flex flex-col w-[80%]">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
