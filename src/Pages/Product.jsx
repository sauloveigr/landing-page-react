import React from "react";
import styled from "styled-components";
import SectionText from "../Components/SectionText";
import SectionTitle from "../Components/SectionTitle";
import featuresFirst from "../assets/featuresFirst.png";
import featuresSecond from "../assets/featuresSecond.png";
import { WrapperSubtitle } from "../Components/WrapperSubtitle";
import Colors from "../Colors";
import VectorFood from "../assets/icons/VectorFood.png";
import VectorET from "../assets/icons/VectorET.png";
import VectorInfinity from "../assets/icons/VectorInfinity.png";
import { AnimatePresence, motion } from "framer-motion";
import pageVariants from "../PageTransition/PageVariants";
import pageTransition from "../PageTransition/PageTransition";

function Product() {
    return (
        <div>
            <AnimatePresence>
                <ProductSection
                    initial="out"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    variants={pageVariants}
                >
                    <SectionTitle>Features</SectionTitle>

                    <WrapperSubtitle>
                        <SectionText>
                            Most calendars are designed for teams. Slate is
                            designed for freelancers who want a simple way to
                            plan their schedule.
                        </SectionText>
                    </WrapperSubtitle>

                    <WrapperContent>
                        <WrapperImage>
                            <FirstImage />
                            <SecondImage />
                        </WrapperImage>

                        <FeaturesDiv>
                            <Feature
                                icon="food"
                                title="A single source of truth"
                                text="When you add work to your Slate calendar we automatically calculate useful insights"
                            />
                            <Feature
                                icon="alien"
                                title="Intuitive interface"
                                text="When you add work to your Slate calendar we automatically calculate useful insights"
                            />

                            <Feature
                                icon="infinity"
                                title="Or with rules"
                                text="When you add work to your Slate calendar we automatically calculate useful insights"
                            />
                        </FeaturesDiv>
                    </WrapperContent>
                </ProductSection>
            </AnimatePresence>
        </div>
    );
}

export default Product;

export function Feature({ icon, ...props }) {
    const iconLib = {
        alien: VectorET,
        food: VectorFood,
        infinity: VectorInfinity
    };

    return (
        <div>
            <FeaturesDiv>
                <FeaturesDivTitle>
                    <FeaturesImg src={iconLib[icon]} />

                    <FeaturesTitle>{props.title}</FeaturesTitle>
                </FeaturesDivTitle>

                <FeaturesText>{props.text}</FeaturesText>
            </FeaturesDiv>
        </div>
    );
}

export const FeaturesImg = styled.img`
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
    margin-top: 1.8rem;
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

export const WrapperFeatures = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    right: 40%;
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
