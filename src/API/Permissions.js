import GenericCRUD from './CRUD'
import {
  success,
  error
} from './_helpers'
import {
  Structures
} from '../structures/Structures'

const endpoint = 'permissions'
const CRUD = GenericCRUD(endpoint)
const structure = Structures.Permission

export const Permissions = {
  async getAll () {
    const dataFromServer = await CRUD.getAll()
    if (!dataFromServer.successful) {
      return error(dataFromServer)
    }
    return success(dataFromServer.data.map(data => structure.create(data)))
  }
}

/*
"name": "read-roles",
"display_name": "Read roles",
"description": "Allowed to see all roles"
*/
