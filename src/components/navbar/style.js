import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background: var(
    --secondary-gradient-blue,
    linear-gradient(180deg, #131a15 0%, #090b3a 100%)
  );
  display: flex;
  color: white;
  padding: 56px 0 57px 100px;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  gap: 140px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => (gap ? "94px" : "100px")};
`;

const Text = styled.h1`
  color: var(--base-white, #fff);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

export { Container, Wrapper, Content, Text };
