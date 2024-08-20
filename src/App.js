import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./Contact";
function App() {
  const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    /* background-color: */
    width: 100%;
    overflow-x: hidden;
    height: 100%;
  `;
  const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  height: 100%;
`;
           

  return (
    <ThemeProvider theme={darkTheme} >
      <Navbar></Navbar>
      
      <Body>
        <Hero/>

          <Wrapper >
          
            <Skills />
            {/* <Experience/  > */}
            <Education />
            <Contact></Contact>
          </Wrapper>
      


      </Body>
   
    </ThemeProvider>
  );
}

export default App;
