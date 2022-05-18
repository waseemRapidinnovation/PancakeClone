import React from "react";
import * as styled from "./style";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

//---------------------------------------------------------//
import pancakeLogo from "../../assets/icons/pancakelogo.png";
import { Button } from "../../shared/shared/sharedButtons/Button";
import FooterLogo from "../../assets/icons/footerlogo.ico";

function Footer() {
  return (
    <styled.FooterWrapper>
      <styled.FooterContainer>
        <styled.FooterRow1>
          <styled.FooterPancakeIcon src={pancakeLogo} />
          <styled.FooterText1 FontSize="16px" Color="#fff">
            PancakeSwap
          </styled.FooterText1>
        </styled.FooterRow1>
        <styled.FooterRow2>
          <styled.FooterText1 Color="white" FontSize="16px">
            <styled.FooterIcons src={FooterLogo} width="30px" />
            $4.406
          </styled.FooterText1>
          <Button>Buy Cake</Button>
          <styled.FooterText2 FontSize="16px">
            <LanguageIcon style={{ color: "rgb(184, 173, 210)" }} />
            EN
          </styled.FooterText2>
        </styled.FooterRow2>
        <styled.FlexRowProperty>
          <styled.CustomFlex AlignItems="flex-start">
            <styled.FooterText1 MarginBottom="10px">About</styled.FooterText1>
            <styled.FooterText2>Contact</styled.FooterText2>
            <styled.FooterText2>Brand</styled.FooterText2>
            <styled.FooterText2>Blog</styled.FooterText2>
            <styled.FooterText2>Community</styled.FooterText2>
            <styled.FooterText2>Cake Token</styled.FooterText2>
            <styled.FooterText2>Online Store</styled.FooterText2>
          </styled.CustomFlex>
          <styled.CustomFlex AlignItems="flex-start">
            <styled.FooterText1 MarginBottom="10px">Help</styled.FooterText1>
            <styled.FooterText2>Custome Support</styled.FooterText2>
            <styled.FooterText2>Troubleshooting</styled.FooterText2>
            <styled.FooterText2>Guides</styled.FooterText2>
          </styled.CustomFlex>
          <styled.CustomFlex AlignItems="flex-start">
            <styled.FooterText1 MarginBottom="10px">
              Developers
            </styled.FooterText1>
            <styled.FooterText2>Github</styled.FooterText2>
            <styled.FooterText2>Documentation</styled.FooterText2>
            <styled.FooterText2>Bug Bounty</styled.FooterText2>
            <styled.FooterText2>Audits</styled.FooterText2>
            <styled.FooterText2>Careers</styled.FooterText2>
          </styled.CustomFlex>
        </styled.FlexRowProperty>

        <styled.CustomFlex
          FlexDirection="row"
          JustifyContent="flex-start"
          FooterIconsRow="true"
        >
          <TwitterIcon style={{ color: "rgb(184, 173, 210)" }} />
          <TelegramIcon style={{ color: "rgb(184, 173, 210)" }} />
          <RedditIcon style={{ color: "rgb(184, 173, 210)" }} />
          <InstagramIcon style={{ color: "rgb(184, 173, 210)" }} />
          <GitHubIcon style={{ color: "rgb(184, 173, 210)" }} />
          <FacebookIcon style={{ color: "rgb(184, 173, 210)" }} />
        </styled.CustomFlex>
      </styled.FooterContainer>
    </styled.FooterWrapper>
  );
}

export default Footer;
