let orders = [{
    'ID' : 1,
    'OrderNumber' : 35703,
    'OrderDate' : '05/02/2020',
    'SaleAmount' : 11800,
    'Terms' : '15 Days',
    'TotalAmount' : 12175,
    'CustomerStoreState' : 'California',
    'CustomerStoreCity' : 'Los Angeles',
    'Employee' : 'Harv Mudd'
  }, {
    'ID' : 2,
    'OrderNumber' : 35711,
    'OrderDate' : '05/02/2020',
    'SaleAmount' : -16050,
    'Terms' : '15 Days',
    'TotalAmount' : 16550,
    'CustomerStoreState' : 'California',
    'CustomerStoreCity' : 'San Jose',
    'Employee' : 'Jim Packard'
  }];
  
  export default {
    getOrders() {
      return orders;
    }
  };