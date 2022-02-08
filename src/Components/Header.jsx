import styled from "styled-components";

const Header = styled.header`
    width: 68.75rem;
    height: 11vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;

    @media (max-width: 500px) {
        width: 27rem;
        height: 6.688rem;
        padding: 0;
    }
`;

export default Header;
