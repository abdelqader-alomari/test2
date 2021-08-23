import React from 'react';
import Login from './Login'
import Nav from 'react-bootstrap/Nav'
class Header extends React.Component {
    render() {
        return (

            <div>
                <Login />

                <Nav >
                    <Nav.Item>
                        <Nav.Link href="/">Universities</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/favUni">Favorite Uni</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="./profile" >
                            Profile
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}
export default Header;
