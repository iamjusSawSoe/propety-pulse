import "../assets/styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Property Pulse | Find the Perfect Rental",
  description:
    "Find your dream rental property with Property Pulse. Search through thousands of listings and find the perfect home for you.",
  keywords:
    "rental, find rentals, find property, property pulse, property rental, property management, property listing",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
