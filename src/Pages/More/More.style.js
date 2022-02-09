import styled from "styled-components";
import Colors from "../../Colors";
import { motion } from "framer-motion";
import FeatureBg from "../../assets/FeatureBg.png";
import FeatureBg2 from "../../assets/FeatureBg2.png";

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

    @media (max-width: 480px) {
        height: 120vh;
    }
`;

export const PartnerSection = styled.section``;

export const PartnerDiv = styled.div`
    width: 52rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;

    @media (max-width: 480px) {
        width: 25rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3.125rem;
        justify-content: center;
        align-content: center;

        img:nth-child(6) {
            width: 5.188rem;
        }
    }
`;

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

    @media (max-width: 480px) {
        border-radius: 2rem;
        flex-direction: column;
        width: 25rem;
        height: 31.25rem;
        align-items: center;
        padding-left: 0rem;
        background-image: url(${FeatureBg2});
        background-repeat: no-repeat;
        background-size: 90%;
        background-position: bottom center;
    }
`;

export const FeatureTitle = styled.h1`
    font-size: 3rem;
    font-weight: 400;
    color: ${Colors.second};
    display: flex;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;

    @media (max-width: 480px) {
        width: 25rem;
        font-size: 2rem;
        text-align: center;
    }
`;

export const WrapperFeatureTitle = styled.div`
    height: 15.5rem;
    width: 31rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 480px) {
        width: 20rem;
        align-items: center;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    height: 14vh;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
`;

export const WrapperFooter = styled.div`
    width: 55rem;
    height: auto;
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
