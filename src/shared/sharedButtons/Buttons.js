import styled from "styled-components";

const Button = styled.button`
  border: 0px;
  border-radius: 16px;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 800;
  -webkit-box-pack: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 34px;
  padding: ${(props) => (props.padding ? props.padding : "0px 16px")};
  background-color: rgb(31, 199, 212);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0px")};
`;

export default Button;
