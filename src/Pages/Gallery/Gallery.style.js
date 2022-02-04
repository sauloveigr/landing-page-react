import styled from "styled-components";
import { motion } from "framer-motion";

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
