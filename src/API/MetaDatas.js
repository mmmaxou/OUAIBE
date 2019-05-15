import GenericCRUD from './CRUD'
import {
  Connect
} from './Connect'
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

const endpoint = 'metaDatas'
const CRUD = GenericCRUD(endpoint)
const structure = Structures.MetaData

export const MetaDatas = {
  async getAll () {
    const dataFromServer = await CRUD.getAll()
    if (!dataFromServer.successful) {
      return error(dataFromServer)
    }
    return success(dataFromServer.data.map(data => structure.create(data)))
  },
  async getOne (metaKey) {
    const dataFromServer = await CRUD.getOne(metaKey)
    if (!dataFromServer.successful) {
      return error(dataFromServer)
    }
    return success(structure.create(dataFromServer.data))
  },
  async create (metaData) {
    const verified = structure.verify(metaData)
    if (!verified) {
      return error({
        message: 'MetaData given is not a verified metadata'
      })
    }
    return new Promise(async (resolve, reject) => {
      const token = await Connect.getToken()
      const url = createUri(endpoint, {
        token,
        ...metaData
      })
      const opt = createOpt('POST')
      fetch(url, opt)
        .then(handleServerResponse(resolve))
        .catch(handleServerError(reject))
    })
  },
  async delete (metaKey) {
    return CRUD.delete(metaKey)
  },
  async update (metaKey, metaValue) {
    return new Promise(async (resolve, reject) => {
      const token = await Connect.getToken()
      const url = createUri(endpoint + '/' + metaKey, {
        token,
        metaKey,
        metaValue
      })
      const opt = createOpt('PUT')
      fetch(url, opt)
        .then(handleServerResponse(resolve))
        .catch(handleServerError(reject))
    })
  }

}
