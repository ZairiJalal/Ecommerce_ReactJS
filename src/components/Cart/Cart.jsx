import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = {
    title: {
      marginTop: '5%',
    },
    emptyButton: {
      minWidth: '150px',
    },
    checkoutButton: {
      minWidth: '150px',
    },
    link: {
      textDecoration: 'none',
    },
    cardDetails: {
      display: 'flex',
      marginTop: '10%',
      width: '100%',
      justifyContent: 'space-between',
    }
  };

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">Vous n'avez aucun produit dans votre chariot,
      <Link style={classes.link} to="/"> commencer à ajouter des produits</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div style={classes.cardDetails}>
        <Typography variant="h4">Total: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button style={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Vider le Chariot </Button>
          <Button style={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Paiement</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <Typography style={classes.title} variant="h3" gutterBottom>Votre Chariot</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
