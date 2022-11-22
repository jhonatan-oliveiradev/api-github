import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import githubLogo from '../../assets/images/github-logo.svg';

import { Container, Form, Input, Logo, Title, Button } from './styles';

const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt="Github Logo" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="Busque um usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;
