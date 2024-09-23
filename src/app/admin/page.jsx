'use client';

import { Box, Typography, Grid, Card, CardContent, Button, TextField, List, ListItem, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import MonthlyOrdersChart from './components/monthlyOrdersChart';
import MonthlySalesChart from './components/monthlySalesChart';

export default function AdminDashboard() {
    const [bestSellingProducts, setBestSellingProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0); // Dummy product count
    const [totalRevenue, setTotalRevenue] = useState(0); // Dummy total revenue
    const router = useRouter();
    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [message, setMessage] = useState('');
    const inputFileRef = useRef(null);
    const [blob, setBlob] = useState(null);

    useEffect(() => {
        const fetchTotalRevenue = async () => {
            try {
                const res = await fetch('/api/total-revenue');
                const data = await res.json();
                if (res.ok) {
                    setTotalRevenue(data.totalRevenue);
                } else {
                    console.error(data.error);
                }
            } catch (error) {
                console.error('Error fetching total revenue:', error);
            }
        };

        fetchTotalRevenue();
    }, []);

    useEffect(() => {
        const fetchUsersAndProducts = async () => {
            const resUsers = await fetch('/admin/users');
            const usersData = await resUsers.json();
            setUsers(usersData);

            const resProducts = await fetch('/admin/products'); // Assuming the endpoint for products
            const productsData = await resProducts.json();
            setProducts(productsData);

            setProductCount(productsData.length); // Set product count from fetched data

            const resBestSelling = await fetch('/admin/best-selling');
            const bestSellingData = await resBestSelling.json();
            setBestSellingProducts(bestSellingData);
        };

        fetchUsersAndProducts();
    }, []);

    const handleUpload = async (e) => {
        e.preventDefault();
        const file = inputFileRef.current.files[0];

        const response = await fetch(`/api/file?filename=${file.name}`, {
            method: 'POST',
            body: file,
        });

        const newBlob = await response.json();
        setBlob(newBlob);
        setImageUrl(newBlob.url);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('/admin/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productName,
                    productType,
                    originalPrice,
                    discountedPrice,
                    imageUrl,
                    brand,
                    category,
                    stock,
                }),
            });

            router.refresh();
            setMessage('Product added successfully');
            resetForm();
        } catch (error) {
            setMessage('An error occurred while adding the product: ' + error.message);
        }
    };

    const resetForm = () => {
        setProductName('');
        setProductType('');
        setBrand('');
        setCategory('');
        setStock('');
        setOriginalPrice('');
        setDiscountedPrice('');
        setImageUrl('');
        setBlob(null);
    };

    return (
        <Box p={6}>
            {/* Dashboard cards */}
            <Grid container spacing={3} mb={8}>
                {/* Total Revenue */}
                <Grid item xs={12} sm={4}>
                    <Card sx={{ border: '1px solid #e0e0e0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: '#e85c7c' }}>
                        <CardContent sx={{ color: '#fff'}}>
                            <Typography  variant="h6">Total Revenue</Typography>
                            <Typography variant="h4">{totalRevenue.toFixed(2)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Number of Users */}
                <Grid item xs={12} sm={4}>
                    <Card sx={{ border: '1px solid #e0e0e0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: '#e85c7c' }}>
                        <CardContent sx={{ color: '#fff'}}>
                            <Typography variant="h6">Total Users</Typography>
                            <Typography variant="h4">{users.length}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Number of Products */}
                <Grid item xs={12} sm={4}>
                    <Card sx={{ border: '1px solid #e0e0e0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: '#e85c7c' }}>
                        <CardContent sx={{ color: '#fff'}}>
                            <Typography variant="h6">Total Products</Typography>
                            <Typography variant="h4">{productCount}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Best-selling products and registered users tables inside cards */}
            <Box mb={8}>
                <Grid container spacing={3}>
                    {/* Best Selling Products */}
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" sx={{ boxShadow: 3, backgroundColor: '#e85c7c' }}>
                            <CardContent sx={{ color: '#fff'}}>
                                <Typography variant="h5" gutterBottom>
                                    Best Selling Products
                                </Typography>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ color: '#fff'}}>Product Id</TableCell>
                                            <TableCell sx={{ color: '#fff'}}>Product Name</TableCell>
                                            <TableCell sx={{ color: '#fff'}}>Sales</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {bestSellingProducts.map((product) => (
                                            <TableRow key={product.id}>
                                                <TableCell sx={{ color: '#fff'}}>{product.id}</TableCell>
                                                <TableCell sx={{ color: '#fff'}}>{product.productName}</TableCell>
                                                <TableCell sx={{ color: '#fff'}}>{product.sales}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Registered Users */}
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" sx={{ boxShadow: 3, backgroundColor: '#e85c7c' }}>
                            <CardContent>
                                <Typography sx={{ color: '#fff'}} variant="h5" gutterBottom>
                                    Registered Users
                                </Typography>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ color: '#fff'}}>User Name / Name</TableCell>
                                            <TableCell sx={{ color: '#fff'}}>Email</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {users.map((user) => (
                                            <TableRow key={user.id}>
                                                <TableCell sx={{ color: '#fff'}}>{user.name} {user.username}</TableCell>
                                                <TableCell sx={{ color: '#fff'}}>{user.email}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <div className="charts-container">
                <MonthlyOrdersChart />
                <MonthlySalesChart />
            </div>
            
            

            
        </Box>
    );
}
