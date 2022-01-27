import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import pageVariants from "../PageTransition/PageVariants";
import pageTransition from "../PageTransition/PageTransition";
import SectionTitle from "../Components/SectionTitle";
import SectionText from "../Components/SectionText";
import Fibre from "../assets/fibre.png";
import Note from "../assets/note.png";
import Code from "../assets/code.png";
import Pen from "../assets/pen.png";
import Earth from "../assets/earth.png";
import Plasma from "../assets/plasma.png";
import Dev from "../assets/dev.png";
import { WrapperSubtitle } from "../Components/WrapperSubtitle";

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
                        <ImageGallery img="note" />
                        <ImageGallery img="fibre" />
                        <ImageGallery img="code" />
                        <ImageGallery img="pen" />
                    </GalleryGrid>
                    <GalleryGrid2>
                        <ImageGallery img="earth" />
                        <ImageGallery img="dev" />
                        <ImageGallery img="plasma" />
                    </GalleryGrid2>
                </GallerySection>
            </AnimatePresence>
        </>
    );
};

export default Gallery;

export function ImageGallery({ img, ...props }) {
    const imageLib = {
        fibre: Fibre,
        note: Note,
        code: Code,
        pen: Pen,
        plasma: Plasma,
        earth: Earth,
        dev: Dev,
    };

    return (
        <>
            <Image src={imageLib[img]} />
        </>
    );
}

export const GallerySection = styled(motion.section)`
    height: 84vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GalleryDiv = styled.div`
    width: 62.5rem;
`;

export const Image = styled.img`
    width: 14.375rem;
    height: 18.125rem;
    border-radius: 0.75rem;
`;

export const BigImage = styled.img`
    width: 18rem;
    height: 18.125rem;
    border-radius: 0.75rem;
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
