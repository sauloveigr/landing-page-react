import styled from "styled-components";
import Colors from "../Colors";

const SectionTitle = styled.h1`
    font-size: 3.25rem;
    font-weight: 400;
    color: ${Colors.second};
    display: flex;
    justify-content: center;
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;

    @media (max-width: 480px) {
        margin-bottom: 1.688rem;
    }
`;

export default SectionTitle;
