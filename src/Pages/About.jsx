import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import pageTransition from "../PageTransition/PageTransition";
import pageVariants from "../PageTransition/PageVariants";
import React from "react";
import SectionTitle from "../Components/SectionTitle";
import SectionText from "../Components/SectionText";
import PurpleButton from "../Components/PurpleButton";
import Colors from "../Colors";
import MacBookImg from "../assets/Macbook.png";
import BoardsImg from "../assets/Boards.png";
import { WrapperSubtitle } from "../Components/WrapperSubtitle";

const About = () => {
    return (
        <div>
            <AnimatePresence>
                <AboutSection
                    initial="out"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    variants={pageVariants}
                >
                    <SectionTitle>Contents</SectionTitle>

                    <WrapperSubtitle>
                        <SectionText>
                            We focus on ergonomics and meeting you where you
                            work. It's only a keystroke away.
                        </SectionText>
                    </WrapperSubtitle>

                    <WrapperCard>
                        <MainCard />
                        <MainCard />
                    </WrapperCard>
                </AboutSection>
            </AnimatePresence>
        </div>
    );
};

export default About;

export function MainCard() {
    return (
        <div>
            <Card>
                <WrapperTextCard>
                    <TitleCard>Work</TitleCard>
                    <TextCard>
                        Ever wondered if you're too reliant on a client for
                        work? Slate helps you identify.
                    </TextCard>
                </WrapperTextCard>
                <PurpleButton>Sign Up</PurpleButton>
                <MacBook />
            </Card>
        </div>
    );
}

export const AboutSection = styled(motion.section)`
    height: 89vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Card = styled.div`
    padding: 2.5rem 0;
    width: 29.75rem;
    background-color: ${Colors.second};
    border-radius: 0.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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

export const MacBook = styled.img.attrs({ src: MacBookImg })`
    width: 405px;
    height: auto;
    margin-top: 3.563rem;
`;

export const Boards = styled.img.attrs({ src: BoardsImg })`
    width: 405px;
    height: auto;
    margin-top: 3.563rem;
`;

export const WrapperCard = styled.div`
    width: 61.563rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
`;
