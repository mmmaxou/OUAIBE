export const required = (object, fields) => {
  return !fields.find(key => object[key] === undefined)
}
export const structure_types = {
  MEMBER: 'MEMBER',
  TRANSACTION: 'TRANSACTION',
  METADATA: 'METADATA',
  IMAGE: 'IMAGE',
  ROLE: 'ROLE',
  MATERIAL: 'MATERIAL',
  TYPE_MATERIAL: 'TYPE_MATERIAL',
  SPONSOR: 'SPONSOR',
  PERMISSION: 'PERMISSION'
}
/**
 *
 * @param {string} name
 * @param {structure_types} type
 * @param {string[]} requiredProps
 */
export const newStucture = (name, type, requiredProps) => {
  return {
    name,
    type,
    /**
     * Create a new structure
     * @param {Object} props
     */
    create (props) {
      const isValid = required(props, requiredProps)
      if (!isValid) {
        console.error(`The ${type} you try to create is invalid`)
        return undefined
      }
      const properIdProps = Object.entries(props)
        .filter(prop => prop[1] !== undefined)
        .map(prop => {
          if (prop[0].endsWith('_id') ||
              prop[0] === 'quantity') {
            return [prop[0], Number(prop[1])]
          }
          return prop
        })
        .reduce((obj, [k, v]) => ({ ...obj, [k]: v }), {})
      return {
        ...properIdProps,
        'structure_type': type
      }
    },
    /**
     * Verify a structure
     * @param {structure} potential
     */
    verify (potential) {
      const isValid = required(potential, requiredProps)
      const isStruct = potential['structure_type'] === type
      return isValid && isStruct
    }
  }
}
