import styled from "styled-components";

const Header = styled.header`
    width: 68.75rem;
    height: 11vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;

    @media (max-width: 480px) {
        width: 34.375rem;
        height: 6.75rem;
        padding-left: 2.25rem;
        padding-right: 1rem;
    }
`;

export default Header;
