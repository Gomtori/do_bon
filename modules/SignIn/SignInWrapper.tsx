import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { COLOR_SET } from '../../constants/colorSet'

interface SignInWrapperProps {
  children: ReactNode
}

const signWrapper = css({
  display: 'flex',
  flex: '1fr 1fr',
})

const intro = css({
  backgroundColor: COLOR_SET.primary,
  color: COLOR_SET.third,
  alignItems: 'center',
})

const SignInWrapper = ({ children }: SignInWrapperProps) => {
  return (
    <div css={signWrapper}>
      {children}
      <dl css={intro}>
        <dt>Do Bon</dt>
        <dd>With Do Bon, you can easily manage your work!</dd>
      </dl>
    </div>
  )
}

export default SignInWrapper
