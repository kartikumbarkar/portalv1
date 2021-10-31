import React,{useState} from 'react'
import { MainContainer,MainBg,VideoBg,MainBtnWrapper,MainContent,MainH1,MainP,ArrowForward,ArrowRight } from './mainelements'
import video from '../../videos/video.mp4'
import{Button} from '../ButtonElements'
const Main = () => {
    const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }
    return (
        <MainContainer id="Home">
            <MainBg>
                <VideoBg autoPlay loop muted src={video} types='videos/mp4'/>
            </MainBg>
            <MainContent>
        <MainH1> Mini Project</MainH1>
        <MainP>Sign up for a new account today and register for new courses</MainP>
        <MainBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </MainBtnWrapper>
      </MainContent>
        </MainContainer>
    )
}

export default Main
