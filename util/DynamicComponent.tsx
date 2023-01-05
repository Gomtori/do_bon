import dynamic, { DynamicOptions, Loader } from 'next/dynamic'
import { CircularProgress } from '@mui/material'

const DynamicComponent = (importedComponent: DynamicOptions | Loader) => {
  return dynamic(importedComponent, {
    loading: () => <CircularProgress />,
  })
}

export default DynamicComponent
