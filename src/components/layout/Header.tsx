import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-brand-dark">
          DOUVÈRE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-brand-violet transition-colors">Home</Link>
          <Link to="/products" className="hover:text-brand-violet transition-colors">Products</Link>
          <Link to="/about" className="hover:text-brand-violet transition-colors">About</Link>
          <Link to="/ingredients" className="hover:text-brand-violet transition-colors">Why Douvère</Link>
          <Link to="/contact" className="hover:text-brand-violet transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/products">
            <Button variant="primary">Explore Products</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-brand-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 py-6 px-6 flex flex-col gap-6 shadow-xl">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Home</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Products</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">About</Link>
          <Link to="/ingredients" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Why Douvère</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Contact</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>
            <Button variant="primary" className="w-full justify-center">Explore Products</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
