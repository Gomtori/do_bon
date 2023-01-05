import DynamicComponent from '../util/DynamicComponent'

const Home = () => {
  const SignIn = DynamicComponent(() => import('../modules/SignIn'))
  return (
    <>
      <SignIn />
    </>
  )
}

export default Home
