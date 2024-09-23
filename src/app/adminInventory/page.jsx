'use client';

import { Heading } from '@chakra-ui/react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export default function AdminInventory() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const resProducts = await fetch('/admin/products'); // Assuming the endpoint for products
            const productsData = await resProducts.json();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    // Filter products based on the search term
    const filteredProducts = products.filter(product =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box p={6}>
            {/* Search Bar */}
            <Box mb={4}>
                <TextField
                    label="Search Products"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                        marginBottom: '20px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#e0e0e0', // Default border color
                            },
                            '&:hover fieldset': {
                                borderColor: '#e85c7c', // Border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#e85c7c', // Border color when focused
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#999', // Default label color
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#e85c7c', // Label color when focused
                        },
                    }}
                />

            </Box>

            {/* Inventory Management - All Products */}
            <Box mb={8}>
                <Typography variant="h5" gutterBottom>
                    Inventory Management - Products and Stock
                </Typography>
                <Table
                    sx={{
                        border: '1px solid #e0e0e0', // Light gray border around the table
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
                        borderRadius: '8px', // Rounded corners
                        overflow: 'hidden', // Ensure proper layout with border-radius
                    }}
                >
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Stock</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.productName}</TableCell>
                                    <TableCell>{product.brand}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} align="center">
                                    No products found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
}
