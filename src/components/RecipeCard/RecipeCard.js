import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`

`;

const Image = styled.img`
    position: relative;
    width: 100%;
`;

const Name = styled(Link)`
    font-size: 1.4rem;
    background-color: var(--color-main);
    padding: 1rem 2rem;
    color: white;
`


const RecipeCard = ({recipe}) => {
    return (
        <Wrapper>
            <Image src={recipe.img} alt="recipe image" />
            <Name>{recipe.title}</Name>
            
        </Wrapper>
    )
}

export default RecipeCard;
