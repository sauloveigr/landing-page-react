import styled from "styled-components";
import Menu from "../assets/icons/menu.png";

export const MenuLogo = styled.img.attrs({ src: Menu })`
    width: 4.125rem;
    display: none;

    @media (max-width: 480px) {
        display: inline;
    }
`;
