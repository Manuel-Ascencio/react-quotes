import React from "react";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
import {
  MainContainer,
  QuoteInfo,
  Image,
  Text,
  Author,
  Tweet,
  Button,
} from "./QuoteBoxStyles";

function QuoteBox({ cita, author, image, change, color }) {
  return (
    <MainContainer>
      <FaQuoteLeft color={color} />
      <QuoteInfo>
        <Image image={image} />
        <Text color={color}>{cita}</Text>

        <Author color={color}> - {author}</Author>
      </QuoteInfo>
      <Tweet
        href="https://twitter.com/intent/tweet"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaTwitter color={color} title="Tweet this quote!" />
      </Tweet>
      <Button onClick={change} background={color}>
        Next
      </Button>
    </MainContainer>
  );
}

export default QuoteBox;
