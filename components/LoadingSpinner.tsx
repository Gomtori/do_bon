import { css, keyframes } from '@emotion/react'

const LoadingSpinner = () => {
  return (
    <div css={spinnerWrapper}>
      <span css={loadingText}>Loading</span>
      <div css={spinner} />
    </div>
  )
}

const spinnerWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
  minHeight: '100vh',
  zIndex: 99999,
})

const loadingText = css({
  fontSize: 15,
  color: 'grey',
})

const spin = keyframes`
  100%{
    transform: rotate(360deg);
  }
`
const spinner = css({
  display: 'inline-block',
  width: 50,
  height: 50,
  border: '5px solid blue',
  borderColor: 'blue transparent transparent',
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,
  opacity: 0.5,
})

export default LoadingSpinner
