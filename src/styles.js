import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieWrapper = styled.div`
  display: inline-block;
  padding: 20px;
  justify-contents: space-between;
  text-align: center;

  img {
    width: 150px;
  }
  p {
    display: block;
  }
`;
export const DetailWrapper = styled.div`
  display: flex;
  img {
    width: 400px;
    padding: 30px;
  }
  p {
    margin: 50px;
    display: flex;
  }
`;
export const MovieInfo = styled.div`
  margin-top: 70px;
`;

export const Back = styled(Link)`
  font-size: 20px;
  margin-left: 50px;
`;
