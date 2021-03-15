import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';

const Products = ({ products, onAddToCart }) => {

  const classes = {content: {
  flexGrow: 1,
  backgroundColor: 'red',
  padding: "30px",
}};

  if (!products.length) return <p>Chargement...</p>;

  return ( 
    <div style={classes.content} >
      <br></br><br></br><br></br>    
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </div>   
  );
};



export default Products;

