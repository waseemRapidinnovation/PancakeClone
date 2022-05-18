import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #27262c;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #27262c;
  width: 100%;
  @media (min-width: 575px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: flex-start;
    padding: 40px;
    padding-bottom: 0;
    max-width: 1300px;
  }
`;

export const FooterPancakeIcon = styled.img`
  width: 20px;
`;

export const FooterRow1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  padding: 30px 20px;
  > * {
    margin-right: 5px;
  }
  @media (min-width: 575px) {
    grid-column: 4 / span 1;
    grid-row: 1 / span 2;
  }
`;

export const FooterRow2 = styled.div`
  padding: 20px 0;
  margin: 0 20px;
  border-top: 1px solid rgb(56, 50, 65);
  border-bottom: 1px solid rgb(56, 50, 65);
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  grid-template-rows: repeat(2, 1fr);
  > * {
  }
  @media (min-width: 575px) {
    grid-column: 1 / span 4;
    grid-row: 4 / span 1;
  }
`;

export const CustomFlex = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: ${(props) =>
    props.FlexDirection ? props.FlexDirection : "column"};
  justify-content: ${(props) =>
    props.JustifyContent ? props.JustifyContent : "center"};
  align-items: ${(props) => (props.AlignItems ? props.AlignItems : "center")};
  width: 100%;
  > * {
    margin-right: ${(props) => (props.FooterIconsRow ? "20px" : "0")};
  }
  @media (min-width: 575px) {
    grid-column: ${(props) => (props.FooterIconsRow ? "1/span 4" : "")};
    grid-row: ${(props) => (props.FooterIconsRow ? "3/span 1" : "")};
  }
`;

export const FlexRowProperty = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  @media (min-width: 575px) {
    flex-direction: row;
    grid-column: 1 / span 3;
    grid-row: 1 / span 2;
  }
`;

export const FooterText1 = styled.h2`
  color: ${(props) => (props.Color ? props.Color : "rgb(154, 106, 255);")};
  font-weight: 700;
  font-size: ${(props) => (props.FontSize ? props.FontSize : "16px")};
  display: flex;
  align-items: center;
  margin-bottom: ${(props) =>
    props.MarginBottom ? props.MarginBottom : "0px"};
`;

export const FooterText2 = styled.h2`
  color: white;
  font-weight: 600;
  font-size: ${(props) => (props.FontSize ? props.FontSize : "16px")};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

export const FooterIcons = styled.img`
  width: 30px;
  margin-right: 10px;
`;
