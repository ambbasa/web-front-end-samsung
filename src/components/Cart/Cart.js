import styled from 'styled-components/macro';
import CartTitle from './CartTitle';
import CartList from './CartList';
import React, { useContext } from 'react';
import { shape, number, string } from 'prop-types';

const CartContext = React.createContext();
  
export const CartProvider = ({ value, children }) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};

CartProvider.prototype = {
  value: shape({
    title: string,
    products: shape({
      id: string,
      photo: string,
      name: string,
      price: number,
      amount: number,
      maxAmount: number,
    }),
    totalPrice: number,
  })
};

export const useCarts = () => {
  const value = useContext(CartContext);

  if (!value) {
    throw new Error(
      'useCarts 훅은 CartProvider 컴포넌트 내부에서만 사용 가능합니다.'
    );
  }
  return value;
};

export function Cart({ title, onUpdate }) {
  return (
    <Container>
      <CartTitle>{title}</CartTitle>
      <CartList onUpdate={onUpdate} />
    </Container>
  );
};

/* -------------------------------------------------------------------------- */

const Container = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  margin: 60px auto;
  padding: 30px;
  background: #fff;

  @media (min-width: 50em) {
    border: 6px solid #232323;
    border-radius: 12px;
    box-shadow: 0 9px 7px rgba(0, 0, 0, 0.2);
  }
`;
