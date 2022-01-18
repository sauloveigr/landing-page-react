import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../Components/SectionTitle';

function Product() {
    return (
        <div>
            <ProductSection>
                <SectionTitle>
                    TESTE
                </SectionTitle>
            </ProductSection>
        </div>
    )
}

export default Product;

const ProductSection = styled.section`
    height: 89vh;
`