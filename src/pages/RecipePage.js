import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getOneRecipe } from "../store/recipes/recipeActions";
import { useParams } from "react-router-dom";
import { degreeConversion } from "../utils/Conversions";

import {
  Wrapper,
  Image,
  InnerWrapper,
  Name,
  Main,
  Header,
  IngredientsList,
  InstructionsList,
  DescriptionBox,
} from "../components/styles/RecipePageStyles";

const RecipePage = ({
  recipe,
  getOneRecipe,
  loading,
  convertDegrees,
  measurements,
}) => {
  const { recipeid } = useParams();
  useEffect(() => {
    getOneRecipe(recipeid);
  }, []);

  let ingredientsContent;
  let instructionsContent;
  let list = [];
  const ingredientsList = () => {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      list.push(
        `${recipe.amount[i]} ${recipe.size[i]} ${recipe.ingredients[i]}`
      );
    }
  };

  if (loading || !recipe.ingredients) {
    ingredientsContent = <div>Loading...</div>;
  } else {
    ingredientsList();
    ingredientsContent = (
      <Fragment>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </Fragment>
    );
    instructionsContent = recipe.instructions.map((instruction, index) => {
      return <li key={index}>{instruction}</li>;
    });
  }

  let temperature;

  const convertRecipe = () => {
    if (measurements === "us" && recipe.degrees === "c") {
      const newNumber = Math.round(recipe.temperature * 1.8 + 32);
      temperature = `${newNumber}° F`;
    } else if (measurements === "metric" && recipe.degrees === "f") {
      const newNumber = Math.round((recipe.temperature - 32) / 1.8);
      temperature = `${newNumber}° C`;
    } else {
      temperature = `${recipe.temperature}° ${recipe.degrees}`;
    }
  };
  convertRecipe();

  return (
    <Wrapper>
      <Image>
        <img src={recipe.image} alt="recipe" />
      </Image>
      <InnerWrapper>
        <Name>{recipe.title}</Name>
        <Main>
          <DescriptionBox>
            <p>Cooking time: {recipe.cookingTime} minutes</p>
            <p>Serving Size: {recipe.serving}</p>
          </DescriptionBox>
          <hr />
          <Header>Description</Header>
          <p>{recipe.description}</p>
          <hr />
          <Header>Ingredients</Header>
          <IngredientsList>{ingredientsContent}</IngredientsList>
          <hr />
          <Header>Instructions</Header>

          <InstructionsList>
            <li>
              Preheat oven to {temperature}
              {instructionsContent}
            </li>
          </InstructionsList>
        </Main>
      </InnerWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ recipe, firebase }) => ({
  recipe: recipe.currentRecipe,
  loading: recipe.getRecipe.loading,
  measurements: firebase.profile.measurements,
});

const mapDispatchToProps = {
  getOneRecipe: getOneRecipe,
  convertDegrees: degreeConversion,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
