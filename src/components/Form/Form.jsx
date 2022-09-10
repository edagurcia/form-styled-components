import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormButton,
  FormColumn,
  FormContainer,
  FormInput,
  FormInputRow,
  FormLabel,
  FormMessage,
  FormRow,
  FormSection,
  FormTitle,
  FormWrapper,
} from "./FormStyles";
import { Container } from "../../globalStyles";
import validateForm from "./validateForm";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const resultError = validateForm({
      name,
      email,
      password,
      confirmPassword,
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError(null);
    setSuccess("Application Submited");

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Name",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },
    {
      label: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },
    {
      label: "Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    },
    {
      label: "Confirm Password",
      value: confirmPassword,
      onChange: (e) => setConfirmPassword(e.target.value),
      type: "password",
    },
  ];

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn>
            <FormTitle>Sign Up</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput {...el} />
                </FormInputRow>
              ))}

              <FormButton type="submit">Sign Up</FormButton>
            </FormWrapper>

            {error && (
              <FormMessage
                variant={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}

            {success && (
              <FormMessage
                variant={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form;
