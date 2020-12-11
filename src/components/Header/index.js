import React from 'react';
import { useLocation } from 'react-router-dom';
import {Menu, Image, Button, Icon} from 'semantic-ui-react';
import logo from '../../assets/images/logo.svg';

const Header = () => {
    const {pathname} = useLocation();

    return (
        <Menu secondary pointing>
            <Image src={logo} width={60}/>
            <Menu.Item style={{fontSize:24}}>Crud React JS</Menu.Item>
            {pathname === "/" && (<Menu.Item position="right">
                <Button primary basic icon>
                    <Icon name="add"></Icon>
                    Kategori
                </Button>
            </Menu.Item>)}
            {pathname === "/" && (<Menu.Item>
                <Button color="red" basic icon>
                    <Icon name="log out"></Icon>
                    Logout
                </Button>
            </Menu.Item>)}
        </Menu>
    );
};

export default Header;
