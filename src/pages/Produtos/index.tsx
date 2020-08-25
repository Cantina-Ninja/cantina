import React from 'react';
import Sidebar from '../../components/Sidebar';

const Produtos: React.FC = () => (
  <>
    <Sidebar isOpen pageWrapId="page-wrap" outerContainerId="root" />
    <div id="page-wrap">
      <h1>Olá, Produtos</h1>
    </div>
  </>
);

export default Produtos;
