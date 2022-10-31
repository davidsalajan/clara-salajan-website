import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

const Background = styled.div`
  background-color: ${({ color }) => (color ? color : "#222")};
  width: 100%;
  height: 100%;
`;

const StyledLink = styled.a`
  color: #f649a7;
  text-decoration: none;
  text-shadow: 0 2px 3px rgba(246, 73, 167, 0.5);
  font-weight: 900;
  transition: all 0.3s ease-in;
  position: relative;
  font-family: Arial;
  font-size: 48px;
  cursor: pointer;

  &:hover {
    text-shadow: 0 2px 10px rgba(246, 73, 167, 0.9);

    &::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.15em;
    background-color: #f649a7;
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
    box-shadow: 0 2px 5px rgba(246, 73, 167, 0.6);
  }
`;

const Sidebar = styled.div`
  padding: 40px;
`;

const Row = styled.div`
  margin: 10px 0;
`;

const flicker = keyframes`
  0% {
    opacity: 0;
  }

  2% {
    opacity: 1;
  }

  3% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  15% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  35% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  60% {
    opacity: 0;
  }

  85% {
    opacity: 1;
  }

  94% {
    opacity: 0;
  }

  96% {
    opacity: 1;
  }

  98% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const StyledNeonLetter = styled.span`
  color: #222;
  text-decoration: none;
  text-shadow: 0 2px 3px rgba(255, 255, 255, 0.1);
  font-weight: 900;
  transition: all 0.3s ease-in;
  position: relative;
  font-family: Arial;
  font-size: 28px;
  cursor: pointer;
  animation: ${flicker} 4s infinite;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  transition: 0.3s ease-out;

  text-shadow: 0 2px 10px rgba(246, 73, 167, 0.9);

  border: 2px solid #f649a7;
`;

class NeonLetter extends React.PureComponent {
  render() {
    const { children } = this.props;

    return <StyledNeonLetter>{children}</StyledNeonLetter>;
  }
}

const StyledTypewriter = styled.span`
  display: flex;
  line-height: 1;
  flex-direction: column;
  height: 500px;
  margin: 0 5px;
  align-content: center;
  overflow: hidden;
`;

const randDelay = (min, max) => Math.random() * (max - min) + max;
const randString = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

class Typewriter extends React.Component {
  state = {
    pos: 0
  };

  updatePos = (delay) => {
    const { minDelay, maxDelay } = this.props;

    setTimeout(() => {
      const { pos } = this.state;
      this.setState({
        pos: pos + 1
      });

      if (pos < this.textLength) {
        this.updatePos(randDelay(minDelay, maxDelay));
      }
    }, delay);
  };

  componentDidMount() {
    const { children, delay } = this.props;
    const newDelay = delay ? delay : 0;

    setTimeout(() => {
      this.updatePos(0);
    }, newDelay);

    this.textLength = children.length;
  }

  render() {
    const { pos } = this.state;
    const { children } = this.props;

    return (
      <StyledTypewriter>
        {children
          .slice(0, pos)
          .split("")
          .map((char, i) => (
            <NeonLetter key={`${char}-${i}`}>{char}</NeonLetter>
          ))}
      </StyledTypewriter>
    );
  }
}

const StyledTypewriterContainer = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Sidebar>
          <Row>
            <StyledLink>Clara Salajan</StyledLink>
          </Row>
          <Row>
            <StyledLink>Clara Salajan</StyledLink>
          </Row>
          <Row>
            <StyledLink>Clara Salajan</StyledLink>
          </Row>
          <Row>
            <StyledLink>Clara Salajan</StyledLink>
          </Row>
          <Row>
            <StyledLink>Clara Salajan</StyledLink>
          </Row>
          <Row>
            <StyledLink>Clara Salajan</StyledLink>
          </Row>
          <StyledTypewriterContainer>
            <Typewriter delay={0} minDelay={100} maxDelay={100}>
              {randString()}
            </Typewriter>
            <Typewriter delay={500} minDelay={100} maxDelay={100}>
              {randString()}
            </Typewriter>
            <Typewriter delay={200} minDelay={100} maxDelay={100}>
              {randString()}
            </Typewriter>
            <Typewriter delay={800} minDelay={100} maxDelay={100}>
              {randString()}
            </Typewriter>
            <Typewriter delay={0} minDelay={100} maxDelay={100}>
              {randString()}
            </Typewriter>
            <Typewriter delay={100} minDelay={400} maxDelay={400}>
              {randString()}
            </Typewriter>
            <Typewriter delay={400} minDelay={100} maxDelay={100}>
              {randString()}
            </Typewriter>
            <Typewriter delay={1200} minDelay={100} maxDelay={100}>
              {randString()}
            </Typewriter>
            <Typewriter delay={900} minDelay={800} maxDelay={800}>
              {randString()}
            </Typewriter>
            <Typewriter delay={600} minDelay={50} maxDelay={50}>
              {randString()}
            </Typewriter>
            <Typewriter delay={100} minDelay={100} maxDelay={100}>
              {randString()}
            </Typewriter>
            <Typewriter delay={400} minDelay={100} maxDelay={100}>
              {randString()}
            </Typewriter>
          </StyledTypewriterContainer>
        </Sidebar>
      </Background>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
