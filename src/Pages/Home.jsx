import React from "react";
import styled from "styled-components";
import homeBackground from "../assets/homeBackground.png";
import BlackButton from "../Components/BlackButton";
import PurpleButton from "../Components/PurpleButton";
import SectionText from "../Components/SectionText";
import { WrapperSubtitle } from "../Components/WrapperSubtitle";

function Home() {
    return (
        <div>
            <HomeSection>
                <WrapperDiv>
                    <WrapperMainTitle>
                        <MainTitle>Work at the speed of thought</MainTitle>
                    </WrapperMainTitle>
                    <WrapperSubtitle>
                        <SectionText>
                            Most calendars are designed for teams. Slate is
                            designed for freelancers who want a simple way to
                            plan their schedule.
                        </SectionText>
                    </WrapperSubtitle>
                    <WrapperButton>
                        <PurpleButton>Try For Free</PurpleButton>
                        <BlackButton>Learn More</BlackButton>
                    </WrapperButton>
                </WrapperDiv>
            </HomeSection>
        </div>
    );
}

export default Home;

export const HomeSection = styled.section`
    background-image: url(${homeBackground});
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: 10.969rem;
    height: 89vh;
`;

// export const GradientDiv = styled.div`
//     width: 100%;
//     height: 50%;
//     position: absolute;
//     /* top: 912px; */
//     /* z-index: 1; */
//     /* background-image: linear-gradient(to top, #1414149c 25%, 75%, rgba(0, 0, 0, 0)); */
//     opacity: 0.1;
// `;

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
    color: white;
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
