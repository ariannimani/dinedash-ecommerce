import { Button } from "components/buttons";
import { Price } from "components/elements";
import React from "react";
import {
  Bottom,
  Container,
  Description,
  Footer,
  Header,
  Image,
  Info,
  Title,
  Top,
} from "./ProductCard.styles";

const ProductCard = () => {
  return (
    <Container>
      <Header></Header>
      <Image src={require("assets/images/product/whopper.png")} alt="image" />
      <Footer>
        <Top>
          <Title>Whopper</Title>
          <Info>230ml, 234kcal</Info>
          <Description>
            Beef steak, wheat bun, pickles, cheese, onion, mustard, ketchup
          </Description>
        </Top>
        <Bottom>
          <Price type="secondary">4$</Price>
          <Button type="baseMedium">Add to card</Button>
        </Bottom>
      </Footer>
    </Container>
  );
};

export default ProductCard;
