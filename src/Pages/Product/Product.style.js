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
`;

export const WrapperImage = styled.div`
    width: 42rem;
    height: 41rem;
`;

export const WrapperContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 68rem;
    height: 41rem;
    margin: 0 auto;
    margin-top: 2rem;
`;

export const FirstImage = styled.img.attrs({ src: featuresFirst })`
    width: 40.625rem;
    height: auto;
`;

export const SecondImage = styled.img.attrs({ src: featuresSecond })`
    width: 400px;
    height: auto;
    position: absolute;
    bottom: 1.875rem;
    right: 51.5rem;
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
