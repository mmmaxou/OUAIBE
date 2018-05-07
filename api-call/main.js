
const WEBSITE_ADDRESS = 'https://bdi.nicolassenecal.com/lumen/public/'
const ApiInterface = function (routeName) {
	var self = {
		All: function () {
			return new Promise( function (resolve, reject) {
				fetch('https://jsonplaceholder.typicode.com/' + this.routeName + '/')
					.then(response => response.json())
					.then(json => resolve(json))
			})
		}
	}

	return self
}
const MembresInterface = new ApiInterface('membres')




$('#base').click(function () {
	MembresInterface.All().then( json => console.log(json))
})

