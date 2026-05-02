import React from 'react';
import { Link } from 'react-router-dom';

const sections = {
  Shop: [
    { label: 'All Products', to: '/products' },
    { label: 'New Arrivals', to: '/new' },
    { label: 'Best Sellers', to: '/best-sellers' },
    { label: 'Deals', to: '/deals' },
    { label: 'Brands', to: '/brands' },
    { label: 'Categories', to: '/categories' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Blog', to: '/blog' },
  ],
  Support: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'Help Center', to: '/help' },
    { label: 'FAQs', to: '/faq' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms & Conditions', to: '/terms' },
  ],
};

const Footer = () => (
  <footer className="bg-[#0F172A]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="text-xl font-bold tracking-tighter font-['Outfit'] text-white">
            Modern<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Shop</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">.</span>
          </Link>
          <p className="text-[13px] text-slate-400 mt-4 leading-relaxed max-w-[220px]">
            Premium tech essentials for the modern professional.
          </p>
          <div className="flex gap-2.5 mt-5">
            {['X', 'In', 'Ig', 'Yt'].map(s => (
              <a key={s} href="#" className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-slate-400 text-[10px] font-bold hover:bg-violet-500/20 hover:text-violet-300 hover:border-violet-500/30 transition-all">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(sections).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-[13px] font-semibold text-slate-300 mb-4 uppercase tracking-wider">{title}</h4>
            <ul className="space-y-2.5">
              {links.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[13px] text-slate-500 hover:text-violet-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-[11px] text-slate-600">&copy; {new Date().getFullYear()} ModernShop. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link to="/privacy" className="text-[11px] text-slate-600 hover:text-slate-400 transition-colors">Privacy</Link>
          <Link to="/terms" className="text-[11px] text-slate-600 hover:text-slate-400 transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
