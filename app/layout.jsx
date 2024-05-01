import "@/assets/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property Pulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties, real estate",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
