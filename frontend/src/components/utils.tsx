import styled from 'styled-components';

interface ContainerProps {
  aligment?: 'center' | 'baseline' | 'flex-end' | 'flex-start' | 'stretch';
  justify?: 'flex-end' | 'flex-start' | 'space-arround' | 'space-between';
}

export const FlexRow = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: ${(props) => props.aligment};
  justify-content: ${(props) => props.justify};
`;

export const FlexColumn = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: ${(props) => props.aligment};
  justify-content: ${(props) => props.justify};
`;
