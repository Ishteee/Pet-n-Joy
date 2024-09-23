'use client';

import { Heading } from '@chakra-ui/react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export default function AdminInventory() {
    const [reviews, setReviews] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchReviews = async () => {
            const resReviews = await fetch('/admin/reviews'); // Assuming the endpoint for products
            const reviewsData = await resReviews.json();
            setReviews(reviewsData);
        };

        fetchReviews();
    }, []);

    // Filter products based on the search term
    const filteredReviews = reviews.filter(review =>
        review.product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box p={6}>
            {/* Search Bar */}
            <Box mb={4}>
                <TextField
                    label="Search Reviews by Product Name"
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
                    Customer Reviews
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
                            <TableCell>User Name</TableCell>
                            <TableCell>Comment</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredReviews.length > 0 ? (
                            filteredReviews.map((review) => (
                                <TableRow key={review.id}>
                                    <TableCell>{review.product.productName}</TableCell>
                                    <TableCell>{review.user.username || review.user.name}</TableCell>
                                    <TableCell>{review.comment}</TableCell>
                                    <TableCell>{new Date(review.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}{" "}
                                        at{" "}
                                        {new Date(review.createdAt).toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true,
                                        })}</TableCell>
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
