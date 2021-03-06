import GlobalStyle from "./globalStyles";
import Header from "./Components/Header";
import Logo from "./Components/Logo";
import NavBar from "./Components/NavBar";
import LoginButton from "./Components/LoginButton";
import NavLink from "./Components/Link";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Contents from "./Pages/Content/Contents";
import Gallery from "./Pages/Gallery/Gallery";
import More from "./Pages/More/More";
import { MenuLogo } from "./Components/MenuLogo";

function App() {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Header>
                    <Logo />
                    <NavBar>
                        <NavLink as={Link} to="/landing-page-react">
                            Home
                        </NavLink>
                        <NavLink as={Link} to="/landing-page-react/product">
                            Product
                        </NavLink>
                        <NavLink as={Link} to="/landing-page-react/contents">
                            Contents
                        </NavLink>
                        <NavLink as={Link} to="/landing-page-react/gallery">
                            Gallery
                        </NavLink>
                        <NavLink as={Link} to="/landing-page-react/more">
                            More
                        </NavLink>
                    </NavBar>
                    <LoginButton>Login</LoginButton>
                    <MenuLogo/>
                </Header>
                <Routes>
                    <Route path="/landing-page-react" element={<Home />} />
                    <Route
                        path="/landing-page-react/product"
                        element={<Product />}
                    />
                    <Route
                        path="/landing-page-react/contents"
                        element={<Contents />}
                    />
                    <Route
                        path="/landing-page-react/gallery"
                        element={<Gallery />}
                    />
                    <Route path="/landing-page-react/more" element={<More />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
