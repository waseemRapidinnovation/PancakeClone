import React from "react";
import * as styled from "./style";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

//-------------------------------------//
import HeroImage from "../../../assets/images/heroImg.webp";
import StatsIcon from "../../../assets/icons/statsicon.webp";
import BTCIcon from "../../../assets/icons/BTC.webp";
import CakeIcon from "../../../assets/icons/cake.webp";
import BNBIcon from "../../../assets/icons/BNB.webp";
import FolderIcon from "../../../assets/icons/folder.webp";
import PieIcon from "../../../assets/icons/pie.webp";
import GraphIcon from "../../../assets/icons/graph.webp";
import pancakecoin from "../../../assets/icons/pancakecoin.webp";
import TopLeft from "../../../assets/icons/top-left.webp";
import TopRight from "../../../assets/icons/top-right.webp";
import Bottom from "../../../assets/icons/bottom.webp";
import StartIcon1 from "../../../assets/icons/starticon1.webp";
import StartIcon2 from "../../../assets/icons/starticon2.webp";
import StartIcon3 from "../../../assets/icons/starticon3.webp";
import StartIcon4 from "../../../assets/icons/starticon4.webp";
import StartIcon5 from "../../../assets/icons/starticon5.webp";
import StartIcon6 from "../../../assets/icons/starticon6.webp";
import {
  SecondaryButton,
  Button,
} from "../../../shared/shared/sharedButtons/Button";

function Home() {
  return (
    <>
      {/* -------------------------Hero Secion------------------------------ */}
      <styled.MainSection>
        <styled.MainImgDiv>
          <styled.MainImg src={HeroImage} />
        </styled.MainImgDiv>
        <styled.MainTextColumn>
          <styled.MainPrimaryText>
            The moon is made of pancakes
          </styled.MainPrimaryText>
          <styled.MainSecondaryText>
            Trade, earn, and win crypto on the most popular decentralized
            platform in the galaxy.
          </styled.MainSecondaryText>
          <styled.ButtonDiv>
            <Button padding="24px 16px" marginRight="10px">
              Connect Wallet
            </Button>
            <SecondaryButton padding="24px 16px">Trade Now</SecondaryButton>
          </styled.ButtonDiv>
        </styled.MainTextColumn>
      </styled.MainSection>
      {/* -------------------------Stats Secion------------------------------ */}
      <styled.StatsSection>
        <styled.StatsImg src={StatsIcon} />
        <styled.StatsHeading>
          Used by millions Trusted with billions
        </styled.StatsHeading>
        <styled.StatsParagraph>
          PancakeSwap has the most users of any decentralized platform, ever.
          And those users are now entrusting the platform with over $4.3 billion
          in funds.
        </styled.StatsParagraph>
        <styled.StatsParagraph fontWeight="700">
          Will you join them?
        </styled.StatsParagraph>
        <styled.StatsCardsParent>
          <styled.StatsCard>
            <styled.CardText1>2.8 million</styled.CardText1>
            <PeopleOutlineIcon
              style={{ fontSize: "36px", color: "rgb(118, 69, 217)" }}
              className="card-icon"
            />
            <styled.CardText2>Users</styled.CardText2>
            <styled.StatsParagraph marginBottom="0px" textAlign="left">
              in the last 30 days
            </styled.StatsParagraph>
          </styled.StatsCard>
          <styled.StatsCard>
            <styled.CardText1>38 million</styled.CardText1>
            <SwapVerticalCircleIcon
              style={{ fontSize: "36px", color: "rgb(31, 199, 212)" }}
              className="card-icon"
            />
            <styled.CardText2 color="rgb(31, 199, 212)">
              Trades
            </styled.CardText2>
            <styled.StatsParagraph marginBottom="0px" textAlign="left">
              made in the last 30 days
            </styled.StatsParagraph>
          </styled.StatsCard>
          <styled.StatsCard>
            <styled.CardText1>4.3 billion</styled.CardText1>
            <LeaderboardOutlinedIcon
              style={{ fontSize: "36px", color: "rgb(237, 75, 158)" }}
              className="card-icon"
            />
            <styled.CardText2 color="rgb(237, 75, 158);">
              Staked
            </styled.CardText2>
            <styled.StatsParagraph marginBottom="0px" textAlign="left">
              Total Value Locked
            </styled.StatsParagraph>
          </styled.StatsCard>
        </styled.StatsCardsParent>
      </styled.StatsSection>
      {/* -------------------------GoToTrade Secion------------------------------ */}
      <styled.GoToTradeSection>
        <styled.CoinImgDiv>
          <styled.CoinsWrapper1>
            <styled.CoinImg1 src={CakeIcon} />
          </styled.CoinsWrapper1>
          <styled.CoinsWrapper2>
            <styled.CoinImg2 src={BTCIcon} />
          </styled.CoinsWrapper2>
          <styled.CoinsWrapper3>
            <styled.CoinImg3 src={BNBIcon} />
          </styled.CoinsWrapper3>
        </styled.CoinImgDiv>
        <styled.MainTextColumn>
          <styled.StatsHeading textAlign="left" IncreaseWidth="true">
            <styled.TradeSpan>Trade</styled.TradeSpan> anything. No
            registration,no hassle
          </styled.StatsHeading>
          <styled.StatsParagraph textAlign="left">
            Trade any token on BNB Smart Chain in seconds, just by connecting
            your wallet.
          </styled.StatsParagraph>
          <styled.ButtonDiv>
            <Button padding="24px 16px" marginRight="10px">
              Trade Now
            </Button>
            <SecondaryButton padding="24px 16px">Learn</SecondaryButton>
          </styled.ButtonDiv>
        </styled.MainTextColumn>
      </styled.GoToTradeSection>
      {/* -------------------------PassiveIncome Secion------------------------------ */}
      <styled.PassiveSection>
        <styled.CoinImgDiv>
          <styled.CoinsWrapper1>
            <styled.CoinImg1 src={PieIcon} />
          </styled.CoinsWrapper1>
          <styled.CoinsWrapper2>
            <styled.CoinImg2 src={GraphIcon} />
          </styled.CoinsWrapper2>
          <styled.CoinsWrapper3 ZIndex="10">
            <styled.CoinImg3 src={FolderIcon} />
          </styled.CoinsWrapper3>
        </styled.CoinImgDiv>
        <styled.MainTextColumn alignItems="flex-end">
          <styled.StatsHeading textAlign="left" IncreaseWidth="true">
            <styled.TradeSpan>Earn</styled.TradeSpan> passive income with
            crypto.
          </styled.StatsHeading>
          <styled.StatsParagraph textAlign="left">
            PancakeSwap makes it easy to make your crypto work for you.
          </styled.StatsParagraph>
          <styled.ButtonDiv>
            <Button padding="24px 16px" marginRight="10px">
              Trade Now
            </Button>
            <SecondaryButton padding="24px 16px">Learn</SecondaryButton>
          </styled.ButtonDiv>
        </styled.MainTextColumn>
      </styled.PassiveSection>
      <styled.LeaderBoardDiv>
        <styled.LeaderBoardContainer>
          <styled.LeadersHeading textAlign="left" IncreaseWidth="true">
            Top
            <styled.TradeSpan style={{ margin: "0 10px" }}>
              Syrup Pools
            </styled.TradeSpan>
            <CompareArrowsIcon style={{ color: "rgb(122, 110, 170)" }} />
          </styled.LeadersHeading>
          <styled.LeaderBoardGrid>
            <styled.StatsParagraph>
              <styled.SpanSmall>WZRD-BUSD LP</styled.SpanSmall>
              <br /> <styled.SpanBold>402.104%</styled.SpanBold> <br />
              APR
            </styled.StatsParagraph>
            <styled.StatsParagraph>
              <styled.SpanSmall>GMT-USDC LP</styled.SpanSmall>
              <br /> <styled.SpanBold>262.076%</styled.SpanBold> <br />
              APR
            </styled.StatsParagraph>
            <styled.StatsParagraph>
              <styled.SpanSmall>Stake CAKE - Earn ANKR</styled.SpanSmall>
              <br /> <styled.SpanBold>13.893%</styled.SpanBold> <br />
              APR
            </styled.StatsParagraph>
            <styled.StatsParagraph>
              <styled.SpanSmall>Stake CAKE - Earn ANKR</styled.SpanSmall>
              <br /> <styled.SpanBold>13.893%</styled.SpanBold> <br />
              APR
            </styled.StatsParagraph>
            <styled.StatsParagraph style={{ border: "none" }}>
              <styled.SpanSmall>Stake CAKE - Earn GAL</styled.SpanSmall>
              <br /> <styled.SpanBold>13.538%</styled.SpanBold> <br />
              APR
            </styled.StatsParagraph>
          </styled.LeaderBoardGrid>
        </styled.LeaderBoardContainer>
      </styled.LeaderBoardDiv>
      {/* -------------------------BuyCake Secion------------------------------ */}
      <styled.GoToTradeSection PaddingBottom="10px">
        <styled.CoinImgDiv>
          <styled.CoinsWrapper1>
            <styled.CoinImg1 src={pancakecoin} />
          </styled.CoinsWrapper1>
          <styled.CoinsWrapper2 ZIndex="10">
            <styled.CoinImg2 src={TopLeft} />
          </styled.CoinsWrapper2>
          <styled.CoinsWrapper3>
            <styled.CoinImg3 src={TopRight} />
          </styled.CoinsWrapper3>
          <styled.CoinsWrapper3>
            <styled.CoinImg3 src={Bottom} />
          </styled.CoinsWrapper3>
        </styled.CoinImgDiv>
        <styled.MainTextColumn>
          <styled.StatsHeading textAlign="left" IncreaseWidth="true">
            <styled.TradeSpan>CAKE</styled.TradeSpan> makes our world go round.
          </styled.StatsHeading>
          <styled.StatsParagraph textAlign="left">
            CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win
            it, farm it, spend it, stake it... heck, you can even vote with it!
          </styled.StatsParagraph>
          <styled.ButtonDiv>
            <Button padding="24px 16px" marginRight="10px">
              Buy Cake
            </Button>
            <SecondaryButton padding="24px 16px">Learn</SecondaryButton>
          </styled.ButtonDiv>
        </styled.MainTextColumn>
      </styled.GoToTradeSection>
      <styled.BuyCakeDiv>
        <styled.BuyCakeContainer>
          <styled.LeaderBoardGrid>
            <styled.StatsParagraph FontSize="20px">
              Total supply
              <br />{" "}
              <styled.SpanBold FontSize="22px">296,240,510</styled.SpanBold>
            </styled.StatsParagraph>
            <styled.StatsParagraph>
              Burned to date
              <br />{" "}
              <styled.SpanBold FontSize="22px">453,055,054</styled.SpanBold>
            </styled.StatsParagraph>
            <styled.StatsParagraph FontSize="20px">
              Market cap
              <br />{" "}
              <styled.SpanBold FontSize="22px">$1.3 billion</styled.SpanBold>
            </styled.StatsParagraph>
            <styled.StatsParagraph FontSize="20px" style={{ border: "none" }}>
              Current emissions
              <br />{" "}
              <styled.SpanBold FontSize="22px">14.25/block</styled.SpanBold>
            </styled.StatsParagraph>
          </styled.LeaderBoardGrid>
        </styled.BuyCakeContainer>
      </styled.BuyCakeDiv>

      {/* -------------------------Start Secion------------------------------ */}

      <styled.StartSection>
        <styled.StartLeftDiv>
          <styled.StartIcon1Img src={StartIcon3} ZIndex="5" />
          <styled.StartIcon2Img src={StartIcon2} />
          <styled.StartIcon3Img src={StartIcon1} />
        </styled.StartLeftDiv>
        <styled.StartMiddleDiv>
          <styled.StartPrimaryText>Start in seconds.</styled.StartPrimaryText>
          <styled.StartSecondaryText>
            Connect your crypto wallet to start using the app in seconds.
            <br />{" "}
            <styled.SpanBold Color="white">
              No registration needed.
            </styled.SpanBold>
          </styled.StartSecondaryText>
          <styled.StartSecondaryText>
            <styled.SpanBold Color="rgb(31, 199, 212)">
              Learn how to start
            </styled.SpanBold>
          </styled.StartSecondaryText>
          <Button padding="24px 16px">Connect Wallet</Button>
        </styled.StartMiddleDiv>
        <styled.StartLeftDiv>
          <styled.StartIcon4Img src={StartIcon5} />
          <styled.StartIcon5Img src={StartIcon4} />
          <styled.StartIcon6Img src={StartIcon6} />
        </styled.StartLeftDiv>
      </styled.StartSection>
    </>
  );
}

export default Home;
