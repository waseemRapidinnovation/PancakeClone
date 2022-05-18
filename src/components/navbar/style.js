import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
  border-bottom: 1px solid rgb(231, 227, 235);
  > * {
    flex: 1;
  }
`;
export const NavLinksDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavLogo = styled.img`
  max-width: 35px;
  padding: 4px 0;
  margin-right: 40px;
  @media (min-width: 960px) {
    margin-right: 12px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 800;
  display: none;
  margin-right: 40px;
  @media (min-width: 960px) {
    display: block;
  }
`;

export const Links = styled.h4`
  font-size: 16px;
  color: #7a6eaa;
  font-weight: 600;
  margin-right: 36px;
  display: none;
  @media (min-width: 640px) {
    display: flex;
  }
`;

export const NavConnectWalletDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
`;

export const NavbarMobileTray = styled.div`
  position: fixed;
  z-index: 12;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify: center;
  border: 2px solid red;
  > * {
    padding: 30px 20px;
    flex: 1;
    z-index: 15;
    border: 2px solid white;
  }
  @media (min-width: 575px) {
    display: none;
  }
`;
