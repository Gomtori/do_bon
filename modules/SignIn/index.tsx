import SignInWrapper from './SignInWrapper'
import SignInBox from './SignInBox'
import { css } from '@emotion/react'

const signIn = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
})

const SignIn = () => {
  return (
    <div css={signIn}>
      <SignInWrapper>
        <SignInBox />
      </SignInWrapper>
    </div>
  )
}

export default SignIn
