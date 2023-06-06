import MyProfilePic from "./Components/MyProfilePic";
import Navbar from "./Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Divine's Blog",
  description: "Created by Divine Ajaegbu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
