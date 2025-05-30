import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') {
            return true;
        }
        return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <nav className="container mx-auto px-4 py-3 sm:py-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="text-xl sm:text-2xl font-bold text-primary">IISPPR</Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex space-x-6 lg:space-x-8">
                            <li><Link to="/" className={`font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Home</Link></li>
                            <li><Link to="/about" className={`font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>About</Link></li>
                            <li><Link to="/projects" className={`font-medium transition-colors ${isActive('/projects') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Projects</Link></li>
                            <li><Link to="/gallery" className={`font-medium transition-colors ${isActive('/gallery') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Gallery</Link></li>
                            <li><Link to="/testimonials" className={`font-medium transition-colors ${isActive('/testimonials') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Testimonials</Link></li>
                            <li><Link to="/contact" className={`font-medium transition-colors ${isActive('/contact') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Contact</Link></li>
                        </ul>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden focus:outline-none text-primary"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 bg-white border-t mt-3">
                            <ul className="flex flex-col space-y-3 px-4">
                                <li><Link to="/" className={`block font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`} onClick={toggleMobileMenu}>Home</Link></li>
                                <li><Link to="/about" className={`block font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`} onClick={toggleMobileMenu}>About</Link></li>
                                <li><Link to="/projects" className={`block font-medium transition-colors ${isActive('/projects') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`} onClick={toggleMobileMenu}>Projects</Link></li>
                                <li><Link to="/gallery" className={`block font-medium transition-colors ${isActive('/gallery') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`} onClick={toggleMobileMenu}>Gallery</Link></li>
                                <li><Link to="/testimonials" className={`block font-medium transition-colors ${isActive('/testimonials') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`} onClick={toggleMobileMenu}>Testimonials</Link></li>
                                <li><Link to="/contact" className={`block font-medium transition-colors ${isActive('/contact') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`} onClick={toggleMobileMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    )}
                </nav>
            </header>

            <main className="flex-grow">
                <Outlet />
            </main>

            <footer className="bg-primary text-white py-8 sm:py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">IISPPR</h3>
                            <p className="text-gray-300 text-sm sm:text-base">Promoting sustainable practices and environmental conservation for a healthier planet.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors">Home</Link></li>
                                <li><Link to="/about" className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors">About</Link></li>
                                <li><Link to="/projects" className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors">Projects</Link></li>
                                <li><Link to="/contact" className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
                            <p className="text-gray-300 text-sm sm:text-base">Office No. 30 Nihad Plaza, Opposite Zakir Hussain School, Civil lines, Near AMU, Aligarh 202001</p>
                            <p className="text-gray-300 text-sm sm:text-base font-semibold mt-2">Call us</p>
                            <p className="text-gray-300 text-sm sm:text-base">+91 95287 82464</p>
                            <p className="text-gray-300 text-sm sm:text-base font-semibold mt-2">Email</p>
                            <p className="text-gray-300 text-sm sm:text-base">iisppresearch@gmail.com</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a target='_blank' href="https://www.youtube.com/@iisppr" className="bg-primary-light hover:bg-accent p-2 rounded-full transition-colors text-white">Y</a>
                                <a target='_blank' href="https://x.com/iispp_research" className="bg-primary-light hover:bg-accent p-2 rounded-full transition-colors text-white">T</a>
                                <a target='_blank' href="https://www.instagram.com/iisppr?igsh=MWNnNG03NnVyYWI0Zw==" className="bg-primary-light hover:bg-accent p-2 rounded-full transition-colors text-white">I</a>
                                <a target='_blank' href="https://www.linkedin.com/company/international-institute-of-sdg-s-and-public-policy-research/" className="bg-primary-light hover:bg-accent p-2 rounded-full transition-colors text-white">L</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-primary-light mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300 text-sm sm:text-base">
                        <p>© {new Date().getFullYear()} IISPPR. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;