/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
        <Menu>
          <MenuLink href="/sale">Sale</MenuLink>
          <MenuLink href="/new">New&nbsp;Releases</MenuLink>
          <MenuLink href="/men">Men</MenuLink>
          <MenuLink href="/women">Women</MenuLink>
          <MenuLink href="/kids">Kids</MenuLink>
          <MenuLink href="/collections">Collections</MenuLink>
        </Menu>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-black-transparent);
`

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 266px;
  height: 100%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  padding-right: 22px;
  overflow: auto;
`

const CloseButton = styled(UnstyledButton)`
  margin-left: auto;
  margin-right: -12px;
  margin-top: -12px;
  padding: 12px;
`

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  flex: 1;
  justify-content: center;
`

const MenuLink = styled.a`
  font-size: 1.125rem;
  line-height: 21px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const FooterLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: var(--weight-normal);
  line-height: 16px;
`

export default MobileMenu;
