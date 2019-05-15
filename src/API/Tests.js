import API from './API'
import { Structures } from '../structures/Structures'
import { getFormattedDate } from './_helpers'
const TESTS = {
  Connect: false,
  Members: false,
  Materials: false,
  Roles: false,
  Permissions: false,
  Sponsors: false,
  Transactions: false,
  MetaDatas: false,
  TypeMaterials: false,
  Images: false
}
export default async () => {
  console.log('=== Running test for api call ===')
  console.log('API : ', API)
  await testConnect()
  await testMembers()
  await testMaterials()
  await testRoles()
  await testPermissions()
  await testSponsors()
  await testTransactions()
  await testMetaDatas()
  await testTypeMaterials()
  await testImages()
  console.log('=== All tests done ===')
}

async function testConnect () {
  if (TESTS.Connect) {
    console.log('  == Connect ==')
    console.log('    = TOKEN =', await API.Connect.getToken())
    console.log('    = LOGIN =', await API.Connect.loginAndStoreToken('admin', 'admin'))
    console.log('    = LOGOUT =', await API.Connect.logout())
    console.log('    = REFRESH =', await API.Connect.refresh())
    console.log('    = ME =', await API.Connect.me())
  }
}
async function testMembers () {
  if (TESTS.Members) {
    const member = Structures.Member.createNew('randdom@gmail.com', 'jean', 'paul', '0652070765', 1)
    const member2 = Structures.Member.createNew('randdom@gmail.com', 'jean', 'paul', '0652070765', 1, '123456', [5, 9])
    const updatedMember = Structures.Member.createNew('updatedEmail@gmail.com', 'updatedName', 'updatedLastname', '0652070765', 1)
    console.log('  == Members ==')
    console.log('    = #getAll =', await API.Members.getAll())
    console.log('    = #getOne =', await API.Members.getOne(1))
    console.log('    = #count =', await API.Members.count())
    console.log('    = #images =', await API.Members.images(1))
    console.log('    = #update =', await API.Members.update(10, updatedMember))
    console.log('    = #create =', await API.Members.create(member))
    console.log('    = #create =', await API.Members.create(member2))
    console.log('    = #delete =', await API.Members.delete(58))
  }
}
async function testMaterials () {
  if (TESTS.Materials) {
    const material = Structures.Material.createNew('Camera', 2, 1)
    const updatedMaterial = Structures.Material.createNew('updatedCamera', 2, 1)
    console.log('  == Materials ==')
    console.log('    = #getAll =', await API.Materials.getAll())
    console.log('    = #getOne =', await API.Materials.getOne(1))
    console.log('    = #update =', await API.Materials.update(2, updatedMaterial))
    console.log('    = #create =', await API.Materials.create(material))
    console.log('    = #delete =', await API.Materials.delete(53))
  }
}
async function testRoles () {
  if (TESTS.Roles) {
    const roles = Structures.Role.createNew('Developper', 'Code all day long', 1)
    const roles2 = Structures.Role.createNew('Developper', 'Code all day long', 1, [1, 6, 7])
    const updatedRoles = Structures.Role.createNew('updatedDevelopper', 'Still code all day long', 1)
    console.log('  == Roles ==')
    console.log('    = #getAll =', await API.Roles.getAll())
    console.log('    = #getOne =', await API.Roles.getOne(1))
    console.log('    = #update =', await API.Roles.update(2, updatedRoles))
    console.log('    = #create =', await API.Roles.create(roles))
    console.log('    = #create =', await API.Roles.create(roles2))
    console.log('    = #permissions =', await API.Roles.permissions(56))
    console.log('    = #delete =', await API.Roles.delete(53))
  }
}
async function testPermissions () {
  if (TESTS.Permissions) {
    console.log('  == Permissions ==')
    console.log('    = #getAll =', await API.Permissions.getAll())
  }
}
async function testSponsors () {
  if (TESTS.Sponsors) {
    const sponsor = Structures.Sponsor.createNew('CocaCola', 'grasdubidqqq@gmail.com', 'desc', '+1548792365', 1)
    const updatedSponsor = Structures.Sponsor.createNew('CocaCola', 'gras@gmail.com', 'Sell Fat shit', '+5899879846', 1)
    console.log('  == Sponsors ==')
    console.log('    = #getAll =', await API.Sponsors.getAll())
    console.log('    = #getOne =', await API.Sponsors.getOne(1))
    console.log('    = #update =', await API.Sponsors.update(2, updatedSponsor))
    console.log('    = #create =', await API.Sponsors.create(sponsor))
    console.log('    = #delete =', await API.Sponsors.delete(22))
  }
}
async function testTransactions () {
  if (TESTS.Transactions) {
    const transaction = Structures.Transaction.createNew(getFormattedDate(), -15.2, 59.1)
    const updatedTransaction = Structures.Transaction.createNew(getFormattedDate(), -6, 48, 'Achat de lumières fluos.')
    console.log('  == Transactions ==')
    console.log('    = #getAll =', await API.Transactions.getAll())
    console.log('    = #getOne =', await API.Transactions.getOne(1))
    console.log('    = #update =', await API.Transactions.update(2, updatedTransaction))
    console.log('    = #create =', await API.Transactions.create(transaction))
    console.log('    = #delete =', await API.Transactions.delete(22))
  }
}
async function testMetaDatas () {
  if (TESTS.MetaDatas) {
    const metaData = Structures.MetaData.createNew('testKey', 'testValue')
    console.log('Metadata : ', metaData)
    console.log('  == Metadatas ==')
    console.log('    = #getAll =', await API.MetaDatas.getAll())
    console.log('    = #getOne =', await API.MetaDatas.getOne('siteColor'))
    console.log('    = #create =', await API.MetaDatas.create(metaData))
    console.log('    = #update =', await API.MetaDatas.update('facebook_PrivateLink', 'cuisine facile'))
    console.log('    = #delete =', await API.MetaDatas.delete(metaData.metaKey))
  }
}
async function testTypeMaterials () {
  if (TESTS.TypeMaterials) {
    const typeMaterial = Structures.TypeMaterial.createNew('Audiovisuel', 1)
    const updatedTypeMaterial = Structures.TypeMaterial.createNew('Cinema', 2)
    console.log('  == TypeMaterials ==')
    console.log('    = #getAll =', await API.TypeMaterials.getAll())
    console.log('    = #getOne =', await API.TypeMaterials.getOne(1))
    console.log('    = #update =', await API.TypeMaterials.update(2, updatedTypeMaterial))
    console.log('    = #create =', await API.TypeMaterials.create(typeMaterial))
    console.log('    = #delete =', await API.TypeMaterials.delete(22))
    console.log('    = #material =', await API.TypeMaterials.material())
    console.log('    = #materialCount =', await API.TypeMaterials.materialCount())
  }
}
async function testImages () {
  if (TESTS.Images) {
    const image = Structures.Image.createNew('Audiovisuel')
    console.log('  == Images ==')
    console.log('    = #getAll =', await API.Images.getAll())
    console.log('    = #getOne =', await API.Images.getOne(1))
    console.log('    = #create =', await API.Images.create(image))
    console.log('    = #delete =', await API.Images.delete(22))
  }
}
