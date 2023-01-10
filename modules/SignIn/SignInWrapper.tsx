import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { COLOR_SET } from '../../constants/colorSet'

interface SignInWrapperProps {
  children: ReactNode
}

const SignInWrapper = ({ children }: SignInWrapperProps) => {
  return (
    <div css={signWrapper}>
      {children}
      <div css={intro}>
        <dt>Do Bon</dt>
        <dd>With Do Bon, you can easily manage your work!</dd>
      </div>
    </div>
  )
}

const signWrapper = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  width: '80%',
})

const intro = css({
  backgroundColor: COLOR_SET.primary,
  color: COLOR_SET.third,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'baseline',
  justifyContent: 'center',
  height: '100%',
  gap: 14,
  margin: 5,
  borderRadius: '0px 20px 20px 0px',
  '& dt': {
    fontSize: 30,
    fontWeight: '10px',
  },
})

export default SignInWrapper
