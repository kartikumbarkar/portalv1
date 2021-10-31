import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SignupElements'
const signup = () => {
    return (
        <>
        <Container>
        <FormWrap>
          <Icon to='/'>dolla</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign up to your account</FormH1>
              <FormLabel htmlFor='for'>FirstName</FormLabel>
                <FormInput htmlFor='name' required />
                <FormLabel htmlFor='for'>LastName</FormLabel>
                <FormInput htmlFor='name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
            
        </>
    )
}

export default signup
