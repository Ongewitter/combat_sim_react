import { useState } from "react";
import styled from 'styled-components';

function DropdownMenu({children}) {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleMenu(){
    if(showMenu){
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu(){
    setShowMenu(true);
  }

  function closeMenu(){
    setShowMenu(false);
  }

  return(
    <S.DropdownMenu>
      <S.DropdownToggle onClick={handleToggleMenu}>
        Show menu
      </S.DropdownToggle>
      
      { showMenu ? (
        <S.DropdownList>
          {children.map(child => <S.DropdownListButton onClick={closeMenu} />)}
        </S.DropdownList>
      ) : ('')
      }
    </S.DropdownMenu>
  )
}

export default DropdownMenu;

const S = {};
S.DropdownMenu = styled.div`
  text-align: center;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
S.DropdownToggle = styled.button``
S.DropdownList = styled.div``
S.DropdownListButton = styled.button``
