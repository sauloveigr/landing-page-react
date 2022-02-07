import styled from "styled-components";
import featuresFirst from "../../assets/featuresFirst.png";
import featuresSecond from "../../assets/featuresSecond.png";
import Colors from "../../Colors";
import { motion } from "framer-motion";

export const FeaturesImg = styled.img.attrs((props) => ({ src: props.src }))`
    width: 1.625rem;
`;

export const ProductSection = styled(motion.section)`
    height: 84vh;
    align-items: center;

    @media (max-width: 480px) {
        width: 34.313rem;
    }
`;

export const WrapperImage = styled.div`
    width: 42rem;
    height: 41rem;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background-color: #202020; */
        height: 25.375rem;
        width: 23.5rem;
        margin-bottom: 7rem;
    }
`;

export const WrapperContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 68rem;
    height: 41rem;
    margin: 0 auto;
    margin-top: 2rem;

    @media (max-width: 480px) {
        margin-top: 0rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 23.625rem;
        height: 20rem;
    }
`;

export const FirstImage = styled.img.attrs({ src: featuresFirst })`
    width: 40.625rem;
    height: auto;

    @media (max-width: 480px) {
        width: 20.25rem;
    }
`;

export const SecondImage = styled.img.attrs({ src: featuresSecond })`
    width: 400px;
    height: auto;
    position: absolute;
    bottom: 1.875rem;
    right: 51.5rem;

    @media (max-width: 480px) {
        bottom: 16.4rem;
        right: 5.313rem;
        width: 14.375rem;
    }
`;

export const FeaturesDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    width: 16rem;
    height: 13.5rem;
`;

export const FeaturesDivTitle = styled.div`
    width: 12.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const FeaturesTitle = styled.h1`
    color: ${Colors.second};
    font-size: 1.25rem;
    margin-left: 0.938rem;
`;

export const FeaturesText = styled.p`
    font-size: 1rem;
    color: ${Colors.second};
    margin: 0;
`;
