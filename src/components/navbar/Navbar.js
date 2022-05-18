import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PaidIcon from "@mui/icons-material/Paid";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InterestsIcon from "@mui/icons-material/Interests";
//-------//
import * as styled from "./style";
import pancakeLogo from "../../assets/icons/pancakelogo.png";
import Button from "../../shared/shared/sharedButtons/Button";

function Navbar() {
  return (
    <>
      <styled.NavbarWrapper>
        <styled.NavLinksDiv>
          <styled.NavLogo src={pancakeLogo} />
          <styled.HeaderTitle>PancakeSwap</styled.HeaderTitle>
          <styled.Links>Trade</styled.Links>
          <styled.Links>Earn</styled.Links>
          <styled.Links>Win</styled.Links>
          <styled.Links>NFT</styled.Links>
          <styled.Links>
            <MoreHorizIcon color="action" />
          </styled.Links>
        </styled.NavLinksDiv>

        <styled.NavConnectWalletDiv>
          <LanguageIcon color="action" />
          <SettingsIcon color="action" />
          <Button>Connect</Button>
        </styled.NavConnectWalletDiv>
      </styled.NavbarWrapper>
      {/* <styled.NavbarMobileTray>
        <styled.NavLinksDiv>
          <styled.Links>Trade</styled.Links>
          <styled.Links>Earn</styled.Links>
          <styled.Links>Win</styled.Links>
          <styled.Links>NFT</styled.Links>
          <styled.Links>
            <MoreHorizIcon color="action" />
          </styled.Links>
        </styled.NavLinksDiv>
      </styled.NavbarMobileTray> */}
    </>
  );
}

export default Navbar;
