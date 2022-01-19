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
                    <FeaturesImg></FeaturesImg>
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
    position: absolute;
`;

export const WrapperContent = styled.div`
    width: 68rem;
    height: 41rem;
    margin: 0 auto;
    margin-top: 1.8rem;
`;

export const FirstImage = styled.img.attrs({ src: featuresFirst })`
    width: 650px;
    height: auto;
`;

export const SecondImage = styled.img.attrs({ src: featuresSecond })`
    width: 400px;
    height: auto;
    position: absolute;
    bottom: 0;
    right: 0;
`;

export const WrapperFeatures = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    right: 40%;
`;
export const FeaturesDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`;

export const FeaturesDivTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FeaturesTitle = styled.h1`
    color: ${Colors.second};
    font-size: 1.25rem;
`;

export const FeaturesImg = styled.img.attrs({ src: VectorFood })`
`;

export const FeaturesText = styled.p``;

export function Feature(props) {
    return (
        <div>
            <FeaturesDiv>
                <FeaturesDivTitle>
                    <FeaturesTitle>{props.title}</FeaturesTitle>
                </FeaturesDivTitle>
            </FeaturesDiv>
        </div>
    );
}
