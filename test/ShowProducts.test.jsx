import React from 'react';
import { render, screen } from '@testing-library/react';
import ShowProducts from '../src/contains/pages/products-page/show-products/show-products.jsx';
import '@testing-library/jest-dom';

describe('ShowProducts', () => {
    test('renders a list of products when products are provided', () => {
        const mockProducts = [
            { id: 1, brand: 'Brand A', category: 'Category A', price: 100, name: 'Product 1', rating: 4, imageUrl: 'image1.jpg' },
            { id: 2, brand: 'Brand B', category: 'Category B', price: 200, name: 'Product 2', rating: 5, imageUrl: 'image2.jpg' },
        ];

        render(<ShowProducts products={mockProducts} />);

        expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
    });

    test('renders empty data message when no products are provided', () => {
        render(<ShowProducts products={[]} />);

        expect(screen.getByText(/No products found/i)).toBeInTheDocument();
    });
});
