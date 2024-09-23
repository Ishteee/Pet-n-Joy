// components/AdminDashboard.jsx
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import BestSellingProducts from './BestSellingProducts';
import RegisteredUsers from './RegisteredUsers';
import AddProductButton from './AddProductButton';
import InventoryManagement from './InventoryManagement';

export default function AdminDashboard() {
  return (
    <Box p="4">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <BestSellingProducts />
        </GridItem>
        <GridItem>
          <RegisteredUsers />
        </GridItem>
        <GridItem colSpan={2}>
          <AddProductButton />
        </GridItem>
        <GridItem colSpan={2}>
          <InventoryManagement />
        </GridItem>
      </Grid>
    </Box>
  );
}
