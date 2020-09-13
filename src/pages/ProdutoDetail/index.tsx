import React, { useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RiUser6Line, RiKey2Fill } from 'react-icons/ri';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Form, Container } from './styles';

const ProdutoDetail: React.FC = () => {
  const { id = '' } = useParams();
  const handleSubmit = useCallback(async (data: any) => {}, []);
  return (
    <Container>
      <header>{id ? 'Edição de produto' : 'Criar Produto'}</header>
      <Form onSubmit={handleSubmit}>
        <Input
          description="Nome do produto"
          name="nomeProduto"
          type="text"
          placeholder="Produto"
        />
        <Input
          description="Quantidade em estoque"
          name="qtdEstq"
          type="text"
          placeholder="00"
        />
        <Input
          description="Marca"
          name="nome"
          type="text"
          placeholder="Marca"
        />
        <Input
          description="Valor do produto"
          name="nome"
          type="text"
          placeholder="R$ 00,00"
        />
        <Input description="Data Validade" name="dtVld" type="Date" />

        <hr />

        <Button type="submit">
          {id ? 'Edição de produto' : 'Criar Produto'}
        </Button>
      </Form>
    </Container>
  );
};

export default ProdutoDetail;
