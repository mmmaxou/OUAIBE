'use strict';

const WEBSITE_ADDRESS = 'https://bdi.nicolassenecal.com/api/'
var token

const ConnexionInterface = {
	Login: function (email, password) {		
		return new Promise(function (resolve, reject) {

			if ( !email ) {
				reject("The email option is required\nUse : ConnextionInterface.Login(<email>, <password>);")
			}			
			if ( !password ) {
				reject("The password option is required\nUse : ConnextionInterface.Login(<email>, <password>);")
			}

			let formData = new FormData()
			formData.append("email", email)
			formData.append("password", password)
			const uri = WEBSITE_ADDRESS + 'login'
			const opt = {
				mode: 'cors',
				method: 'POST',
				body: formData
			}
			console.log(opt)
			fetch(uri, opt)
				.then( response => response.json() )
				.then( json => resolve(json) )

		})
	}
}

const ApiInterface = function (routeName) {
	var self = {
		All: function () {
			return new Promise( function (resolve, reject) {
				const uri = WEBSITE_ADDRESS + routeName
				fetch(uri, {mode: 'cors'})
					.then((response) => { 
					return response.json()
				})
					.then((json) => {
					resolve(json)
				} )
			})
		}
	}
	return self
}
const MembresInterface = new ApiInterface('members')

$('#base').click(function () {
	MembresInterface
		.All()
		.then( json => console.log(json))
})

ConnexionInterface.Login("admin", "admin")
	.then( json => {
	console.log(json)
	setCookie("token", json.access_token, json.expires_in)
	token = json.access_token
})
	.catch( err => {
	console.error(err)
})

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

