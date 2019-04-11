import GenericCRUD from './CRUD'
import {
  success,
  error,
  createUri,
  createOpt,
  handleServerResponse,
  handleServerError
} from './_helpers'
import {
  Structures
} from '../structures/Structures'
import { Connect } from './Connect'
const endpoint = 'roles'
const CRUD = GenericCRUD(endpoint)
const structure = Structures.Role

export const Roles = {
  async getAll () {
    const dataFromServer = await CRUD.getAll()
    if (!dataFromServer.successful) {
      return error(dataFromServer)
    }
    return success(dataFromServer.data.map(data => structure.create(data)))
  },
  async getOne (id) {
    const dataFromServer = await CRUD.getOne(id)
    if (!dataFromServer.successful) {
      return error(dataFromServer)
    }
    return success(structure.create(dataFromServer.data))
  },
  async permissions (id) {
    console.assert(id, 'No id given ')
    return new Promise(async (resolve, reject) => {
      const token = await Connect.getToken()
      const url = createUri(endpoint + '/' + id + '/permissions', { token })
      const opt = createOpt('GET')
      fetch(url, opt)
        .then(handleServerResponse(resolve))
        .catch(handleServerError(reject))
    })
  },
  async create (role) {
    const verified = structure.verify(role)
    if (!verified) {
      return error({
        message: 'Role given is not a verified role'
      })
    }
    const response = await CRUD.create(role)
    return response
  },
  async delete (id) {
    return CRUD.delete(id)
  },
  async update (id, role) {
    const verified = structure.verify(role)
    if (!verified) {
      return error({
        message: 'Role given is not a verified role'
      })
    }
    const response = await CRUD.update(id, role)
    return response
  }

}
