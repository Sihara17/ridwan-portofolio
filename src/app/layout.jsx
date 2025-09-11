// src/app/layout.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Ridwan Portfolio',
  description: 'My personal portfolio',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
