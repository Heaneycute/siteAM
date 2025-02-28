import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import PortfolioAndTeam from './components/PortfolioAndTeam';
import StrategySection from './components/StrategySection';
import ContactSection from './components/ContactSection';
import DesignPage from './components/Pages/DesignPage';
import CopywritingPage from './components/Pages/CopywritingPage';
import IllustrationsPage from './components/Pages/IllustrationsPage';
import SMMPage from './components/Pages/SMMPage';
import Footer from './components/Footer';
import MarqueeeText from './components/MarqueeText';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <About />
                    <PortfolioAndTeam />
                    <MarqueeeText />
                    <StrategySection />
                    <ContactSection />
                  </>
                }
              />
              <Route path="/design" element={<DesignPage />} />
              <Route path="/copywriting" element={<CopywritingPage />} />
              <Route path="/illustrations" element={<IllustrationsPage />} />
              <Route path="/smm" element={<SMMPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
