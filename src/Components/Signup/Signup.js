import React,{useState} from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SignupElements'
import axios from 'axios'
import { useHistory } from "react-router-dom"
const Signup = () => {
  const history = useHistory()
  const [ user, setUser] = useState({
    name: "",
    email:"",
    password:"",
    cpassword: ""
})
const handleChange = e => {
  const { name, value } = e.target
  setUser({
      ...user,
      [name]: value
  })
}
const register = () => {
  const {name, email, password, cpassword } = user
  if( name  && email && password && (password === cpassword)){
      axios.post("http://localhost:9002/register", user)
      .then( res => {
          alert(res.data.message)
          history.push("/login")
          
      })
  } else {
      alert("invlid input")
  }
  
}
    return (
        <div className="register">
        {console.log("User", user)}
        <Container>
        <FormWrap>
          <Icon to='/'>portal</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign up to a new Account</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
                <FormInput htmlFor='name'name="name"value={user.fname} onChange={handleChange} required />
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email'name="email"value={user.email}onChange={handleChange} required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password'name="password"value={user.password}onChange={handleChange} required />
                <FormLabel htmlFor='for'>Confirm-Password</FormLabel>
                <FormInput htmlFor='password'name="cpassword"value={user.cpassword}onChange={handleChange} required />
              <FormButton type='submit'onClick={register}>Register</FormButton>
              <Text>or</Text>
              <FormButton type='button'onClick={() => history.push("/Signin")}>Signin</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
            
        </div>
    )
}

export default Signup
