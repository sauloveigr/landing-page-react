import styled from "styled-components";
import Colors from "../Colors";

const BlackButton = styled.button`
    width: 11.25rem;
    height: 4.063rem;
    border: 1px solid ${Colors.second};
    color: ${Colors.light};
    background-color: ${Colors.dark};
    font-size: 1.07rem;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        color: ${Colors.second};
        border: 1px solid ${Colors.first};
    }
`;

export default BlackButton;
