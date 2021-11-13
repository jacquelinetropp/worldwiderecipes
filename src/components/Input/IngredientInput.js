import { Field } from "formik";
import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Input from "./Input";

const Ingredient = styled.div`
  display: flex;
  margin: 1rem;
`;

const IngredientInput = ({index, remove}) => {
  return (
    <Ingredient>
      <Field type="number" name={`amount[${index}]`} placeholder="Amount" component={Input} />
      <Field as="select" name={`size[${index}]`}>
        <option value="select">Select</option>
        <option value="cup">cup</option>
        <option value="tbsp">tbsp</option>
      </Field>
      <Field
        type="text"
        name={`ingredients[${index}]`}
        placeholder="Ingredient name..."
        component={Input}
      />
    </Ingredient>
  );
};

export default IngredientInput;
