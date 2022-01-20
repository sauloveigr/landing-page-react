import React from "react";
import styled from "styled-components";
import SectionText from "../Components/SectionText";
import SectionTitle from "../Components/SectionTitle";
import featuresFirst from "../assets/featuresFirst.png";
import featuresSecond from "../assets/featuresSecond.png";
import { WrapperSubtitle } from "../Components/WrapperSubtitle";
import Colors from "../Colors";
import VectorFood from "../assets/icons/VectorFood.png";

function Product() {
    return (
        <div>
            <ProductSection>
                <SectionTitle>FEATURES</SectionTitle>

                <WrapperSubtitle>
                    <SectionText>
                        Most calendars are designed for teams. Slate is designed
                        for freelancers who want a simple way to plan their
                        schedule.
                    </SectionText>
                </WrapperSubtitle>

                <WrapperContent>
                    <WrapperImage>
                        <FirstImage />
                        <SecondImage />
                    </WrapperImage>
                    <FeaturesDiv>

                    <Feature></Feature>
                    <Feature></Feature>
                    <Feature></Feature>
                    </FeaturesDiv>
                </WrapperContent>
            </ProductSection>
        </div>
    );
}

export default Product;

export const ProductSection = styled.section`
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
    justify-content: space-between;
`;

export const FeaturesTitle = styled.h1`
    color: ${Colors.second};
    font-size: 1.25rem;
    margin-left: 0.938rem;
`;

export const FeaturesImg = styled.img.attrs({ src: VectorFood })`
    width: 1.625rem;
`;

export const FeaturesText = styled.p`
    font-size: 1rem;
    color: ${Colors.second};
    margin: 0;
`;

export function Feature(props) {
    return (
        <div>
            <FeaturesDiv>
                <FeaturesDivTitle>
                    <FeaturesImg></FeaturesImg>
                    <FeaturesTitle>A single source of truth</FeaturesTitle>
                </FeaturesDivTitle>
                <FeaturesText>
                    When you add work to your Slate calendar we automatically
                    calculate useful insights
                </FeaturesText>
            </FeaturesDiv>
        </div>
    );
}
