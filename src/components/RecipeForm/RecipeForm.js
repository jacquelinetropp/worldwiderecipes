import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { StyledForm } from "../styles";
import Input from "../Input/Input";
import IngredientInput from "../Input/IngredientInput";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { createRecipe } from "../../store/recipes/recipeActions";

const RecipeSchema = Yup.object().shape({
  title: Yup.string().required("The name of the recipe is required"),
  author: Yup.string().required("Please set author of recipe"),
});

const Wrapper = styled.div``;

const RecipeForm = ({ createRecipe, loading }) => {
  const [number, setNumber] = useState(1);
  const handleRemove = (index) => {
      const list = [...number];
      list.splice(index, 1);
      setNumber(list);

  }
  return (
    <Formik
      initialValues={{
        title: "",
        author: "",
        ingredients: [],
        amount: [],
        size: [],
      }}
      validationSchema={RecipeSchema}
      onSubmit={async (values) => {
        console.log(values);
        await createRecipe(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Wrapper>
          <StyledForm>
            <Field
              type="text"
              name="title"
              placeholder="Recipe Title"
              component={Input}
            />
            <Field
            type="text"
            name="author"
            placeholder="Your Name"
            component={Input}
          />
            {Array.from(Array(number)).map((c, index) => {
              return <IngredientInput key={c} index={index} remove={handleRemove}/>;
            })}
            <Button type="button" onClick={() => setNumber(number + 1)}>
              Add Ingredient
            </Button>
            <Button
              loading={loading ? "Logging In..." : null}
              disabled={!isValid || isSubmitting}
              type="submit"
            >
              Create Recipe
            </Button>
          </StyledForm>
        </Wrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ recipe }) => ({
  loading: recipe.loading,
});

const mapDispatchToProps = {
  createRecipe
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
