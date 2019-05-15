import GenericCRUD from './CRUD'
import {
  Connect
} from './Connect'
import {
  success,
  error,
  createOpt,
  createUri,
  handleServerResponse,
  handleServerError
} from './_helpers'
import {
  Structures
} from '../structures/Structures'
const endpoint = 'members'
const CRUD = GenericCRUD(endpoint)
const structure = Structures.Member

export const Members = {
  async getAll () {
    const dataFromServer = await CRUD.getAll()
    if (!dataFromServer.successful) {
      return error(dataFromServer)
    }
    return success(dataFromServer.data.map(member => structure.create(member)))
  },
  async getOne (id) {
    const dataFromServer = await CRUD.getOne(id)
    if (!dataFromServer.successful) {
      return error(dataFromServer)
    }
    return success(structure.create(dataFromServer.data))
  },
  async count () {
    const count = await CRUD.count()
    return count
  },
  async images (id) {
    console.assert(id, 'No id given ')
    return new Promise(async (resolve, reject) => {
      const token = await Connect.getToken()
      const url = createUri('members/' + id + '/images', { token })
      const opt = createOpt('GET')
      fetch(url, opt)
        .then(handleServerResponse(resolve))
        .catch(handleServerError(reject))
    })
  },
  async create (member) {
    const verified = structure.verify(member)
    if (!verified) {
      return error({
        message: 'Member given is not a verified member'
      })
    }
    const response = await CRUD.create(member)
    return response
  },
  async delete (id) {
    return CRUD.delete(id)
  },
  async update (id, member) {
    const verified = structure.verify(member)
    if (!verified) {
      return error({
        message: 'Member given is not a verified member'
      })
    }
    const response = await CRUD.update(id, member)
    return response
  }

}
