import React from "react";
import SectionText from "../../Components/SectionText";
import SectionTitle from "../../Components/SectionTitle";
import { WrapperSubtitle } from "../../Components/WrapperSubtitle";
import VectorFood from "../../assets/icons/VectorFood.png";
import VectorET from "../../assets/icons/VectorET.png";
import VectorInfinity from "../../assets/icons/VectorInfinity.png";
import { AnimatePresence } from "framer-motion";
import pageVariants from "../../PageTransition/PageVariants";
import pageTransition from "../../PageTransition/PageTransition";
import {
    ProductSection,
    FeaturesImg,
    WrapperImage,
    FirstImage,
    SecondImage,
    FeaturesDiv,
    FeaturesDivTitle,
    FeaturesText,
    WrapperContent,
    FeaturesTitle,
} from "./Product.style";

function Product() {
    return (
        <>
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
                                src={VectorFood}
                                title="A single source of truth"
                                text="When you add work to your Slate calendar we automatically calculate useful insights"
                            />
                            <Feature
                                src={VectorET}
                                title="Intuitive interface"
                                text="When you add work to your Slate calendar we automatically calculate useful insights"
                            />

                            <Feature
                                src={VectorInfinity}
                                title="Or with rules"
                                text="When you add work to your Slate calendar we automatically calculate useful insights"
                            />
                        </FeaturesDiv>
                    </WrapperContent>
                </ProductSection>
            </AnimatePresence>
        </>
    );
}

export default Product;

export function Feature({ ...props }) {
    return (
        <>
            <FeaturesDiv>
                <FeaturesDivTitle>
                    <FeaturesImg src={props.src} />

                    <FeaturesTitle>{props.title}</FeaturesTitle>
                </FeaturesDivTitle>

                <FeaturesText>{props.text}</FeaturesText>
            </FeaturesDiv>
        </>
    );
}
