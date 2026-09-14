import { Link } from 'react-router-dom';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-bold tracking-tighter text-white mb-4 block">
              DOUVÈRE
            </Link>
            <p className="text-gray-400 font-medium text-lg leading-relaxed mb-6">
              Beauty. Care. For Everyone.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-violet hover:text-white transition-colors">
                <LinkIcon size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors">
                <LinkIcon size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors">
                <LinkIcon size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                <LinkIcon size={20} />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/men" className="text-gray-400 hover:text-white transition-colors">For Men</Link></li>
              <li><Link to="/women" className="text-gray-400 hover:text-white transition-colors">For Women</Link></li>
              <li><Link to="/kids" className="text-gray-400 hover:text-white transition-colors">For Kids</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Brand</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/ingredients" className="text-gray-400 hover:text-white transition-colors">Why Douvère</Link></li>
              <li><Link to="/ingredients" className="text-gray-400 hover:text-white transition-colors">Ingredients</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Discover new products and personal care tips.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:border-brand-violet transition-colors text-white placeholder:text-gray-500"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-violet rounded-full flex items-center justify-center hover:bg-brand-violet/80 transition-colors">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Douvère. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
