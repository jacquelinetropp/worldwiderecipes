import styled from 'styled-components';
import { Form } from "formik";

export const MessageWrapper = styled.div`
  position: absolute;
  bottom: -15px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: center;
`;


export const FormWrapper = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid var(--color-second);
  padding: 5rem;
  border-radius: 15px;
  margin-top: 10rem;

  @media only screen and (max-width: 425px) {
    width: 75%;
  }
`;