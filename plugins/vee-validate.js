import { extend } from 'vee-validate'
import {
  required,
  email,
  min,
  max,
  alpha_num as alphaNum,
} from 'vee-validate/dist/rules'

// No message specified.
extend('email', {
  ...email,
  message: 'Email is not valid',
})

// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required',
})

extend('min', min)
extend('max', max)

extend('alphaNum', {
  ...alphaNum,
  message: 'Username must be alphanumeric (a-z, 0-9)',
})
