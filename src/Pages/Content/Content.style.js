import styled from "styled-components";
import Colors from "../../Colors";
import { motion } from "framer-motion";

export const AboutSection = styled(motion.section)`
    height: 89vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Card = styled.div`
    padding: 2.5rem 0;
    width: 29.75rem;
    min-height: 35.25rem;
    max-height: 35.25rem;
    background-color: ${Colors.second};
    border-radius: 0.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: 480px) {
        width: 21.75rem;
    }
`;

export const TitleCard = styled.h1`
    margin: 0;
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
`;

export const TextCard = styled.p`
    margin: 0;
    font-size: 1rem;
    color: ${Colors.grey};
    margin-bottom: 4.375rem;
`;

export const WrapperTextCard = styled.div`
    width: 18rem;
    padding: 0.625rem;
`;

export const CardImg = styled.img`
    width: auto;
    height: auto;
    margin-top: 3.563rem;

    @media (max-width: 480px) {
    width: 18rem;
    }
`;

export const WrapperCard = styled.div`
    width: 61.563rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        gap: 2.063rem;
        margin-top: 0;
        margin-bottom: 2rem;
    }
`;
