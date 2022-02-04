import styled from "styled-components";
import Colors from "../Colors";

const BlackButton = styled.button`
    width: 8.688rem;
    height: 3.25rem;
    border: 1px solid white;
    color: white;
    background-color: #181818;
    font-size: 1.07rem;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        color: ${Colors.second};
        border: 1px solid ${Colors.first};
    }

    @media (max-width: 480px) {
        margin-right: 1rem;
    }
`;

export default BlackButton;
