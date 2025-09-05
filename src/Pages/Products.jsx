import React from 'react'
import Section1 from '../components/productpage_components/section1'
import Section2 from '../components/productpage_components/section2'
import Section3 from '../components/productpage_components/Section3'
import Section4 from '../components/productpage_components/section4'
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import productData from '../components/productpage_components/data/productData';

const Products = ({ defaultProduct }) => {
  const { productName, subProductName } = useParams();
  const location = useLocation();

  // If no product is specified and defaultProduct is provided, redirect to that product
  if (!productName && defaultProduct) {
    return <Navigate to={`/products/${defaultProduct}`} replace />;
  }
  
  // If no product is specified and no defaultProduct, show a list of all products
  if (!productName) {
    return (
      <div className='flex flex-col min-h-screen p-8'>
        <h1 className='text-3xl font-bold mb-6'>Our Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {productData.map(product => (
            <div key={product.id} className='border rounded-lg p-6 shadow-md'>
              <img src={product.logo} alt={product.name} className='h-16 mb-4' />
              <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
              <p className='mb-4'>{product.banner.description}</p>
              <Link to={`/products/${product.slug}`} className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Find the correct product data object based on the URL slug
  const currentProduct = productData.find(product => product.slug === productName);
  
  // Handle the case where the product is not found
  if (!currentProduct) {
    return <div className='p-8'>Product not found.</div>;
  }

  // If a sub-product is specified in the URL
  if (subProductName) {
    // Find the sub-product in the current product's products array
    const subProduct = currentProduct.products.find(prod => prod.slug === subProductName);
    
    if (!subProduct) {
      return <div className='p-8'>Sub-product not found.</div>;
    }
    
    // Render the sub-product page
    return (
      <div className='flex flex-col min-h-screen p-8'>
        <Link to={`/products/${productName}`} className='mb-4 text-blue-600 hover:underline'>
          &larr; Back to {currentProduct.name}
        </Link>
        <h1 className='text-3xl font-bold mb-6'>{subProduct.name}</h1>
        <div className='bg-white shadow-md rounded-lg p-6 mb-8'>
          {subProduct.descriptions.map((desc, index) => (
            <p key={index} className='mb-4'>{desc}</p>
          ))}
        </div>
      </div>
    );
  }

  // Render the main product page with sections
  return (
    <div className='flex flex-col min-h-screen'>
        <Section1 product={currentProduct} />
        <Section2 product={currentProduct} />
        <Section3 product={currentProduct} />
        <Section4 product={currentProduct} />
    </div>
  )
}

export default Products;