import { Favorite, Tag } from "components/elements";
import {
  Container,
  Header,
  Image,
  Footer,
  Title,
  Buttons,
} from "./RestaurantCard.styles";

const RestaurantCard = () => {
  return (
    <Container>
      <Header>
        <Tag size="medium" variant="rating">
          5.0
        </Tag>
        <Favorite size="medium" favorite={false} />
      </Header>
      <Image
        src={require("assets/images/restaurant/sandwich.png")}
        alt="Image"
      />
      <Footer>
        <Title>City Sandwiched And Coffee</Title>
        <Buttons>
          <Tag size="small" type="secondary" variant="rating">
            5.0
          </Tag>
          <Tag size="small" type="secondary" variant="clock">
            20-30 minutes
          </Tag>
        </Buttons>
      </Footer>
    </Container>
  );
};

export default RestaurantCard;
