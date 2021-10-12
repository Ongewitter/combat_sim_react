import styled from 'styled-components';

const S = {};
S.Button = styled.button`
  text-align: center;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function Button({onClick, children}) {
  return(
    <S.Button onClick={() => onClick()}>
      {children}
    </S.Button>
  )
}

export default Button;
