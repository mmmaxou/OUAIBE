
const WEBSITE_ADDRESS = 'https://bdi.nicolassenecal.com/lumen/public/'
const ApiInterface = function (routeName) {
	var self = {
		All: function () {
			return new Promise( function (resolve, reject) {
				const uri = WEBSITE_ADDRESS + routeName
				console.log(uri)
				let options = {
					url:uri,
					method:'GET',
					mode: 'cors',
					headers:{
						'Access-Control-Allow-Origin':'*'
					},
					body:null,
				};
				fetch(options)
					.then(response => response.json())
					.then(json => resolve(json))
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

