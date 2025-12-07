import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <DataProvider>
          <Router>
            <Routes>
              {/* Public Routes wrapped in Layout */}
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
              <Route path="/portfolio" element={<Layout><PortfolioPage /></Layout>} />
              <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
              <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

              {/* Admin Routes (No Layout or Custom Layout) */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </Router>
        </DataProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
