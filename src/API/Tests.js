import API from './API'
import {
  createNewMember
} from '../structures/Member'
const TESTS = {
  Connect: false,
  Members: true
}
export default async () => {
  console.log('=== Running test for api call ===')
  console.log('API : ', API)
  await testConnect()
  await testMembers()
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
    console.log('  == Members ==')
    console.log('    = #getAll =', await API.Members.getAll())
    console.log('    = #getOne =', await API.Members.getOne(1))
    const member = createNewMember('random@gmail.com', '123456', 'jean', 'paul', '0652070765', 1)
    console.log('    = #create =', await API.Members.create(member))
    console.log('    = #delete =', await API.Members.delete(53))
  }
}
