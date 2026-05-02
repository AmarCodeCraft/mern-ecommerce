import { useState, useEffect } from 'react';
import { productApi } from '../api/client';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productApi.getAll();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        // Fallback data if backend is down
        setProducts([
          { _id: '1', name: 'Minimalist Wireless Headphones', price: 199.99, rating: 4.8, numReviews: 124, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop' },
          { _id: '2', name: 'Smart Fitness Watch', price: 249.99, rating: 4.6, numReviews: 89, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop' },
          { _id: '3', name: 'Ergonomic Desk Chair', price: 349.00, rating: 4.9, numReviews: 312, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop' },
          { _id: '4', name: 'Mechanical Keyboard', price: 129.99, rating: 4.7, numReviews: 156, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
