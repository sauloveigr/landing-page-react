import styled from "styled-components";
import homeBackground from "../../assets/homeBackground.png";
import { motion } from "framer-motion";
import Colors from "../../Colors";

export const HomeSection = styled(motion.section)`
    background-image: url(${homeBackground});
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: center;
    height: 89vh;
`;

export const WrapperDiv = styled.div`
    width: 100%;
    height: 24.563rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const WrapperMainTitle = styled.div`
    width: 45.625rem;
    height: 12.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 1.25rem;
    margin-top: 5.313rem;
`;

export const MainTitle = styled.h1`
    color: ${Colors.second};
    font-size: 5rem;
    font-weight: 400;
    margin: 0;
`;

export const WrapperButton = styled.div`
    width: 25rem;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;
`;
