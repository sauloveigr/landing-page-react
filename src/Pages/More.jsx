import styled from "styled-components";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import pageVariants from "../PageTransition/PageVariants";
import pageTransition from "../PageTransition/PageTransition";
import SectionTitle from "../Components/SectionTitle";
import { WrapperSubtitle } from "../Components/WrapperSubtitle";
import SectionText from "../Components/SectionText";
import Partner1 from "../assets/icons/partner1.png";
import Partner2 from "../assets/icons/partner2.png";
import Partner3 from "../assets/icons/partner3.png";
import Partner4 from "../assets/icons/partner4.png";
import Partner5 from "../assets/icons/partner5.png";
import Partner6 from "../assets/icons/partner6.png";
import FeatureBg from "../assets/FeatureBg.png";
import Colors from "../Colors";
import PurpleButton from "../Components/PurpleButton";

const More = () => {
    return (
        <>
            <AnimatePresence>
                <MoreArticle
                    initial="out"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    variants={pageVariants}
                >
                    <PartnerSection>
                        <SectionTitle>Partners</SectionTitle>
                        <WrapperSubtitle>
                            <SectionText>
                                We focus on ergonomics and meeting you where you
                                work. It's only a keystroke away.
                            </SectionText>
                        </WrapperSubtitle>
                        <PartnerDiv>
                            <Partners icon="partner1" />
                            <Partners icon="partner2" />
                            <Partners icon="partner3" />
                            <Partners icon="partner4" />
                            <Partners icon="partner5" />
                            <Partners icon="partner6" />
                        </PartnerDiv>
                    </PartnerSection>
                    <Feature>
                        <WrapperFeatureTitle>
                            <FeatureTitle>
                                OpenType features and Variable fonts
                            </FeatureTitle>
                            <PurpleButton>Try For Free</PurpleButton>
                        </WrapperFeatureTitle>
                    </Feature>
                    <Footer></Footer>
                </MoreArticle>
            </AnimatePresence>
        </>
    );
};

export default More;

export function Partners({ icon, ...props }) {
    const partnerLib = {
        partner1: Partner1,
        partner2: Partner2,
        partner3: Partner3,
        partner4: Partner4,
        partner5: Partner5,
        partner6: Partner6,
    };
    return (
        <>
            <PartnerIcon src={partnerLib[icon]} />
        </>
    );
}

export const MoreArticle = styled(motion.article)`
    height: 84vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PartnerSection = styled.section``;

export const PartnerDiv = styled.div`
    width: 52rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
`;

export const PartnerIcon = styled.img``;

export const Feature = styled.div`
    width: 75rem;
    height: 23rem;
    background-color: ${Colors.darkGrey};
    border-radius: 2rem;
    padding-left: 5.8rem;
    display: flex;
    text-align: left;
    align-items: center;
    background-image: url(${FeatureBg});
    background-repeat: no-repeat;
    background-size: 46%;
    background-position: right;
`;

export const FeatureTitle = styled.h1`
    font-size: 3.25rem;
    font-weight: 400;
    color: ${Colors.second};
    display: flex;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
`;

export const WrapperFeatureTitle = styled.div`
    height: 15.5rem;
    width: 31rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
`;

export const Footer = styled.footer`
    width: 100%;
    background-color: #202020;
    height: 15vh;
    position: absolute;
    bottom: 0;
`;
