import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, ChevronDown, X, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const [showBanner, setShowBanner] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Categories', to: '/categories', hasDropdown: true },
    { label: 'Deals', to: '/deals' },
    { label: 'New Arrivals', to: '/new' },
    { label: 'Best Sellers', to: '/best-sellers' },
    { label: 'Brands', to: '/brands' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Announcement Bar — gradient */}
      {showBanner && (
        <div className="bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 text-white text-center py-2 px-4 text-[13px] relative font-medium tracking-wide">
          <span>✨ <strong>Limited Time Offer:</strong> Up to 30% OFF on Premium Tech Essentials! </span>
          <Link to="/deals" className="text-white underline underline-offset-2 hover:text-purple-100 transition-colors ml-1 font-semibold">
            Shop Now →
          </Link>
          <button onClick={() => setShowBanner(false)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Navbar — white */}
      <nav className="bg-[var(--bg-card)]/95 backdrop-blur-2xl border-b border-[var(--border)] sticky top-0 z-50 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-[60px] gap-4 lg:gap-6">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <Menu className="w-5 h-5" />
            </button>

            {/* Gradient Logo */}
            <Link to="/" className="text-xl font-bold tracking-tighter font-['Outfit'] flex-shrink-0">
              <span className="text-[var(--text-primary)]">Modern</span><span className="text-gradient">Shop</span><span className="text-gradient">.</span>
            </Link>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-faint)]" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] rounded-lg py-2 pl-9 pr-4 text-[13px] focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/20 transition-all outline-none placeholder-[var(--text-faint)]"
                />
              </div>
            </div>

            {/* Nav Links with gradient underline on active */}
            <div className="hidden lg:flex items-center gap-0.5 ml-2">
              {navLinks.map(link => (
                <Link key={link.to} to={link.to} className={`relative text-[13px] font-medium px-3 py-2 rounded-lg transition-all flex items-center gap-1 ${isActive(link.to) ? 'text-violet-600' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/[0.02]'}`}>
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-50" />}
                  {isActive(link.to) && <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-violet-600 to-pink-500 rounded-full" />}
                </Link>
              ))}
            </div>

            <div className="flex-1" />

            {/* Actions */}
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <Link to="/dashboard" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-[11px] font-bold text-white">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                    <span className="hidden sm:block text-[13px] font-medium max-w-[80px] truncate">{user.name}</span>
                  </Link>
                  <button onClick={logout} className="text-[var(--text-faint)] hover:text-red-500 text-[13px] transition-colors">Logout</button>
                </>
              ) : (
                <Link to="/login" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2">
                  <User className="h-[18px] w-[18px]" />
                  <span className="hidden sm:block text-[13px] font-medium">Sign In</span>
                </Link>
              )}

              <Link to="/cart" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative flex items-center gap-2">
                <div className="relative">
                  <ShoppingCart className="h-[18px] w-[18px]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-[9px] font-bold rounded-full h-[16px] w-[16px] flex items-center justify-center ring-2 ring-white">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:block text-[13px] font-medium">Cart</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--border)] bg-[var(--bg-card)] px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-[var(--bg-secondary)] transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
