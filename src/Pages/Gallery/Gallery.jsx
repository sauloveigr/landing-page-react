import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import pageVariants from "../../PageTransition/PageVariants";
import pageTransition from "../../PageTransition/PageTransition";
import SectionTitle from "../../Components/SectionTitle";
import SectionText from "../../Components/SectionText";
import Fibre from "../../assets/fibre.png";
import Note from "../../assets/note.png";
import Code from "../../assets/code.png";
import Pen from "../../assets/pen.png";
import Earth from "../../assets/earth.png";
import Plasma from "../../assets/plasma.png";
import Dev from "../../assets/dev.png";
import { WrapperSubtitle } from "../../Components/WrapperSubtitle";

const Gallery = () => {
    return (
        <>
            <AnimatePresence>
                <GallerySection
                    initial="out"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    variants={pageVariants}
                >
                    <SectionTitle>Gallery</SectionTitle>
                    <WrapperSubtitle>
                        <SectionText>
                            We focus on ergonomics and meeting you where you
                            work. It's only a keystroke away.
                        </SectionText>
                    </WrapperSubtitle>
                    <GalleryGrid>
                        <Image src={Note} />
                        <Image src={Fibre} />
                        <Image src={Code} />
                        <Image src={Pen} />
                    </GalleryGrid>
                    <GalleryGrid2>
                        <Image src={Earth} />
                        <Image src={Dev} />
                        <Image src={Plasma} />
                    </GalleryGrid2>
                </GallerySection>
            </AnimatePresence>
        </>
    );
};

export default Gallery;

export const Image = styled.img.attrs((props) => ({ src: props.src }))`
    width: 14.375rem;
    height: 18.125rem;
    border-radius: 0.75rem;
`;

export const GallerySection = styled(motion.section)`
    height: 84vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GalleryDiv = styled.div`
    width: 62.5rem;
`;

export const GalleryGrid = styled.div`
    display: grid;
    width: 62.5rem;
    margin-top: 2rem;
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const GalleryGrid2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 47rem;
    margin-top: 2rem;
    gap: 2rem;
`;
