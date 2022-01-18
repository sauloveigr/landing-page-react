import GlobalStyle from "./globalStyles";
import Header from "./Components/Header";
import Logo from "./Components/Logo";
import NavBar from "./Components/NavBar";
import LoginButton from "./Components/LoginButton";
import NavLink from "./Components/Link";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

function App() {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Header>
                    <Logo />
                    <NavBar>
                        <NavLink as={Link} to="/home">
                            Home
                        </NavLink>
                        <NavLink as={Link} to="/product">
                            Product
                        </NavLink>
                        <NavLink as={Link} to="/about">
                            About
                        </NavLink>
                        <NavLink as={Link} to="/contact">
                            Contact
                        </NavLink>
                    </NavBar>
                    <LoginButton>Login</LoginButton>
                </Header>
                <Home />
                <Product></Product>
            </Router>
        </>
    );
}

export default App;
