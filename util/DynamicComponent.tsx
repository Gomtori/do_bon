import dynamic, { DynamicOptions, Loader } from 'next/dynamic'
import LoadingSpinner from '../components/LoadingSpinner'

const DynamicComponent = (importedComponent: DynamicOptions | Loader) => {
  return dynamic(importedComponent, {
    loading: () => <LoadingSpinner />,
  })
}

export default DynamicComponent
