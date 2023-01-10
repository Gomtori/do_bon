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

  //로그인 데이터 전송로직 구현 필요
  const handleSignIn = (values: { email: string; password: string }) => {
    return values
  }

  const handleForgetPwdBtn = () => {
    //비밀번호 찾기 페이지로 이동하는 주소로 변경 필요
    void router.push('/')
  }

  const handleSignUpBtn = () => {
    //회원가입 페이지로 이동하는 주소로 변경 필요
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
        //setSubmitting은 비동기 통신에 사용(isSubmitting을 통해 현재 비동기 통신중인지 확인)
        //isSubmitting이 true일 때는 양식을 두 번 보내지 않도록 버튼을 disable 가능
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
          //로그인 데이터 전송
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
