import GenericCRUD from './CRUD'
import {
  success,
  error
} from './_helpers'
import {
  createMember,
  verifyMember
} from '../structures/Member'
const endpoint = 'members'
const CRUD = GenericCRUD(endpoint)

export const Members = {
  async getAll () {
    const membersFromServer = await CRUD.getAll()
    if (!membersFromServer.successful) {
      return error(membersFromServer)
    }
    return success(membersFromServer.data.map(member => createMember(member)))
  },
  async getOne (id) {
    const memberFromServer = await CRUD.getOne(id)
    if (!memberFromServer.successful) {
      return error(memberFromServer)
    }
    return success(createMember(memberFromServer.data))
  },
  async create (member) {
    const verified = verifyMember(member)
    if (!verified) {
      return error({
        message: 'Member given is not a verified member'
      })
    }
    return CRUD.create(member)
  },
  async delete (id) {
    return CRUD.delete(id)
  }

}
