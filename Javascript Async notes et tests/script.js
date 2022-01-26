'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


function renderCountryData(result, className=""){

	const html=`
        <article class="country ${className}">
          <img class="country__img" src="${result.flags["svg"]}" />
          <div class="country__data">
            <h3 class="country__name">${result.name["common"]}</h3>
            <h4 class="country__region">${result.region}</h4>
            <p class="country__row"><span>👫</span>${(+result.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${result.languages[Object.keys(result.languages)]}</p>
            <p class="country__row"><span>💰</span>${result.currencies[Object.keys(result.currencies)].name}</p>
          </div>
        </article>
		`
	countriesContainer.insertAdjacentHTML("beforeend", html);

}
///////////////////////////////////////
function getCountryData1(name) {

	const request= new XMLHttpRequest();
	request.open("get", `https://restcountries.com/v3.1/name/${name}`);

	request.send();

	request.addEventListener("load", function(){
		let [result]=JSON.parse(this.responseText);
		console.log(result);
		renderCountryData(result);
	})

}
/*
getCountryData("algeria");
getCountryData("germany");
getCountryData("France");
getCountryData("usa");
*/
function getCountryAndNeighbour(name) {
	//Ajax pour le premier pays
	const request= new XMLHttpRequest();
	request.open("get", `https://restcountries.com/v3.1/name/${name}`);

	request.send();

	request.addEventListener("load", function(){
		let [result]=JSON.parse(this.responseText);

		renderCountryData(result);
		const neighbour=result.borders;
		if(!neighbour) return

		neighbour.forEach(function(countrie){
			let request2= new XMLHttpRequest();
			request2.open("get", `https://restcountries.com/v3.1/alpha/${countrie}`);
			request2.send();
				request2.addEventListener("load", function(){
					let [result]=JSON.parse(this.responseText);

					renderCountryData(result, "neighbour");
						});
		})

	})

}

//getCountryAndNeighbour("usa");





/* SYNTAXE MODERN */

const getJson= function(url, errorMessage="Something went wrong"){
			return fetch(url).then(result=> {
					if (result.ok===false) throw new Error(errorMessage)
					return result.json()
				})
}


const getCountryData= function(country){
		getJson(`https://restcountries.com/v3.1/name/${country}`, "Country not Found")
				.then(data=> {
						renderCountryData(data[0])
						if (!data[0].borders[0]) return
						const neighbour=data[0].borders[0];
						return getJson(`https://restcountries.com/v3.1/alpha/${neighbour}`)
				})						
				.then(data=> renderCountryData(data[0]))
				.catch(error=>renderError(`Something went wrong. ${error}.\n Try Again`))
				.finally(()=>countriesContainer.style.opacity=1)


}

//getCountryData("Germany");










///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates.
For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng)
 (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, 
like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json.
 Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉

3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location.
 Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'

4. Chain a .catch method to the end of the promise chain and log errors to the console

5. This API allows you to make only 3 requests per second. 
If you reload fast, you will get this error with code 403. This is an error with the request.
 Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, 
 with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result,
 and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture 
(you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/




const renderError= function(message){
	countriesContainer.insertAdjacentText('afterbegin', message);
}

/*

Sans Function combinant fetch + json mais avec 3 fetch 

const whereAmI = function(lat,lng) {
	fetch(` https://geocode.xyz/${lat},${lng}?geoit=json`)
		.then(result=> {
			if (result.ok===false) throw new Error("We are being throttled...")
			return result.json()
		})
		.then(data=> {
			console.log(`You are in ${data.city}, ${data.country}`)
			return fetch(`https://restcountries.com/v3.1/name/${data.country}`) 
		})
		.then(result=>{
			if (result.of===false) throw new Error("There was a problem with the display")
				return result.json()
		})
		.then(data=> {
			renderCountryData(data[0])
			const neighbour=data[0].borders[0]
			return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
		})
		.then(result=>{ 			
			if (result.of===false) throw new Error("No neighbour was found")
				return result.json()
		})
		.then(data=>renderCountryData(data[0]))

		.catch(error=> renderError(error))
		.finally(()=>countriesContainer.style.opacity=1)
}

*/

//Code avec une helper Function qui combine fetch et json



const fetchThenJson=function(url, error){
	return fetch(url).then(result=> {
			if (result.ok===false) throw new Error(error)
			return result.json()
		})
}

const whereAmI = function(lat,lng) {
	fetchThenJson(` https://geocode.xyz/${lat},${lng}?geoit=json`, "We are being throttled...")
		.then(data=> {
			console.log(`You are in ${data.city}, ${data.country}`)
			return fetchThenJson(`https://restcountries.com/v3.1/name/${data.country}`, "There was a problem with the display") 
		})
		.then(data=> {
			renderCountryData(data[0])
			const neighbour=data[0].borders[0]
			return fetchThenJson(`https://restcountries.com/v3.1/alpha/${neighbour}`, "No neighbour was found")
		})
		.then(data=>renderCountryData(data[0]))
		.catch(error=> renderError(error))
		.finally(()=>countriesContainer.style.opacity=1)
}


/*
const getPosition = function(){
	return new Promise(function(resolve, reject){
		navigator.geolocation.getCurrentPosition(resolve, reject);
	})
}
getPosition().then(result=> {
	let {longitude, latitude} = result.coords

	whereAmI(longitude, latitude)
	}
);
*/
//whereAmI(52.508, 13.381);

//whereAmI(-33.933, 18.474);


const lottery = function() {
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			if (Math.random()>0.5){
				resolve("You win !");
			} else {
				reject(new Error ("You Lost"));
			}
		}, 2000)
	})
};

//lottery().then(result=> console.log(result));


///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. 
This function returns a promise which creates a new image (use document.createElement('img')) 
and sets the .src attribute to the provided image path.
 When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise.
  The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image
 (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder.
 Test the error handler by passing a wrong image path.
  Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
const wait = function(seconds){
	return new Promise(function(resolve, reject){
		setTimeout(resolve, seconds * 1000)
	});
};

const ImgContainer= document.querySelector(".images");

const createImage= function(imgPath){
	return new Promise(function(resolve,reject){
		let image = document.createElement("img");
		image.src=imgPath;
		image.onload=function(){
			image.classList.add("images");
			ImgContainer.append(image);
			resolve(image);	
		}
		image.onerror=()=>reject(new Error("There is no such image"))

	})
}

let currentImage;
 
createImage("img/img1.jpg")
	.then(image=>{
			currentImage=image;
			return wait(2);
	})
	.then(()=>{
		currentImage.style.display="none"
		return createImage("img/img-2.jpg")
	}).then(image=>{
		currentImage=image;
		return wait(2);
	}).then(()=>{
		currentImage.style.display="none"
		return createImage("img/img-3.jpg")
	}).then(image=>{
		currentImage=image;
		return wait(2);
	}).then(()=> currentImage.style.display="none")
	.catch(error=>console.error(error)) 





// AWAIT ASYNC 


const getPosition2 = function(){
	return new Promise(function(resolve, reject){
		navigator.geolocation.getCurrentPosition(resolve, reject);
	})
}

const asyncFetchThenJson = async function(url,error="Something went wrong"){
	try {
			countriesContainer.style.opacity=1
			const request= await fetch(url)
			if(!request.ok) throw new Error(error)
			return await request.json()
	} catch(error){
			renderError(error);
	}
} 

const whereAmI2 = async function(country){

		const currentPosition= await getPosition2()
		const {latitude, longitude} = currentPosition.coords
		const currentCountry = await asyncFetchThenJson(`https://geocode.xyz/${latitude},${longitude}?geoit=json`, "we are being throttled...")
		if (!currentCountry) return
		const data = await asyncFetchThenJson(`https://restcountries.com/v3.1/alpha/${currentCountry.prov}`);
		renderCountryData(data[0])
}

//whereAmI2()


const getThreeCountries = function(countries){
	try {
			let data = []

			countries.forEach(async function(countrie){
				let [current] = await asyncFetchThenJson(`https://restcountries.com/v3.1/name/${countrie}`);
				data.push(current);
			})
			return data
	} catch(error) {
		console.log(error)
	}
}
//let test = getThreeCountries(["portugal", "france", "usa"])


///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await 
(only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/







/*
	IMPORTANT !!!

	Il est possible d'utiliser les deux codes si dessous pour tester la différence entre des images chargées une par une
	et des images chargées en parallelle.
	Pour ce faire il faut juste enlever le wait(2) et ralentir la connexion.
*/

const loadNwait = async function(link){
	try {
			const image1= await createImage(link);
			await wait(2)
			image1.style.display="none"
	} catch(error){
			console.log(error);
	}
}
const load = async function(){
		await loadNwait("img/img-1.jpg");
		await loadNwait("img/img-2.jpg");
		await loadNwait("img/img-3.jpg");

		//Bizarrement, on dirait que le code si dessous await les images en paralèle mais un peu plus lentement.
		//Cette légère lenteur est possiblement dû à la forEach

		//['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'].forEach(async function(link){await loadNwait(link)})
}

//load();

const loadAll = async function(images){
	const imgs= await Promise.all(
		[createImage(images[0]),
		createImage(images[1]),
		 createImage(images[2]) ])

	imgs.map(img=>img.classList.add("paralell"))
}
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])