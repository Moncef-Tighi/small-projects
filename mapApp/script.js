'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class Workout{
	date = new Date;
	id = (Date.now()+"").slice(-10);
	type=inputType.value;
	constructor(cords){
		//On réccupére directement les informations depuis les inputs sans les passer en paramètre.
		//C'était pas idéal finalement parce que c'est beaucoup plus chiant de valider les données
		this.distance=inputDistance.value;
		this.duration=inputDuration.value;
		this.cords=cords; //[Latitude, Longitude]
	}

	_setDescription(){
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		this.description= `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
	}
}

class Running extends Workout {
	constructor(cords){
		super(cords)
		this.cadence=inputCadence.value;
		this.calcPace();
		this._setDescription();
	}
	calcPace(){
		this.pace= this.duration/this.distance;
		return this.pace;
	}

}

class Cycling extends Workout {
	constructor(cords){
		super(cords)
		this.elevation=inputElevation.value;
		this.calcSpeed();
		this._setDescription();
	}
	calcSpeed(){
		this.speed=this.distance/this.duration;
		return this.speed
	}
}




class App {

	Workouts= [];
	map;
	mapEvent;

	constructor(){
		//Constructor est appelé quand un nouveau objet est appelé
		this._getPosition();

		//Vu qu'on aura toujours besoin d'event Listeners, on les attach directement au constructeur.
		inputType.addEventListener("change", this._toggleElevationField);

		form.addEventListener("submit", this._newWorkout.bind(this));

		containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));

		this._getStoredItems();
	}

	_getStoredItems(){
		let data= JSON.parse(localStorage.getItem("workout"));
		if (!data) return;
		this.Workouts=data;
	}

	_getPosition(){

		navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function(erreur){
				alert(erreur.message);
			})

	}

	_loadMap(position){
		const {latitude,longitude} = position.coords
		this.map = L.map('map').setView([latitude,longitude], 16);

		L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.map);

		this.map.on("click", this._showForm.bind(this))

		//Todo : Mettre ça ailleurs ? 
		this.Workouts.forEach(work=> {
			this._renderMarker(work)
			this._renderWorkout(work)
		})

	}

	_showForm(mapE){
		this.mapEvent=mapE;
		form.classList.remove("hidden");
		inputDistance.focus();

	}

	_toggleElevationField(){
		inputCadence.parentElement.classList.toggle("form__row--hidden");
		inputElevation.parentElement.classList.toggle("form__row--hidden");
	}

	_newWorkout(event){
		event.preventDefault();
		let {lat,lng}=this.mapEvent.latlng;
		let workout;

		if (inputType.value=="running"){
			workout= new Running([lat,lng]);
		} else {
			workout= new Cycling([lat,lng]);
		}

		this.Workouts.push(workout)

		this._renderMarker(workout)
		this._renderWorkout(workout)
		this._hideForm()
		this._setLocalStorage()

	}

	_hideForm(){
		inputDistance.value=inputDuration.value=inputCadence.value=inputElevation.value=""
		form.style.display="none";
		form.classList.add("hidden");
		setTimeout( ()=>form.style.display="grid", 500);

	}

	_setLocalStorage(){
		this.reset()
		localStorage.setItem("workout", JSON.stringify(this.Workouts))
	}

	_renderMarker(workout){
		const options= {
			maxWidth: 250,
			minWidth: 100,
			autoClose:false,
			closeOnClick:false,
			className:`${workout.type}-popup`
		}
		let htmlContent=`${workout.type === "running" ? "🏃" : "🚴" } ${workout.description}`;
		L.marker(workout.cords).addTo(this.map).bindPopup(L.popup(options)).setPopupContent(htmlContent).openPopup();
	}

	_renderWorkout(workout){
		//C'est du pur HTML ici, on crée juste l'HTML de la case qui apparait à chaque nouveau workout

		let html=`<li class="workout workout-^${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === "running" ? "🏃" : "🚴" }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          `

  if (workout.type=="running"){
			html+=`
				<div class="workout__details">
		            <span class="workout__icon">⚡️</span>
		            <span class="workout__value">${workout.pace.toFixed(1)}</span>
		            <span class="workout__unit">min/km</span>
	          	</div>
	          	<div class="workout__details">
		            <span class="workout__icon">🦶🏼</span>
		            <span class="workout__value">${workout.cadence}</span>
		            <span class="workout__unit">spm</span>
	          	</div>
        	</li>`
		} else {
			html+=`	
	          <div class="workout__details">
	            <span class="workout__icon">⚡️</span>
	            <span class="workout__value">${workout.speed.toFixed(1)}</span>
	            <span class="workout__unit">km/h</span>
	          </div>
	          <div class="workout__details">
	            <span class="workout__icon">⛰</span>
	            <span class="workout__value">${workout.elevation}</span>
	            <span class="workout__unit">m</span>
	          </div>
	        </li> 
			`
		}
          


		form.insertAdjacentHTML("afterend", html)
	}

	_moveToPopup(event){
		let current= event.target.closest(".workout");
		if (current===null) return;

		let element = this.Workouts.find(work=> work.id===current.dataset.id)		
		this.map.setView(element.cords);
	}

	reset(){
		localStorage.removeItem("workout");
		location.reload();
	}

}


const app= new App(); 


/* AVANT LE REFACTORING EN OOP
let map;
let mapEvent;

navigator.geolocation.getCurrentPosition(function(position){

	const {latitude,longitude} = position.coords
	
	//const link = `https://www.google.pt/maps/@${latitude},${longitude}`;
	
	map = L.map('map').setView([latitude,longitude], 16);
	L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	map.on("click", function(mapE){
		mapEvent=mapE;
		form.classList.remove("hidden");
		inputDistance.focus();
	})

	}, function(erreur){
		alert(erreur.message);
	})


form.addEventListener("submit", function(event) {

	event.preventDefault();
	let {lat,lng}=mapEvent.latlng;
	const options= {
			maxWidth: 250,
			minWidth: 100,
			autoClose:false,
			closeOnClick:false,
			className:"running-popup"
		}

	let Workout=
	L.marker([lat,lng]).addTo(map).bindPopup(L.popup(options)).setPopupContent("Workout").openPopup();
	inputDistance.value=inputDuration.value=inputCadence.value=inputElevation.value=""
	//form.classList.add("hidden");

})

inputType.addEventListener("change", function(){
	inputCadence.parentElement.classList.toggle("form__row--hidden");
	inputElevation.parentElement.classList.toggle("form__row--hidden");
})


*/