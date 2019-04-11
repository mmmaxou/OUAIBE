import API from './API'
import { Structures } from '../structures/Structures'
const TESTS = {
  Connect: false,
  Materialss: false,
  Materials: false,
  Roles: false,
  Permissions: false,
  Sponsors: true
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
    const updatedMember = Structures.Member.createNew('updatedEmail@gmail.com', 'updatedPassword', 'updatedName', 'updatedLastname', '0652070765', 1)
    console.log('  == Members ==')
    console.log('    = #getAll =', await API.Members.getAll())
    console.log('    = #getOne =', await API.Members.getOne(1))
    console.log('    = #count =', await API.Members.count())
    console.log('    = #images =', await API.Members.images(1))
    console.log('    = #update =', await API.Members.update(2, updatedMember))
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
