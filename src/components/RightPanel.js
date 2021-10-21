import React from "react";
import styled from 'styled-components';

function RightPanel({children}) {
  return (
    <S.RightPanelDiv>
      {children}
    </S.RightPanelDiv>
  );
}

export default RightPanel;

const S = {};
S.RightPanelDiv = styled.div`
  background-color: white;
  border: solid 2px black;
  border-radius: 2px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 33%;
  z-index: 2;
`;
