import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 8.125rem;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 36.4375rem;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.8);
  width: 100&;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 1.5rem;
  margin-right: 1.5rem;
  padding: 0 1.5rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.metalDark};
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  width: 5rem;
  height: 4rem;
  border: 3px solid ${(props) => props.theme.colors.text};
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.container};
  }
`;
