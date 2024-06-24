import "@/assets/styles/globals.css";

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
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
