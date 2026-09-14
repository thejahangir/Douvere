import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';
import { ArrowRight, Leaf, ShieldCheck, Smile } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-brand-cream section-padding min-h-[90vh] flex items-center">
          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-violet/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-blob mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 animate-blob mix-blend-multiply" style={{animationDelay: '2s'}} />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <span className="inline-block py-1.5 px-4 rounded-full bg-brand-violet/10 text-brand-violet font-semibold text-sm mb-6 tracking-wide uppercase opacity-0 animate-fade-in-up [animation-delay:100ms] [animation-fill-mode:forwards]">
                Modern Personal Care
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark mb-6 leading-[1.1] opacity-0 animate-fade-in-up [animation-delay:300ms] [animation-fill-mode:forwards]">
                Beauty made for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-pink">every you.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium max-w-lg opacity-0 animate-fade-in-up [animation-delay:500ms] [animation-fill-mode:forwards]">
                Thoughtfully crafted personal care for men, women and kids — designed for everyday confidence, comfort and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up [animation-delay:700ms] [animation-fill-mode:forwards]">
                <Link to="/products">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg group">
                    Explore Products
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="ghost" size="lg" className="w-full sm:w-auto text-lg hover:bg-white/50 backdrop-blur-sm">
                    Discover Douvère
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative h-[500px] lg:h-[650px] w-full rounded-[40px] overflow-hidden shadow-2xl opacity-0 animate-fade-in-up [animation-delay:600ms] [animation-fill-mode:forwards]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 via-transparent to-brand-orange/20 mix-blend-overlay z-10 animate-gradient-x" />
              <img 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200" 
                alt="Douvère Products" 
                className="absolute inset-0 w-full h-full object-cover animate-float scale-110"
              />
            </div>
          </div>
        </section>

        {/* BRAND INTRODUCTION */}
        <section className="section-padding bg-white">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">One brand. Every kind of care.</h2>
            <p className="text-xl text-gray-600">
              Douvère brings modern beauty and personal care together through thoughtfully designed products made for different needs, different routines and every stage of life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Men */}
            <Link to="/men" className="group block overflow-hidden rounded-[32px] relative aspect-[4/5] bg-gray-100">
              <img src="https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=800" alt="Men's Care" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">MEN</h3>
                <p className="text-lg opacity-90 mb-4 font-medium">Confident care</p>
                <span className="inline-flex items-center text-sm font-bold uppercase tracking-wider group-hover:text-brand-lime transition-colors">
                  Explore <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </Link>
            {/* Women */}
            <Link to="/women" className="group block overflow-hidden rounded-[32px] relative aspect-[4/5] bg-gray-100 mt-0 md:mt-12">
              <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800" alt="Women's Care" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/80 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">WOMEN</h3>
                <p className="text-lg opacity-90 mb-4 font-medium">Everyday radiance</p>
                <span className="inline-flex items-center text-sm font-bold uppercase tracking-wider group-hover:text-brand-pink transition-colors">
                  Explore <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </Link>
            {/* Kids */}
            <Link to="/kids" className="group block overflow-hidden rounded-[32px] relative aspect-[4/5] bg-gray-100 mt-0 md:mt-24">
              <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800" alt="Kids Care" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-lime/80 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">KIDS</h3>
                <p className="text-lg opacity-90 mb-4 font-medium">Gentle care</p>
                <span className="inline-flex items-center text-sm font-bold uppercase tracking-wider group-hover:text-white transition-colors">
                  Explore <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="section-padding bg-brand-lightblue/30">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the Douvère collection.</h2>
              <p className="text-xl text-gray-600">Discover our most loved personal care essentials.</p>
            </div>
            <Link to="/products">
              <Button variant="outline">View All Products</Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* WHY DOUVÈRE */}
        <section className="section-padding bg-brand-dark text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Why Douvère?</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-brand-violet/20 flex items-center justify-center text-brand-violet mb-6">
                <Leaf size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ingredient Conscious</h3>
              <p className="text-gray-400">Clear and purposeful ingredient communication. We use what works, nothing extra.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink mb-6">
                <Smile size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Made for Everyone</h3>
              <p className="text-gray-400">Care designed across men, women and kids. One simple philosophy for the whole family.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-brand-lime/20 flex items-center justify-center text-brand-lime mb-6">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Everyday Friendly</h3>
              <p className="text-gray-400">Simple products that fit naturally into daily life without unnecessary complexity.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
