import React from "react";
import styled from "styled-components";
import backgroundImg from "../assets/screens.png";
import backgroundTest from "../assets/bgTest.png";

function Home() {
    return (
        <div>
            <HomeSection>
                <WrapperDiv>
                    <WrapperTitle>
                        <Title>Work at the speed of thought</Title>
                    </WrapperTitle>
                    <WrapperSubtitle>
                        <Subtitle>
                            Most calendars are designed for teams. Slate is
                            designed for freelancers who want a simple way to
                            plan their schedule.
                        </Subtitle>
                    </WrapperSubtitle>
                </WrapperDiv>
            </HomeSection>
        </div>
    );
}

export default Home;

export const HomeSection = styled.section`
    /* background-image: url(${backgroundImg}); */
    background-image: url(${backgroundTest});
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: 6.063rem;
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

export const WrapperTitle = styled.div`
    width: 45.625rem;
    height: 12.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 1.25rem;
    margin-top: 5.313rem;
`;

export const WrapperSubtitle = styled.div`
    width: 37.5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Title = styled.h1`
    color: white;
    font-size: 5rem;
    font-weight: 400;
    margin: 0;
`;

export const Subtitle = styled.h2`
    color: white;
    font-size: 1.25rem;
    font-weight: 200;
`;
