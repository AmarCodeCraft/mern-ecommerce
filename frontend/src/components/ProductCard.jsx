import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    className="group relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--border-accent)] transition-all duration-400"
  >
    <div className="aspect-[4/5] w-full overflow-hidden bg-[var(--bg-secondary)] relative">
      <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
      <div className="absolute inset-x-0 bottom-0 p-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white py-2.5 rounded-xl font-medium text-[13px] hover:brightness-110 transition-all shadow-lg shadow-violet-600/20">
          <ShoppingBag className="w-3.5 h-3.5" /> Quick Add
        </button>
      </div>
    </div>
    <div className="p-4 flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold text-violet-600 tracking-widest uppercase">Audio</p>
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 text-amber-500 fill-current" />
          <span className="text-[11px] text-[var(--text-secondary)] font-medium">{product.rating}</span>
        </div>
      </div>
      <h3 className="text-[14px] font-medium text-[var(--text-primary)] mt-0.5 line-clamp-1">
        <Link to={`/product/${product._id}`}><span aria-hidden="true" className="absolute inset-0 z-10" />{product.name}</Link>
      </h3>
      <p className="text-[14px] text-gradient font-bold mt-1">${product.price.toFixed(2)}</p>
    </div>
  </motion.div>
);

export default ProductCard;
