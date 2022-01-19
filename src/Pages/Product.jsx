import React from "react";
import styled from "styled-components";
import SectionText from "../Components/SectionText";
import SectionTitle from "../Components/SectionTitle";
import { WrapperSubtitle } from "./Home";
import featuresFirst from "../assets/featuresFirst.png";
import featuresSecond from "../assets/featuresSecond.png";

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
    margin-top: 3rem;
`;

export const FirstImage = styled.img.attrs({ src: featuresFirst })`
    width: 650px;
    height: auto;
    position: absolute;
`;

export const SecondImage = styled.img.attrs({ src: featuresSecond })`
    width: 400px;
    height: auto;
    position: absolute;
    bottom: 0;
    right: 0;
`;
