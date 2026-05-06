import './App.css'
import './index.css'
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { Home } from './sections/home.tsx';
import { About } from './sections/about.tsx';
import { Project } from './sections/project.tsx';
import { Skillset } from './sections/skillset.tsx';
// import { Certificates } from './sections/certificates.tsx';
import { Experience } from './sections/experience.tsx';
import { Contact } from './sections/contact.tsx';
import { Footer } from './component/footer.tsx';
import { ScrollProgress } from './component/ui/ScrollProgress.tsx';
import { LoadingScreen } from './component/ui/LoadingScreen.tsx';
import { BackToTop } from './component/ui/BackToTop.tsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className='font-sen overflow-x-hidden'>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ScrollProgress />
              <Home />
              <About />
              <Project />
              <Skillset />
              {/* <Certificates /> */}
              <Experience />
              <Contact />
              <Footer />
              <BackToTop />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}

export default App;