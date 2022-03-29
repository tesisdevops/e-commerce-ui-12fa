const config = {
  stripe: {
    checkoutUrl: 'INSERT AWS LAMBDA ENDPOINT FOR CHARGES',
    productsUrl: 'https://lc9e57y685.execute-api.us-east-1.amazonaws.com/dev',
    currency: 'EUR',
  },
};

export default config;
