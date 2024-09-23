// components/AdminNavbar.jsx
import { Box, Flex, Link, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function AdminNavbar() {
  return (
    <Flex bg="teal.500" color="white" padding="1.5rem" justify="space-between">
      <Box fontWeight="bold">Admin Dashboard</Box>
      <Flex gap="1rem">
        <Link as={NextLink} href="/admin">
          Dashboard
        </Link>
        <Link as={NextLink} href="/admin/products">
          Products
        </Link>
        <Link as={NextLink} href="/admin/users">
          Users
        </Link>
        <Button colorScheme="teal" variant="outline">
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}
