import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #6859ea;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 6px;
  color: #212e38;
  width: 100%;
  font-weight: 600;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.3, '#6859ea')};
  }
`;
