import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";
import {
  MDBNavbarItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";

import styled from "styled-components";

const Container = styled.div`
display: flex;
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color:#black;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const Right = styled.div`
flex: 1;
padding: 20px;

`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;


const Footer = () => {
  return (
<Container>
        <Left>
        <hr />
          <Logo>Tour App</Logo>
          <Desc>
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <hr/>
          <Title>Useful Links</Title>
          <List>
          <MDBNavbarItem>
              <MDBNavbarLink href='/'>
                  <p className='header-text'>Home</p>
              </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
              <MDBNavbarLink href='/addTour'>
                  <p className='header-text'>Add Tour</p>
              </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='/dashboard'>
                <p className='header-text'>Dashboard</p>
            </MDBNavbarLink>
          </MDBNavbarItem>
         
          <MDBNavbarItem>
            <MDBNavbarLink href='/about'>
                <p className='header-text'>About</p>
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
              <MDBNavbarLink href='/service'>
                  <p className='header-text'>Service</p>
              </MDBNavbarLink>
          </MDBNavbarItem>      
        </List>
        </Center>
        <Right>
          <hr/>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +31 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact TourApp@gmail.com
          </ContactItem>
        </Right>
      </Container>
    );
  };  

export default Footer







  
 
  
      