import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 7vh;
  background-color: ${props => props.theme.colors.header};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
