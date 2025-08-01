import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* Company Info */}
        <div>
          <Image
          src="/assets/Logo.png"
          alt="GloryVille Logo"
          width={55}
          height={20}
          className="h-12 mb-4"
          />
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong className="text-yellow-400">GloryVille Solutions:</strong> Empowering African businesses
            to achieve sustainable growth and market dominance. Serving Nigeria
            & Key West African Markets.
          </p>
          <div className="flex space-x-4 text-yellow-400 text-xl">
            <Link href="#" aria-label="LinkedIn"><FaLinkedin /></Link>
            <Link href="#" aria-label="Twitter"><FaTwitter /></Link>
            <Link href="#" aria-label="Pinterest"><FaPinterest /></Link>
            <Link href="#" aria-label="Instagram"><FaInstagram /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>CaseStudies</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Insights & Resources</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/services/business-process">
                <span>Business Process Management</span>
              </Link>
            </li>
            <li>
              <Link href="/services/revenue-operations">
                <span>Revenue Operations</span>
              </Link>
            </li>
            <li>
              <Link href="/services/go-to-market">
                <span>Go-To-Market Strategy</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <Link href="mailto:contact@gloryvillesolutions.com">
                contact@gloryvillesolutions.com
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-yellow-400" />
              <Link href="tel:+2347013800215">+234 701 380 0215</Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>[Your Office Address], Lagos, Nigeria</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaClock className="text-yellow-400" />
              <span>Monday–Friday: 9:00AM–5:00PM</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
