import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { MenuToggle } from "./MenuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  
  padding: 25px;
  
  font-size: 30px;

  display: flex;
  margin-bottom: 10px;
`;

const Marginer = styled.div`
  height: 2em;
  position: absolute;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link to='/'>Home</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/AboutUs">About Us</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/Projects">Projects</Link>
          </LinkItem>
          <LinkItem>
            <Link to='/Alumni'>Alumni</Link>
          </LinkItem>
          <LinkItem>
            <Link to='/Contact'>Contact</Link>
          </LinkItem>

          <Marginer />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
