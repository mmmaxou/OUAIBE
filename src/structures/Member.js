import {
  required,
  structure_types
} from './_helpers'

/**
 * Create a member from an object
 * @param {object} props
 */
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

/**
 * Create a member with a lot of parameters
 * @param {string} email
 * @param {string} password
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} phoneNumber
 * @param {number} role_id
 * @param {Images[]} images
 */
export const createNewMember = (email, password = '', firstName, lastName, phoneNumber, role_id, images = undefined) => {
  return {
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    role_id,
    'images[]': images,
    'structure_type': structure_types.MEMBER
  }
}

/**
 * Verify a member is valid
 * @param {Member} potentialMember
 */
export const verifyMember = (potentialMember) => {
  const isValid = required(potentialMember, ['email', 'firstName', 'lastName', 'phoneNumber', 'role_id', 'password'])
  const isStruct = potentialMember['structure_type'] === structure_types.MEMBER
  return isValid && isStruct
}
