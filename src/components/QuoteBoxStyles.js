import styled from "styled-components";

export const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 25px;
  }
`;

export const MainContainer = styled.div`
  background-color: #f5f5f5;
  display: inline-block;
  width: 800px;
  height: 60vh;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media only screen and (max-width: 768px) {
    height: 90vh;
    margin: 10px;
  }
`;

export const QuoteInfo = styled.blockquote`
  display: grid;
  grid-template-columns: 150px 1fr;
  justify-items: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.div`
  margin: 10px;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 1.3rem;
  font-family: "Noto Sans", sans-serif;
  color: ${({ color }) => color};

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Author = styled.h3`
  display: block;
  text-align: right;
  margin-bottom: 10px;
  font-size: 1.1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: ${({ color }) => color};
  font-size: 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 10px;
  }
`;

export const Tweet = styled.a``;

export const Button = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  color: #f5f5f5;
  cursor: pointer;
  font-size: 1rem;
  display: inline-block;
  width: 10%;
  position: absolute;
  bottom: 40px;
  right: 40px;
  background: ${({ background }) => background};

  @media only screen and (max-width: 768px) {
    width: 80px;
  }
`;
