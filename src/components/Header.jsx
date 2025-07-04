import { Box, HStack, Image, Menu,
    MenuButton,
    MenuList,
    MenuItem, useDisclosure, Button, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState} from "react";
import Logo from "../images/Header_Logo.png";
import {Link} from 'react-router-dom';
import { useScreenSize } from "../context/ScreenSizeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import { faBasketShopping, faHouse, faBars, faBowlFood, faTruck,faUser } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const headerRef = useRef(null);
    const [cartCount, setCartCount] = useState(0);
    const handleClick = () => {
        isOpen ? onClose() : onOpen();
    };
    const cartItems = useSelector(state => state.cart.cartItems);
    useEffect(() => {
        let prevScrollPos = window.scrollY;
        const threshold = 120;
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            if (!headerElement) return;

            if (currentScrollPos < threshold) {
                headerElement.style.transform = "translateY(0)";
            } else if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { page } = useScreenSize();
    const totalCount = (items) => {
        return items.reduce((total, item) => total + item.quantity, 0);
    };
    useEffect(() => {
        setCartCount(totalCount(cartItems));
        headerRef.current.style.transform = "translateY(0)";
    },[cartItems]);

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            color="#333333"
            background="#FFFFFF"
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            ref={headerRef}
            zIndex="modal"
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack py={2} justifyContent="space-between" alignItems="center">
                    <Menu isOpen={isOpen}>
                        <MenuButton
                            as={Button}
                            borderWidth='0px'
                            onMouseEnter={onOpen}
                            onMouseLeave={onClose}
                            onClick={(e) => {
                                // Check if the device is mobile
                                if (window.innerWidth <= 768) { // Assuming 768px is the breakpoint for mobile
                                    handleClick(e);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faBars} color="#333333" size="2x"/>
                        </MenuButton>
                        <MenuList
                            transition="opacity 0.3s ease-in-out, transform 0.3s ease-in-out"
                            transform={isOpen ? 'translateY(0)' : 'translateY(-10px)'}
                            paddingBottom={5}
                            color="#333333"
                            minWidth={{ base: '100vw', md: '400px' }}
                            onMouseEnter={onOpen}
                            onMouseLeave={onClose}
                            onClick={onClose}>
                            <Link to="/"><MenuItem borderRadius="lg" _hover={{color:"#EDEFEE", backgroundColor:"#495E57"}} backgroundColor={page === 'homepage' ? "#495E57" : null} color={page === 'homepage' ? "#FFFFFF" : null}><FontAwesomeIcon icon={faHouse} size="1x"/>&nbsp;Homepage</MenuItem></Link>
                            <Link to="/reservation"><MenuItem borderRadius="lg" _hover={{color:"#EDEFEE", backgroundColor:"#495E57"}} backgroundColor={page === 'reservation' ? "#495E57" : null} color={page === 'reservation' ? "#FFFFFF" : null}><FontAwesomeIcon icon={faBowlFood} size="1x"/>&nbsp;Reserve a Table</MenuItem></Link>
                            <Link to="/order-online"><MenuItem borderRadius="lg" _hover={{color:"#EDEFEE", backgroundColor:"#495E57"}} backgroundColor={page === 'orderonline' ? "#495E57" : null} color={page === 'orderonline' ? "#FFFFFF" : null}><FontAwesomeIcon icon={faTruck} size="1x"/>&nbsp;Order Online</MenuItem></Link>
                            <Link to="/cart"><MenuItem borderRadius="lg" _hover={{color:"#EDEFEE", backgroundColor:"#495E57"}} backgroundColor={page === 'cart' ? "#495E57" : null} color={page === 'cart' ? "#FFFFFF" : null}><FontAwesomeIcon icon={faBasketShopping} size="1x"/>&nbsp;Cart</MenuItem></Link>
                            <Link to="/login"><MenuItem borderRadius="lg" _hover={{color:"#EDEFEE", backgroundColor:"#495E57"}} backgroundColor={page === 'login' ? "#495E57" : null} color={page === 'login' ? "#FFFFFF" : null}><FontAwesomeIcon icon={faUser} size="1x"/>&nbsp;Login</MenuItem></Link>
                        </MenuList>
                    </Menu>
                    <Link to="/"><Image src={Logo} width="160px" height="42px"fit="cover" draggable="false"/></Link>
                    <Link to="/cart">
                        <HStack px='10px'>
                            {cartCount > 0 ? (
                                <Text
                                color="#EDEFEE"
                                padding="0.1rem 0.45rem 0.2rem"
                                position="relative"
                                marginTop="-2rem"
                                marginRight="-1rem"
                                backgroundColor="#FC2063"
                                borderRadius="9px 8px 0px 9px"
                                fontSize={{ base: '0.6rem', md: '1rem' }}
                                fontWeight="bold"
                                >{cartCount}</Text>
                            ) : null}
                            <FontAwesomeIcon icon={faBasketShopping} color="#333333" size="2x"/>
                        </HStack>
                    </Link>
                </HStack>
            </Box>
        </Box>
    );
};

export default Header;