import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Formik, Field } from "formik";
import * as Yup from "yup";

import Input from "../components/Input/Input";
import Message from "../components/styles/Message";
import Button from "../components/Button/Button";
import { MessageWrapper, StyledForm, FormWrapper } from "../components/styles";

import { signUp } from "../store/user/userActions";

const TextWrapper = styled.div`
  margin-bottom: 2rem;
`;

const SignUpSchema = Yup.object().shape({
  groupName: Yup.string()
    .required("Your group name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  contactPerson: Yup.string()
    .required("Your contact person is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The passoword is required.")
    .min(8, "Too short"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password doesn't match`)
    .required("You need to confirm your password."),
});

const SignUp = ({ signUp, loading, error }) => {
  return (
    <Formik
      initialValues={{
        groupName: "",
        contactPerson: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values) => {
        await signUp(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <TextWrapper>
            <h1>Sign up for a group account</h1>
            <h4>Please keep one account per group</h4>
          </TextWrapper>

          <StyledForm>
            <Field
              type="text"
              name="groupName"
              placeholder="Your organization's name..."
              component={Input}
            />
            <Field
              type="text"
              name="contactPerson"
              placeholder="Person of contact..."
              component={Input}
            />
            <Field
              type="email"
              name="email"
              placeholder="Your email..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
              component={Input}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Re-type your password..."
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? "Signing Up" : null}
              type="submit"
            >
              Sign up
            </Button>
            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ user }) => ({
  loading: user.loading,
  error: user.error,
});

const mapDispatchToProps = {
  signUp: signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
