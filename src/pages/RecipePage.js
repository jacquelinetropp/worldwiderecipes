import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getOneRecipe } from "../store/recipes/recipeActions";
import { useParams } from "react-router-dom";

const Wrapper = styled.div``;

const InnerWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  margin-top: -8rem;
  z-index: 3;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;
const Main = styled.div`
    width: 97%;
    float: right;
    box-shadow: 0 0 3rem rgba(0,0,0,0.2);
    padding: 1rem 5rem;
`
const Image = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const Name = styled.div`
  background-color: var(--color-secondLight);
  padding: 3rem;
  font-size: 5rem;
  color: white;
  box-shadow: 0 0 2rem rgba(0,0,0,0.2);
`;

const Header = styled.h6`
    color: var(--color-mainDark);
    font-size: 1.8rem;
`

const RecipePage = ({ recipe, getOneRecipe }) => {
  const { recipeid } = useParams();
  useEffect(() => {
    getOneRecipe(recipeid);
  }, []);

  return (
    <Wrapper>
      <Image>
        <img src={recipe.image} alt="recipe" />
      </Image>
      <InnerWrapper>
        <Name>{recipe.title}</Name>
        <Main>
            <Header>Description</Header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Porta nibh venenatis cras sed felis eget velit. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Adipiscing enim eu turpis egestas. Ut placerat orci nulla pellentesque dignissim enim sit amet. Imperdiet sed euismod nisi porta lorem. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Elit duis tristique sollicitudin nibh sit amet. Eget</p>
            <hr/>
            <Header>Ingredients</Header>
        </Main>
      </InnerWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ recipe }) => ({
  recipe: recipe.currentRecipe,
});

const mapDispatchToProps = {
  getOneRecipe: getOneRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
