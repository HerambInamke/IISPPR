// Layout.jsx - Shared layout component for consistent page structure
// Wraps all pages with a header, footer, and main content area.
// Receives children as the main content to render between Header and Footer.

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
