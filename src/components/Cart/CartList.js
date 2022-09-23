import styled from 'styled-components/macro';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { func } from 'prop-types';
import { useCarts } from './Cart';

export default function CartList({ onUpdate }) {
  const { products } = useCarts();
  return (
    <Container>
      {products.map((product) => (
        <CartItem key={product.id} product={product} onUpdate={onUpdate} />
      ))}
      <CartFooter />
    </Container>
  );
}

CartList.propTypes = {
  onUpdate: func,
};

/* -------------------------------------------------------------------------- */

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
