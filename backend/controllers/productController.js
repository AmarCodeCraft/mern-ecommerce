// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  // If we have no DB connected yet, return mock data
  const mockProducts = [
    { _id: '1', name: 'Minimalist Wireless Headphones', price: 199.99, rating: 4.8, numReviews: 124, image: 'https://via.placeholder.com/400' },
    { _id: '2', name: 'Smart Fitness Watch', price: 249.99, rating: 4.6, numReviews: 89, image: 'https://via.placeholder.com/400' },
    { _id: '3', name: 'Ergonomic Desk Chair', price: 349.00, rating: 4.9, numReviews: 312, image: 'https://via.placeholder.com/400' },
    { _id: '4', name: 'Mechanical Keyboard', price: 129.99, rating: 4.7, numReviews: 156, image: 'https://via.placeholder.com/400' },
  ];
  
  res.json(mockProducts);
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res) => {
  res.json({ _id: req.params.id, name: 'Sample Product', price: 99.99, rating: 4.5, numReviews: 10, image: 'https://via.placeholder.com/400' });
};
