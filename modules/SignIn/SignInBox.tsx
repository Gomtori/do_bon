import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { Button } from '@mui/material'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'

import TextInput from '../../components/TextInput'

import { COLOR_SET } from '../../constants/colorSet'

const SignInBox = () => {
  const router = useRouter()

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Invalid email format')
      .max(255)
      .required('Required'),
    password: yup.string().max(255).required('Required'),
  })

  //TODO:: The logic of sending login data is needed and the alert should be removed
  const handleSignIn = (values: { email: string; password: string }) => {
    alert(`Hello, ${values.email}`)
    throw new Error('SignIn Logic is absent')
  }

  const handleForgetPwdBtn = () => {
    //TODO:: The router should be changed into the finding pwd page
    void router.push('/')
  }

  const handleSignUpBtn = () => {
    //TODO:: The router should be changed into the signup page
    void router.push('/')
  }

  return (
    <div>
      <Formik
        initialValues={{
          email: 'GomTori@dobon.com',
          password: 'gomtori@',
        }}
        validationSchema={validationSchema}
        //setSubmitting is used for the Ajax(you can check the status of Ajax)
        //to prevent send the form again in the middle of Ajax progress,
        //you can disable the button when 'isSubsetting' is true
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
          //send the login data
          handleSignIn(values)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form css={signBox}>
            <>Logo</>
            <TextInput
              placeholder="Email"
              name="email"
              label="email"
              id="outlined-required"
            />
            <TextInput
              placeholder="Password"
              name="password"
              label="password"
              id="outlined-required"
            />
            <div css={checkBox}>
              <input type="checkbox" id="remember_me" />
              <label form="remember_me" css={checkBoxLabel}>
                Remember Me
              </label>
            </div>
            <button
              css={forgetPwdBtn}
              type="button"
              onClick={handleForgetPwdBtn}
            >
              <span>Forget Your Password?</span>
            </button>
            <Button
              variant="contained"
              disabled={isSubmitting}
              type={'submit'}
              sx={{ backgroundColor: COLOR_SET.secondary }}
            >
              <span>Login</span>
            </Button>
          </Form>
        )}
      </Formik>
      <>
        <button css={signUp} type="button" onClick={handleSignUpBtn}>
          <span>Sign Up</span>
        </button>
        <div css={oauthLogin}>
          <span>Login with</span>
          <div css={oauthLoginType}>
            <span>Google</span>
            <span>GitHub</span>
          </div>
        </div>
      </>
    </div>
  )
}

const signBox = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 14,
  margin: 5,
})

const checkBox = css({
  display: 'flex',
})

const checkBoxLabel = css({
  fontSize: 14,
  color: COLOR_SET.input_content,
})

const forgetPwdBtn = css({
  fontSize: 14,
  color: COLOR_SET.third,
  textAlign: 'end',
  marginBottom: 15,
})

const signUp = css({
  fontSize: 14,
  color: COLOR_SET.secondary,
})

const oauthLogin = css({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 16,
  margin: '20px 5px 5px 5px',
  color: COLOR_SET.input_content,
})

const oauthLoginType = css({
  display: 'flex',
  gap: 5,
  justifyContent: 'end',
})

export default SignInBox
