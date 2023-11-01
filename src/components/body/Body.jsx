import { Button, Container, Content, Item, Main, Text, Wrapper } from "./style";
import Iphone1 from "../../assets/images/iphone0.png";
import Iphone2 from "../../assets/images/iphone2.png";

const Body = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Content gap='true'>
            <Text>Разаработка сайтов и мобильных приложений</Text>
            <Text size='true'>
              Помогаем бизнесу увеличить прибыль с помощью digital-инструментов
            </Text>
          </Content>
          <Button>Обсудить проект</Button>
        </Content>
        <Main>
          <Item>
            <img src={Iphone1} />
          </Item>
          <div>
            <img src={Iphone2} />
          </div>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Body;
