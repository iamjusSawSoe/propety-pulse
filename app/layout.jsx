import "../assets/styles/globals.css";
import AuthProvider from "../components/AuthProvider";
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
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
