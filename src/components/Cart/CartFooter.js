import CartTotal from './CartTotal';

const CartFooter = ({ ...restProps }) => (
  <footer {...restProps}>
    <CartTotal />
  </footer>
);

export default CartFooter;
