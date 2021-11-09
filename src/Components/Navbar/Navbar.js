import React from 'react'
import {FaBars} from'react-icons/fa';
import {Nav,NavBarContainer,NavLogo,Navitem,MobileIcon,NavMenu,NavLinks,NavBtn,NavBtnLink} from './NavbarElements'
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">
                        Portal
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <Navitem>
                            <NavLinks to="Home" >
                                Webinars
                            </NavLinks>
                        </Navitem>
                        <Navitem>
                            <NavLinks to="course">
                                Dashboard
                            </NavLinks>
                        </Navitem>
                        <Navitem>
                            <NavLinks to="Dashboard">
                                Courses
                            </NavLinks>
                        </Navitem>
                        <Navitem>
                            <NavLinks to='Signin'>
                                SignIn
                            </NavLinks>
                        </Navitem>
                    </NavMenu>
                    <NavBtn>
            <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
          </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )
};

export default Navbar
