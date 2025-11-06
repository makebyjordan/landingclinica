import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { FinancingPage } from './components/FinancingPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans antialiased">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HomePage />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/financiacion" element={<FinancingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;