'use client';

import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export default function AdminOrders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const resOrders = await fetch('/admin/orders');
      const ordersData = await resOrders.json();
      setOrders(ordersData);
    };

    fetchOrders();
  }, []);

  return (
    <Box p={6}>
      {/* Orders Management - Orders */}
      <Box mb={8}>
        <Typography variant="h5" gutterBottom>
          Orders Management
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
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}> {/* Optional background color for the header */}
              <TableCell>Order ID</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>GST Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.userId}</TableCell>
                <TableCell>{order.transactionId}</TableCell>
                <TableCell>{order.totalAmount.toFixed(2)}</TableCell>
                <TableCell>{order.gstAmount.toFixed(2)}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{new Date(order.createdAt).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}
