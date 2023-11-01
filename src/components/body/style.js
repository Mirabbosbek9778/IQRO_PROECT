import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background: var(
    --secondary-gradient-blue,
    linear-gradient(180deg, #131a15 0%, #090b3a 100%)
  );
  color: white;
  display: flex;
  justify-content: center;
  padding: 71px 20px 30px 101px;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
`;

const Text = styled.h1`
  color: #fff;
  font-family: Gilroy, sans-serif;
  font-style: normal;
  font-weight: ${({ size }) => (size ? "600" : "800")};
  font-size: ${({ size }) => (size ? "24px" : "60px")};
  width: ${({ size }) => (size ? "600px" : "857px")};
  text-transform: ${({ size }) => (size ? "lowercase" : "")};
  line-height: ${({ size }) => (size ? "27px" : "68px")};
`;

const Main = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? "18px" : "84px")};
`;

const Button = styled.button`
  display: flex;
  width: 222px;
  padding: 24px 40px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 80px;
  background: #fff;
  color: var(--text-title, #2e2e2e);
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Gilroy, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 24px;
`;

const Item = styled.div`
  position: relative;
  left: 58px;
`;

export { Container, Wrapper, Text, Main, Content, Button, Item };
