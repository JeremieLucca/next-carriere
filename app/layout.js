import "./globals.css";
import { Footer } from "./components/Footer";


export const metadata = {
  title: "Lucca Jobs",
  description: "Lucca recrute",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
