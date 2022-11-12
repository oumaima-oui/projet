import React from 'react';
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;



const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 84%;
  width: 50vw;
  flex: 1;
`;

const Image = styled.img`
  height: 90%;
  width: 1900px;
  position:"fixed";
  overflow:"hidden";
  top:"0";
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;
const Slider = () => {
    
  return (
    <Container>
        <Wrapper >
            <Slide >
            <ImgContainer>
                <Image src='https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_1280.jpg'  />
            </ImgContainer>
            <InfoContainer>
                <Title>Tour App</Title>
                <Desc>Come and see a beautiful country</Desc>
            </InfoContainer>
            </Slide>
        </Wrapper>
  </Container>
  )
}

export default Slider