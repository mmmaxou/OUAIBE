import GenericCRUD from './CRUD'
import {
  success,
  error
} from './_helpers'
import {
  Structures
} from '../structures/Structures'

const endpoint = 'images'
const CRUD = GenericCRUD(endpoint)
const structure = Structures.Image

export const Images = {
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
  async create () {
    return error({ message: 'Not Implemented yet. Sorryyyy' })
    /*
    const verified = structure.verify(transaction)
    if (!verified) {
      return error({
        message: 'Transaction given is not a verified transaction'
      })
    }
    const response = await CRUD.create(transaction)
    return response
    */
  },
  async delete (id) {
    return CRUD.delete(id)
  }
}
