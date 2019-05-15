import GenericCRUD from './CRUD'
import {
  success,
  error
} from './_helpers'
import {
  Structures
} from '../structures/Structures'
const endpoint = 'materials'
const CRUD = GenericCRUD(endpoint)
const structure = Structures.Material

export const Materials = {
  async getAll () {
    const dataFromServer = await CRUD.getAll()
    if (!dataFromServer.successful) {
      return error(dataFromServer)
    }
    return success(dataFromServer.data.map(material => structure.create(material)))
  },
  async getOne (id) {
    const dataFromServer = await CRUD.getOne(id)
    if (!dataFromServer.successful) {
      return error(dataFromServer)
    }
    return success(structure.create(dataFromServer.data))
  },
  async create (material) {
    const verified = structure.verify(material)
    if (!verified) {
      return error({
        message: 'Material given is not a verified material'
      })
    }
    const response = await CRUD.create(material)
    return response
  },
  async delete (id) {
    return CRUD.delete(id)
  },
  async update (id, material) {
    const verified = structure.verify(material)
    if (!verified) {
      return error({
        message: 'Material given is not a verified material'
      })
    }
    const response = await CRUD.update(id, material)
    return response
  }

}
