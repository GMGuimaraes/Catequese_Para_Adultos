import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  display: flex;
  background-color: #458080;
  box-shadow: 0 0 15px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;
