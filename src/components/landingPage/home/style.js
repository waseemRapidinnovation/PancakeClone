import styled from "styled-components";
import { keyframes } from "styled-components";

//---------------Main Section----------------------//
export const MainSection = styled.div`
  background-color: #e9f9ff;
  padding: 40px 20px 90px 20px;
  align-items: center;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 0,
    100% 43%,
    100% 89%,
    66% 90%,
    36% 95%,
    0 100%,
    0% 43%,
    0 0
  );
  clip-path: polygon(
    50% 0%,
    100% 0,
    100% 43%,
    100% 89%,
    66% 90%,
    36% 95%,
    0 100%,
    0% 43%,
    0 0
  );
  @media (min-width: 850px) {
    display: flex;
    flex-direction: row-reverse;
    padding: 40px 40px 90px 40px;
    justify-content: center;
    > * {
      flex: 1;
      max-width: 550px;
    }
  }
`;

export const MainImgDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const floating = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(10px, 10px); }
    100%   { transform: translate(0, -0px); }   
`;

export const MainImg = styled.img`
  width: 190px;
  margin-bottom: 24px;
  animation-name: ${floating};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  @media (min-width: 850px) {
    width: 100%;
    max-width: 600px;
  }
`;

export const MainTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: 850px) {
    align-items: ${(props) =>
      props.alignItems ? props.alignItems : "flex-start"};
  }
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 965px) {
    width: 400px;
  }
`;

export const MainPrimaryText = styled.h2`
  color: rgb(118, 69, 217);
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  @media (min-width: 850px) {
    font-size: 60px;
  }
`;

export const MainSecondaryText = styled.h3`
  color: rgb(40, 13, 95);
  margin-bottom: 26px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.1;
  @media (min-width: 850px) {
    font-size: 22px;
  }
`;

//---------------Stats Section----------------------//
export const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 100px 20px;
  background: linear-gradient(rgb(255, 255, 255) 22%, rgb(215, 202, 236) 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
`;

export const StatsImg = styled.img`
  width: 80px;
  margin-bottom: 16px;
`;

export const StatsHeading = styled(MainSecondaryText)`
  font-size: 26px;
  font-weight: 800;
  width: ${(props) => (props.IncreaseWidth ? "100%" : "330px")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  color: rgb(40, 13, 95);
  @media (min-width: 965px) {
    font-size: 40px;
    width: 400px;
  }
`;

export const StatsParagraph = styled(MainSecondaryText)`
  color: rgb(122, 110, 170);
  line-height: 1.5;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  font-size: ${(props) => (props.FontSize ? props.FontSize : "16px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  width: 90%;
  max-width: 600px;
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "26px"};
`;

export const StatsCardsParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 910px) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const StatsCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 280px;
  background: #fff;
  border-radius: 24px;
  margin-bottom: 26px;
  padding: 30px 20px;
  @media (min-width: 910px) {
    padding-top: 80px;
  }
`;

export const CardText1 = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  color: rgb(40, 13, 95);
  width: 85%;
  margin-bottom: 5px;
  @media (min-width: 950px) {
    font-size: 40px;
  }
`;

export const CardImg = styled.img`
  width: 60px;
`;

export const CardText2 = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  color: ${(props) => (props.color ? props.color : "rgb(118, 69, 217)")};
  width: 100%;
  margin-bottom: 30px;
  @media (min-width: 950px) {
    font-size: 40px;
  }
`;

//---------------GoToTrade Section----------------------//

export const GoToTradeSection = styled(MainSection)`
  background: #fff;
  padding: 40px 30px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  padding-bottom: ${(props) =>
    props.PaddingBottom ? props.PaddingBottom : "60px"};
  @media (min-width: 850px) {
    > * {
      max-width: 450px;
      padding-bottom: 0px;
    }
  }
`;

export const TradeSpan = styled.span`
  color: rgb(118, 69, 217);
`;

export const CoinImgDiv = styled.div`
  width: 100%;
  position: relative;
  height: 190px;
  margin-bottom: 16px;
  @media (min-width: 850px) {
    height: 500px;
  }
`;

export const CoinsWrapper1 = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  z-index: 4;
  width: fit-content;
`;

export const CoinsWrapper2 = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  right: 10px;
  z-index: ${(props) => (props.ZIndex ? props.ZIndex : "3")};
  width: fit-content;
`;
export const CoinsWrapper3 = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  right: 10px;
  z-index: ${(props) => (props.ZIndex ? props.ZIndex : "2")};
  width: fit-content;
`;

const floating2 = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(16px, 16px); }
    100%   { transform: translate(0, -0px); }   
`;

export const CoinImg1 = styled.img`
  width: 190px;
  margin-bottom: 24px;
  animation-name: ${floating2};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  @media (min-width: 850px) {
    width: 100%;
    max-width: 400px;
  }
`;
export const CoinImg2 = styled(CoinImg1)`
  animation-duration: 5s;
`;

export const CoinImg3 = styled(CoinImg1)`
  animation-duration: 4s;
`;

//---------------PassiveIncome Section----------------------//

export const PassiveSection = styled(MainSection)`
  background: #f1edf3;
  padding: 40px 30px;
  padding-bottom: 0;
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
  @media (min-width: 850px) {
    flex-direction: row;
    padding-bottom: 0px;
    > * {
      max-width: 450px;
    }
  }
`;

export const LeaderBoardDiv = styled.div`
  background: #f1edf3;
  padding: 40px 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 850px) {
    padding-top: 0;
    > * {
    }
  }
`;

export const LeaderBoardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  max-width: 900px;
  flex-direction: column;
  padding-bottom: 16px;
`;

export const LeadersHeading = styled(StatsHeading)`
  font-size: 22px;
  display: flex;
  align-items: center;
`;

export const LeaderBoardGrid = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
  > * {
    text-align: left;
    font-size: 14px;
  }
  @media (min-width: 775px) {
    display: flex;
    > * {
      padding-left: 20px;
      border-right: 0.5px solid grey;
      padding-bottom: 20px;
    }
  }
`;

export const SpanSmall = styled.span`
  font-size: 11px;
  color: rgb(118, 69, 217);
  font-weight: 800;
`;

export const SpanBold = styled.span`
  font-weight: 700;
  color: ${(props) => (props.Color ? props.Color : "#000")};
  font-size: ${(props) => (props.FontSize ? props.FontSize : "16px")};
`;

//---------------BuyCake Section----------------------//

export const BuyCakeGrid = styled(LeaderBoardGrid)`
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media (min-width: 775px) {
    display: flex;
    > * {
      border-right: 0.5px solid grey;
    }
  }
`;

export const BuyCakeContainer = styled(LeaderBoardContainer)`
  background: white;
  padding-bottom: 0;
  @media (min-width: 775px) {
  }
`;

export const BuyCakeDiv = styled(LeaderBoardDiv)`
  padding: 0 30px;
  background: white;
`;

//---------------Start Section----------------------//

export const StartSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6c3bcd;
  overflow: hidden;
  @media (min-width: 775px) {
    margin-top: 40px;
    > * {
    }
  }
`;
export const StartLeftDiv = styled.div`
  position: relative;
  flex: 1;
  height: 400px;
  display: none;
  @media (min-width: 850px) {
    max-width: 300px;
    display: flex;
  }
`;

export const StartIcon1Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  animation-name: ${floating2};
  width: 230px;
  padding: 0;
  z-index: ${(props) => (props.ZIndex ? props.ZIndex : "3")};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  @media (min-width: 850px) {
  }
`;

export const StartIcon2Img = styled(StartIcon1Img)`
  animation-duration: 4s;
`;
export const StartIcon3Img = styled(StartIcon1Img)`
  animation-duration: 2s;
`;

export const StartIcon4Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  animation-name: ${floating2};
  width: 230px;
  padding: 0;
  z-index: ${(props) => (props.ZIndex ? props.ZIndex : "3")};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  @media (min-width: 850px) {
  }
`;

export const StartIcon5Img = styled(StartIcon4Img)`
  animation-duration: 2s;
`;
export const StartIcon6Img = styled(StartIcon4Img)`
  animation-duration: 4s;
`;

export const StartMiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 30px;
  @media (min-width: 775px) {
    flex: 1.5;
    max-width: 600px;
  }
`;

export const StartPrimaryText = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  color: white;
  margin-bottom: 16px;
`;
export const StartSecondaryText = styled.h2`
  color: white;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  font-size: 16px;
  margin-bottom: 16px;
`;
