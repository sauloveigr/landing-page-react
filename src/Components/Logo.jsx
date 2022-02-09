import styled from "styled-components";
import LogoSrc from "../assets/logo.png";

const Logo = styled.img.attrs({ src: LogoSrc })`
    width: 11.625rem;
    height: auto;

    @media (max-width: 480px) {
        margin-left: 2rem;
        width: 10rem;
    }
`;

export default Logo;
