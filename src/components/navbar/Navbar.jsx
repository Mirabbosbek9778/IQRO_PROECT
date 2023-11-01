import Logo from "../../assets/logo/Logo";
import { Container, Content, Text, Wrapper } from "./style";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo />
          <Text>Услуги</Text>
        </Content>
        <Content gap="true">
          <Text>Как мы работаем</Text>
          <Text>Результат</Text>
          <Text>Заказать</Text>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
