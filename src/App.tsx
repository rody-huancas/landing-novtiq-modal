import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Examples from "./components/Examples";
import Documentation from "./components/Documentation";
import PropsTable from "./components/PropsTable";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <main>
            <Hero />
            <Features />
            <Examples />
            <Documentation />
            <PropsTable />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
