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

const endpoint = 'typeMaterials'
const CRUD = GenericCRUD(endpoint)
const structure = Structures.TypeMaterial

export const TypeMaterials = {
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
  async create (typeMaterial) {
    const verified = structure.verify(typeMaterial)
    if (!verified) {
      return error({
        message: 'TypeMaterial given is not a verified typeMaterial'
      })
    }
    const response = await CRUD.create(typeMaterial)
    return response
  },
  async delete (id) {
    return CRUD.delete(id)
  },
  async update (id, typeMaterial) {
    const verified = structure.verify(typeMaterial)
    if (!verified) {
      return error({
        message: 'TypeMaterial given is not a verified typeMaterial'
      })
    }
    const response = await CRUD.update(id, typeMaterial)
    return response
  },
  async material () {
    return new Promise(async (resolve, reject) => {
      const token = await Connect.getToken()
      const url = createUri(endpoint + '/materials', { token })
      const opt = createOpt('GET')
      fetch(url, opt)
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            // Get all successful
            res.json().then(json => {
              resolve(success(json.data.map(data => structure.create(data))))
            })
          } else if (res.status >= 400 && res.status < 500) {
            res.json().then(json => {
              resolve(error(json))
            })
          } else {
            // Unauthorized
            resolve(error(res))
          }
        })
        .catch(handleServerError(reject))
    })
  },
  async materialCount () {
    return new Promise(async (resolve, reject) => {
      const token = await Connect.getToken()
      const url = createUri(endpoint + '/materials/count', { token })
      const opt = createOpt('GET')
      fetch(url, opt)
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            // Get all successful
            res.json().then(json => {
              resolve(success(json.data.map(data => ({...data, materials_count: +data.materials_count}))))
            })
          } else if (res.status >= 400 && res.status < 500) {
            res.json().then(json => {
              resolve(error(json))
            })
          } else {
            // Unauthorized
            resolve(error(res))
          }
        })
        .catch(handleServerError(reject))
    })
  }

}
