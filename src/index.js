import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/Navbar.css';
import './styles/Footer.css';
import './styles/Homepage.css';
import './styles/Results.css';
import './styles/AboutUs.css';
import './styles/ContactUs.css';
import './styles/Faculty.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
