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
  SPONSOR: 'SPONSOR'
}
