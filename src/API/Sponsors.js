import GenericCRUD from './CRUD'
import {
  success,
  error
} from './_helpers'
import {
  Structures
} from '../structures/Structures'
const endpoint = 'sponsors'
const CRUD = GenericCRUD(endpoint)
const structure = Structures.Sponsor

export const Sponsors = {
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
  async create (sponsor) {
    const verified = structure.verify(sponsor)
    if (!verified) {
      return error({
        message: 'Sponsor given is not a verified sponsor'
      })
    }
    const response = await CRUD.create(sponsor)
    return response
  },
  async delete (id) {
    return CRUD.delete(id)
  },
  async update (id, sponsor) {
    const verified = structure.verify(sponsor)
    if (!verified) {
      return error({
        message: 'Sponsor given is not a verified sponsor'
      })
    }
    const response = await CRUD.update(id, sponsor)
    return response
  }

}
