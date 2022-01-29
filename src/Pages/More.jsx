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
import Map from "../assets/icons/map.png";
import Phone from "../assets/icons/phone.png";
import Facebook from "../assets/icons/facebook.png";
import Linkedin from "../assets/icons/linkedin.png";
import Twitter from "../assets/icons/twitter.png";
import FeatureBg from "../assets/FeatureBg.png";
import Colors from "../Colors";
import PurpleButton from "../Components/PurpleButton";
import FooterLink from "../Components/Link";
import { Link } from "react-router-dom";

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
                    <Footer>
                        <WrapperFooter>
                            <WrapperLinks>
                                <FooterUl>
                                    <FooterLi>
                                        <FooterLink
                                            as={Link}
                                            to="/landing-page-react"
                                        >
                                            Home
                                        </FooterLink>
                                        <FooterLink
                                            as={Link}
                                            to="/landing-page-react/product"
                                        >
                                            Product
                                        </FooterLink>
                                        <FooterLink
                                            as={Link}
                                            to="/landing-page-react/contents"
                                        >
                                            Contents
                                        </FooterLink>
                                        <FooterLink
                                            as={Link}
                                            to="/landing-page-react/gallery"
                                        >
                                            Gallery
                                        </FooterLink>
                                    </FooterLi>
                                </FooterUl>
                            </WrapperLinks>
                            <Contacts />
                        </WrapperFooter>
                    </Footer>
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

export function Contacts() {
    return (
        <>
            <WrapperContacts>
                <WrapperContact>
                    <Contact
                        icon="map"
                        text="7480 Mockingbird Hill undefined
                    "
                    />
                </WrapperContact>
                <WrapperContact>
                    <Contact icon="phone" text="(239) 555-0108" />
                </WrapperContact>
            </WrapperContacts>
            <WrapperSocial>
                <Social icon="facebook" />
                <Social icon="twitter" />
                <Social icon="linkedin" />
            </WrapperSocial>
        </>
    );
}

export function Contact({ icon, ...props }) {
    const iconLib = {
        map: Map,
        phone: Phone,
    };
    return (
        <>
            <ContactImg src={iconLib[icon]} />
            <ContactText>{props.text}</ContactText>
        </>
    );
}

export function Social({ icon, ...props }) {
    const iconLib = {
        twitter: Twitter,
        facebook: Facebook,
        linkedin: Linkedin,
    };
    return (
        <>
            <SocialImg src={iconLib[icon]} />
        </>
    );
}

export const WrapperSocial = styled.div`
    display: flex;
    width: 10.625rem;
    justify-content: space-between;
`;

export const SocialImg = styled.img`
    width: 2.188rem;
    height: 2.188rem;
    cursor: pointer;
`;

export const WrapperContacts = styled.div`
    width: 20rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const WrapperContact = styled.div`
    width: 20rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
`;

export const ContactText = styled.p`
    font-size: 0.8rem;
    color: ${Colors.second};
`;

export const ContactImg = styled.img`
    width: 2.188rem;
    height: 2.188rem;
    margin-right: 0.6rem;
`;

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
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
`;

export const PartnerIcon = styled.img``;

export const Feature = styled.div`
    width: 65rem;
    height: 20rem;
    margin-top: 3.8rem;
    background-color: ${Colors.darkGrey};
    border-radius: 2rem;
    padding-left: 5.8rem;
    display: flex;
    text-align: left;
    align-items: center;
    background-image: url(${FeatureBg});
    background-repeat: no-repeat;
    background-size: 45%;
    background-position: right bottom;
`;

export const FeatureTitle = styled.h1`
    font-size: 3rem;
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
    /* background-color: #202020; */
    height: 14vh;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WrapperFooter = styled.div`
    width: 55rem;
    height: auto;
    /* background-color: #303030; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
`;

export const WrapperLinks = styled.div`
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FooterUl = styled.ul`
    padding: 0;
`;
export const FooterLi = styled.li`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 5rem;
    row-gap: 1.5rem;
`;
