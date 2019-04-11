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
    ...(newStucture('Member', structure_types.MEMBER, ['email', 'firstName', 'lastName', 'lastPaymentDate', 'phoneNumber', 'role', 'role_id'])),
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
  }
}
