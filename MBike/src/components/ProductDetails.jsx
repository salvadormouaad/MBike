import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axios';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axiosInstance.get(`/api/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load product');
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>{product.nom}</h1>
            {product.imageUrl && (
                <img
                    src={product.imageUrl}
                    alt={product.nom}
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
            )}
            <p>{product.description || 'No description available'}</p>
            <p>Price: ${product.prix}</p>
            <p>Stock: {product.stock}</p>
            <p>Type: {product.type || 'N/A'}</p>
            <button onClick={() => alert('Add to Cart functionality coming soon!')}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetails;
