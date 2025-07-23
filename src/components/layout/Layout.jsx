"use client"

import { useState, useRef, useEffect } from "react"
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom"
import Splash from "../Splash"
import { useSmoothScroll } from '../../utils/useSmoothScroll';
import { AnimatePresence } from "framer-motion"

const Layout = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [email, setEmail] = useState("")
    const location = useLocation()
    const navigate = useNavigate()
    const searchRef = useRef(null)
    const searchInputRef = useRef(null)

    // Search data - you can expand this with more content
    const searchData = [
        { title: "Home", path: "/", description: "Welcome to IISPPR homepage" },
        { title: "About Us", path: "/about", description: "Learn more about our organization" },
        { title: "Our Mission", path: "/about", description: "Discover our mission and values" },
        { title: "Testimonials", path: "/testimonials", description: "Read what people say about us" },
        { title: "Photo Gallery", path: "/gallery", description: "Browse our image gallery" },
        { title: "Current Projects", path: "/projects", description: "View our ongoing projects" },
        { title: "Project Reports", path: "/reports", description: "Access detailed project reports" },
        { title: "Latest Articles", path: "/articles", description: "Read our latest articles and news" },
        { title: "Environmental Articles", path: "/articles", description: "Articles about environmental conservation" },
        { title: "Contact Information", path: "/contact", description: "Get in touch with us" },
        { title: "Sustainability", path: "/projects", description: "Our sustainability initiatives" },
        { title: "Conservation", path: "/articles", description: "Environmental conservation topics" },
    ]

    const isActive = (path) => {
        if (path === "/" && location.pathname === "/") {
            return true
        }
        return location.pathname === path || (path !== "/" && location.pathname.startsWith(path))
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
        if (!searchOpen) {
            setTimeout(() => {
                searchInputRef.current?.focus()
            }, 100)
        } else {
            setSearchQuery("")
            setSearchResults([])
        }
    }

    const handleSearchChange = (e) => {
        const query = e.target.value
        setSearchQuery(query)

        if (query.trim() === "") {
            setSearchResults([])
            return
        }

        // Filter search data based on query
        const filtered = searchData.filter(
            (item) =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase()),
        )

        setSearchResults(filtered.slice(0, 6)) // Limit to 6 results
    }

    const handleSearchResultClick = (path) => {
        navigate(path)
        setSearchOpen(false)
        setSearchQuery("")
        setSearchResults([])
    }

    const handleNewsletterSubmit = (e) => {
        e.preventDefault()
        // Handle newsletter subscription here
        console.log("Newsletter subscription:", email)
        setEmail("")
        // You can add your newsletter subscription logic here
    }

    // Close search when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchOpen(false)
                setSearchQuery("")
                setSearchResults([])
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const [loading, setLoading] = useState(true)
    useSmoothScroll()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence mode="wait">
            {loading ? (
                <Splash key="splash" />
            ) : (
                <div className="flex flex-col min-h-screen">
                    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
                        <nav className="container mx-auto px-4 py-4">
                            <div className="flex justify-between items-center">
                                {/* Logo */}
                                <Link to="/" className="text-2xl font-bold text-white tracking-wide">
                                    IISPPR
                                </Link>

                                {/* Desktop Navigation */}
                                <ul className="hidden lg:flex space-x-8 items-center">
                                    <li>
                                        <Link
                                            to="/"
                                            className={`font-medium transition-colors duration-200 ${isActive("/") ? "text-white border-b-2 border-blue-400 pb-1" : "text-gray-300 hover:text-white"
                                                }`}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/about"
                                            className={`font-medium transition-colors duration-200 ${isActive("/about")
                                                ? "text-white border-b-2 border-blue-400 pb-1"
                                                : "text-gray-300 hover:text-white"
                                                }`}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/testimonials"
                                            className={`font-medium transition-colors duration-200 ${isActive("/testimonials")
                                                ? "text-white border-b-2 border-blue-400 pb-1"
                                                : "text-gray-300 hover:text-white"
                                                }`}
                                        >
                                            Testimonials
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/gallery"
                                            className={`font-medium transition-colors duration-200 ${isActive("/gallery")
                                                ? "text-white border-b-2 border-blue-400 pb-1"
                                                : "text-gray-300 hover:text-white"
                                                }`}
                                        >
                                            Gallery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/projects"
                                            className={`font-medium transition-colors duration-200 ${isActive("/projects")
                                                ? "text-white border-b-2 border-blue-400 pb-1"
                                                : "text-gray-300 hover:text-white"
                                                }`}
                                        >
                                            Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/reports"
                                            className={`font-medium transition-colors duration-200 ${isActive("/reports")
                                                ? "text-white border-b-2 border-blue-400 pb-1"
                                                : "text-gray-300 hover:text-white"
                                                }`}
                                        >
                                            Reports
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/articles"
                                            className={`font-medium transition-colors duration-200 ${isActive("/articles")
                                                ? "text-white border-b-2 border-blue-400 pb-1"
                                                : "text-gray-300 hover:text-white"
                                                }`}
                                        >
                                            Articles
                                        </Link>
                                    </li>
                                </ul>

                                {/* Contact Button and Search - Desktop */}
                                <div className="hidden lg:flex items-center space-x-4">
                                    <Link
                                        to="/contact"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200 shadow-lg"
                                    >
                                        Contact us
                                    </Link>
                                    {/* Search Container */}
                                    <div className="relative" ref={searchRef}>
                                        <button
                                            onClick={toggleSearch}
                                            className="bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white p-2 rounded-full transition-all duration-200 shadow-md"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                />
                                            </svg>
                                        </button>
                                        {/* Search Dropdown */}
                                        {searchOpen && (
                                            <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                                                <div className="p-4">
                                                    <input
                                                        ref={searchInputRef}
                                                        type="text"
                                                        placeholder="Search pages, articles, projects..."
                                                        value={searchQuery}
                                                        onChange={handleSearchChange}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                                                    />
                                                </div>
                                                {/* Search Results */}
                                                {searchResults.length > 0 && (
                                                    <div className="border-t border-gray-200 max-h-64 overflow-y-auto">
                                                        {searchResults.map((result, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => handleSearchResultClick(result.path)}
                                                                className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                                                            >
                                                                <div className="font-medium text-gray-900">{result.title}</div>
                                                                <div className="text-sm text-gray-600 mt-1">{result.description}</div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                                {/* No Results */}
                                                {searchQuery && searchResults.length === 0 && (
                                                    <div className="border-t border-gray-200 p-4 text-center text-gray-500">
                                                        No results found for "{searchQuery}"
                                                    </div>
                                                )}
                                                {/* Search Suggestions when empty */}
                                                {!searchQuery && (
                                                    <div className="border-t border-gray-200 p-4">
                                                        <div className="text-sm text-gray-600 mb-2">Popular searches:</div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {["About", "Projects", "Articles", "Contact"].map((term) => (
                                                                <button
                                                                    key={term}
                                                                    onClick={() => setSearchQuery(term)}
                                                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-150"
                                                                >
                                                                    {term}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Mobile Menu Button */}
                                <button
                                    className="lg:hidden focus:outline-none text-white"
                                    onClick={toggleMobileMenu}
                                    aria-label="Toggle menu"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>

                            {/* Mobile Menu */}
                            {mobileMenuOpen && (
                                <div className="lg:hidden py-4 bg-gray-800 border-t border-gray-700 mt-4 rounded-lg">
                                    <ul className="flex flex-col space-y-3 px-4">
                                        <li>
                                            <Link
                                                to="/"
                                                className={`block font-medium transition-colors duration-200 py-2 ${isActive("/") ? "text-blue-400" : "text-gray-300 hover:text-white"
                                                    }`}
                                                onClick={toggleMobileMenu}
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/about"
                                                className={`block font-medium transition-colors duration-200 py-2 ${isActive("/about") ? "text-blue-400" : "text-gray-300 hover:text-white"
                                                    }`}
                                                onClick={toggleMobileMenu}
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/testimonials"
                                                className={`block font-medium transition-colors duration-200 py-2 ${isActive("/testimonials") ? "text-blue-400" : "text-gray-300 hover:text-white"
                                                    }`}
                                                onClick={toggleMobileMenu}
                                            >
                                                Testimonials
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/gallery"
                                                className={`block font-medium transition-colors duration-200 py-2 ${isActive("/gallery") ? "text-blue-400" : "text-gray-300 hover:text-white"
                                                    }`}
                                                onClick={toggleMobileMenu}
                                            >
                                                Gallery
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/projects"
                                                className={`block font-medium transition-colors duration-200 py-2 ${isActive("/projects") ? "text-blue-400" : "text-gray-300 hover:text-white"
                                                    }`}
                                                onClick={toggleMobileMenu}
                                            >
                                                Projects
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/reports"
                                                className={`block font-medium transition-colors duration-200 py-2 ${isActive("/reports") ? "text-blue-400" : "text-gray-300 hover:text-white"
                                                    }`}
                                                onClick={toggleMobileMenu}
                                            >
                                                Reports
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/articles"
                                                className={`block font-medium transition-colors duration-200 py-2 ${isActive("/articles") ? "text-blue-400" : "text-gray-300 hover:text-white"
                                                    }`}
                                                onClick={toggleMobileMenu}
                                            >
                                                Articles
                                            </Link>
                                        </li>
                                        <li className="pt-4 border-t border-gray-700">
                                            <Link
                                                to="/contact"
                                                className="block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 text-center"
                                                onClick={toggleMobileMenu}
                                            >
                                                Contact us
                                            </Link>
                                        </li>
                                        <li className="pt-2">
                                            <button
                                                onClick={() => {
                                                    toggleMobileMenu()
                                                    toggleSearch()
                                                }}
                                                className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white p-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    />
                                                </svg>
                                                <span>Search</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </nav>
                    </header>

                    <main className="flex-grow">
                        <Outlet />
                    </main>

                    {/* Responsive Footer */}
                    <footer className="bg-gray-900 text-white py-8 md:py-12">
                        <div className="container mx-auto px-4 md:px-6">
                            {/* Main Footer Content */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
                                {/* Brand & Mission Section */}
                                <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1">
                                    <h3 className="text-xl md:text-2xl font-extrabold mb-3 tracking-wide">IISPPR</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Promoting sustainable practices and environmental conservation for a healthier planet.
                                    </p>
                                </div>

                                {/* Quick Links */}
                                <div className="min-w-0">
                                    <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/about"
                                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/projects"
                                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                            >
                                                Projects
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/contact"
                                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Get In Touch */}
                                <div className="min-w-0">
                                    <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Get In Touch</h4>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link
                                                to="/testimonials"
                                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                            >
                                                Testimonials
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/gallery"
                                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                            >
                                                Gallery
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/reports"
                                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                            >
                                                Reports
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/articles"
                                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                            >
                                                Articles
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Address */}
                                <div className="min-w-0">
                                    <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Address</h4>
                                    <address className="text-gray-300 text-sm not-italic leading-relaxed">
                                        Office No. 30 Nihad Plaza,
                                        <br />
                                        Opposite Zakir Hussain School,
                                        <br />
                                        Civil lines, Near AMU,
                                        <br />
                                        Aligarh 202001
                                    </address>
                                </div>

                                {/* Newsletter - Responsive */}
                                <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1 min-w-0">
                                    <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Newsletter</h4>
                                    <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                                        {/* Responsive Newsletter Form */}
                                        <div className="flex flex-col sm:flex-row gap-2">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter Your Email"
                                                required
                                                className="flex-1 min-w-0 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
                                            />
                                            <button
                                                type="submit"
                                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md sm:rounded-l-none sm:rounded-r-md transition-colors duration-200 font-medium text-sm whitespace-nowrap"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                        <p className="text-gray-400 text-xs">Your email is safe with us we don't spam</p>
                                    </form>

                                    {/* Social Media */}
                                    <div className="mt-6">
                                        <h5 className="text-sm font-semibold mb-3">Follow Me</h5>
                                        <div className="flex space-x-3">
                                            <a
                                                href="#"
                                                className="w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                                                aria-label="Twitter"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="#"
                                                className="w-8 h-8 bg-gray-700 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
                                                aria-label="LinkedIn"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="#"
                                                className="w-8 h-8 bg-gray-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-200"
                                                aria-label="Facebook"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="#"
                                                className="w-8 h-8 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-200"
                                                aria-label="Instagram"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Copyright */}
                            <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 md:pt-6 text-center">
                                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} IISPPR. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
                </div>
            )}
        </AnimatePresence>
    )
}

export default Layout
