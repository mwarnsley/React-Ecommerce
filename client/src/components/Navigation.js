import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Heading, Image, Text } from 'gestalt';

const Navigation = () => {
    return (
        <Box
            alignItems="center"
            color="midnight"
            display="flex"
            height={70}
            justifyContent="around"
            padding={1}
            shape="roundedBottom"
        >
            <NavLink activeClassName="active" to="/signin">
                <Text color="white" size="xl">
                    Sign In
                </Text>
            </NavLink>
            <NavLink activeClassName="active" exact to="/">
                <Box alignItems="center" display="flex">
                    <Box height={50} margin={2} width={50}>
                        <Image
                            alt="BrewHaHa Logo"
                            naturalHeight={1}
                            naturalWidth={1}
                            src="./icons/logo.svg"
                        />
                    </Box>
                    <Heading color="orange" size="xs">
                        BrewHaHa
                    </Heading>
                </Box>
            </NavLink>
            <NavLink activeClassName="active" to="/signup">
                <Text color="white" size="xl">
                    Sign Up
                </Text>
            </NavLink>
        </Box>
    );
};

export default Navigation;
