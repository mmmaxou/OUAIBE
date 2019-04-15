import {
  structure_types,
  newStucture
} from './_helpers'

export const Structures = {
  Material: {
    ...(newStucture('Material', structure_types.MATERIAL, ['name', 'quantity', 'type_material_id'])),
    createNew: (name, quantity, type_material_id) => Structures.Material.create({
      name,
      quantity,
      type_material_id
    })
  },
  Member: {
    ...(newStucture('Member', structure_types.MEMBER, ['email', 'firstName', 'lastName', 'phoneNumber', 'role_id'])),
    createNew: (email, firstName, lastName, phoneNumber, role_id, password = undefined, images = undefined) => Structures.Member.create({
      email,
      firstName,
      lastName,
      phoneNumber,
      role_id,
      password,
      'images[]': images
    })
  },
  Role: {
    ...(newStucture('Role', structure_types.ROLE, ['name', 'shortDescription', 'image_id'])),
    createNew: (name, shortDescription, image_id, permissions = undefined) => Structures.Role.create({
      name,
      shortDescription,
      image_id,
      'permissions[]': permissions
    })
  },
  Permission: {
    ...(newStucture('Permission', structure_types.PERMISSION, ['name', 'display_name', 'description'])),
    createNew: (name, display_name, description) => ({
      name,
      display_name,
      description
    })
  },
  Sponsor: {
    ...(newStucture('Sponsor', structure_types.SPONSOR, ['name'])),
    createNew: (name, email = undefined, shortDescription = undefined, phoneNumber = undefined, image_id = undefined) => Structures.Sponsor.create({
      name,
      email,
      shortDescription,
      phoneNumber,
      image_id
    })
  },
  Transaction: {
    ...(newStucture('Transaction', structure_types.TRANSACTION, ['dateTransaction', 'output', 'input'])),
    createNew: (dateTransaction, output, input, shortDescription = undefined) => Structures.Transaction.create({
      dateTransaction,
      output,
      input,
      shortDescription
    })
  },
  TypeMaterial: {
    ...(newStucture('TypeMaterial', structure_types.TYPE_MATERIAL, ['name', 'image_id'])),
    createNew: (name, image_id) => Structures.TypeMaterial.create({
      name,
      image_id
    })
  },
  MetaData: {
    ...(newStucture('MetaData', structure_types.METADATA, ['metaKey', 'metaValue'])),
    createNew: (metaKey, metaValue, description = undefined) => Structures.MetaData.create({
      metaKey,
      metaValue,
      description
    })
  },
  Image: {
    ...(newStucture('Image', structure_types.IMAGE, ['name'])),
    createNew: (name) => Structures.Image.create({
      name
    })
  }
}
