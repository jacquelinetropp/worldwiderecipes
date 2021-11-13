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
import firebase from "../../firebase/firebase";

const RecipeSchema = Yup.object().shape({
  title: Yup.string().required("The name of the recipe is required"),
  author: Yup.string().required("Please set author of recipe"),
  temperature: Yup.number().required().positive(),
});

const Wrapper = styled.div``;

const ImageDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;

const TempDiv = styled.div`
  display: flex;
  font-size: 2.5rem;
  margin-top: 1rem;
  white-space: nowrap;
  align-items: flex-start;
 
`;
const Instructions = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RecipeForm = ({ createRecipe, loading }) => {
  const [number, setNumber] = useState(1);
  const [step, setStep] = useState(1);

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleIngredientRemove = () => {   
      setNumber(number - 1);   
  };

  const handleInstructionRemove = () => {   
    setStep(step - 1);   
};

  //Image Upload
  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const storage = firebase.storage();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            alert("image successfully uploaded");
            setImageUrl(url);
          });
      }
    );
  };

  return (
    <Formik
      initialValues={{
        title: "",
        author: "",
        ingredients: [],
        amount: [],
        size: [],
        temperature: "",
        degrees: "f",
        instructions: [],
      }}
      validationSchema={RecipeSchema}
      onSubmit={async (values) => {
        console.log(values);
        await createRecipe(values, imageUrl);
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
            <ImageDiv>
              <Field
                type="file"
                name="image"
                placeholder="Recipe Image"
                component={Input}
                onChange={handleImage}
              />
              <Button
                recipe
                contain
                type="button"
                onClick={() => handleUpload()}
              >
                Upload
              </Button>
            </ImageDiv>
            {Array.from(Array(number)).map((c, index) => {
              return (
                <IngredientInput key={c} index={index}  />
              );
            })}
            <ButtonWrapper>
              <Button
                recipe
                type="button"
                onClick={() => handleIngredientRemove()}
                contain
              >
                Remove Last Ingredient
              </Button>
              <Button
                color="green"
                contain
                type="button"
                onClick={() => setNumber(number + 1)}
              >
                Add Ingredient
              </Button>
            </ButtonWrapper>
            <TempDiv>
              <h6>Oven should be set to: </h6>
              <Field
                type="number"
                name="temperature"
                placeholder="Oven temperature"
                component={Input}
              />
              <Field as="select" name="degrees">
                <option value="select">Select</option>
                <option value="f">F</option>
                <option value="c">C</option>
              </Field>
            </TempDiv>
            <Instructions>
              <h4>Instructions</h4>
              {Array.from(Array(step)).map((c, index) => {
                const stepNumber = index + 1;
                return (
                  <Field
                    type="text"
                    name={`instructions[${index}]`}
                    placeholder={`Instructions step ${stepNumber}`}
                    component={Input}
                  />
                );
              })}
              <ButtonWrapper>
                <Button
                  recipe
                  type="button"
                  onClick={() => handleInstructionRemove()}
                  contain
                >
                  Remove Last Instruction
                </Button>
                <Button
                  color="green"
                  contain
                  type="button"
                  onClick={() => setStep(step + 1)}
                >
                  Add Step
                </Button>
              </ButtonWrapper>
            </Instructions>
            <Button
              color="green"
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
  createRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
