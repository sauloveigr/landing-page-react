import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import pageVariants from "../PageTransition/PageVariants";
import pageTransition from "../PageTransition/PageTransition";
import SectionTitle from "../Components/SectionTitle";
import SectionText from "../Components/SectionText";
import Fibre from "../assets/fibre.png";
import Note from "../assets/note.png";
import Room from "../assets/room.png";
import Code from "../assets/code.png";
import { WrapperSubtitle } from "../Components/WrapperSubtitle";

const More = () => {
    return (
        <>
            <AnimatePresence>
                <MoreSection
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
                        <ImageGallery img="room" />
                        <ImageGallery img="code" />
                    </GalleryGrid>
                </MoreSection>
            </AnimatePresence>
        </>
    );
};

export default More;

export function ImageGallery({ img, ...props }) {
    const imageLib = {
        fibre: Fibre,
        note: Note,
        room: Room,
        code: Code,
    };

    return (
        <>
            <Image src={imageLib[img]} />
        </>
    );
}

export const MoreSection = styled(motion.section)`
    height: 84vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Gallery = styled.div`
    width: 62.5rem;
`;

export const Image = styled.img`
    width: 14.375rem;
    height: 18.125rem;
    border-radius: 0.75rem;
`;

export const GalleryGrid = styled.div`
    display: flex;
    justify-content: space-between;
    width: 62.5rem;
    margin-top: 2rem;
`;
