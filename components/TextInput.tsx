import { TextField, TextFieldProps } from '@mui/material'
import { FieldHookConfig, useField } from 'formik'
import { COLOR_SET } from '../constants/colorSet'

const TextInput = (props: TextFieldProps & FieldHookConfig<string>) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <TextField
      sx={{
        width: '100%',
        '& .MuiInputBase-input': {
          fontSize: 14,
          color: COLOR_SET.input_content,
        },
      }}
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  )
}

export default TextInput
