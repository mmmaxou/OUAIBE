import {
  required,
  structure_types
} from './_helpers'

export const createMember = (props) => {
  const isValid = required(props, ['id', 'email', 'firstName', 'lastName', 'lastPaymentDate', 'phoneNumber', 'role', 'role_id'])
  if (!isValid) {
    console.error('The member you try to create is invalid')
    return undefined
  }
  // Quick fix for role id
  return {
    ...props,
    'structure_type': structure_types.MEMBER,
    'role_id': Number(props['role_id'])
  }
}
