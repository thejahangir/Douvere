import { Link } from 'react-router-dom';
import type { Product } from '../../data/products';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col glass-card rounded-[24px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
      {/* Image Container */}
      <div className={`relative aspect-square overflow-hidden ${product.accent} bg-opacity-10 p-6 flex items-center justify-center`}>
        <div className={`absolute inset-0 ${product.accent} opacity-5 transition-opacity group-hover:opacity-10`} />
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover rounded-2xl shadow-lg mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full text-brand-dark shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-brand-dark group-hover:text-brand-violet transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
          {product.description}
        </p>
        
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Key Ingredients</p>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.slice(0,2).map(ing => (
              <span key={ing} className="text-sm bg-gray-50 px-3 py-1 rounded-full text-gray-700 border border-gray-100">
                {ing}
              </span>
            ))}
            {product.ingredients.length > 2 && (
              <span className="text-sm bg-gray-50 px-3 py-1 rounded-full text-gray-500 border border-gray-100">
                +{product.ingredients.length - 2}
              </span>
            )}
          </div>
        </div>

        <Link to={`/products/${product.id}`} className="mt-auto block">
          <Button variant="outline" className="w-full group/btn justify-between">
            View Details
            <ArrowRight size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
