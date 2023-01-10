import { Box } from '@mui/material'
import { css } from '@emotion/react'
import mq from '../../constants/mediaQuery'
import LogoSvg from '../../public/assets/logo.svg'

const Logo = () => {
  return (
    <Box css={logoBox}>
      <LogoSvg css={logo} />
    </Box>
  )
}

const logoBox = css`
  padding: 2.5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${mq[0]} {
    height: 56px;
  }
  ${mq[1]} {
    height: 70px;
  }
`

const logo = css`
  ${mq[0]} {
    height: 40px;
  }
  ${mq[1]} {
    height: 45px;
  }
`

export default Logo
