import React from "react";
import { AnimatePresence } from "framer-motion";
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

import {
    Image,
    GallerySection,
    GalleryGrid,
    GalleryGrid2,
} from "../Gallery/Gallery.style";

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
