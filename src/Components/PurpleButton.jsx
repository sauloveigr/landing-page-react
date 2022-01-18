import styled from "styled-components";

const PurpleButton = styled.button`
    width: 11.25rem;
    height: 4.063rem;
    border: 1px solid #4452fe;
    color: rgba(255, 255, 255, 0.7);
    background-color: #4452fe;
    font-size: 1.07rem;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        color: #fff;
        border: 1px solid #fff;
    }
`;

export default PurpleButton;
