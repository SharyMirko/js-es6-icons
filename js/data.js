const arrIcon = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
const arrTypeIcon = []
/* Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente. */
const containerIcon = document.getElementById('container');
const selectType = document.getElementById('icon-type');
const iconUser = []
const iconAnimal = []
const iconVegetable = []

arrIcon.forEach(ele => {
	if(!arrTypeIcon.includes(ele.type)) {
		arrTypeIcon.push(ele.type)
	}
})

for (i = 0; i < arrIcon.length; i++){
	if(arrIcon[i].type == 'animal') {
		iconAnimal.push(arrIcon[i])
	} else if(arrIcon[i].type == 'vegetable') {
		iconVegetable.push(arrIcon[i])
	} else if(arrIcon[i].type == 'user') {
		iconUser.push(arrIcon[i])
	}
}

for (let i = 0; i < arrTypeIcon.length; i++){
	selectType.innerHTML += `<option value="${arrTypeIcon[i]}">${arrTypeIcon[i]}</option>`
}

for(let i = 0; i < arrIcon.length; i++) {
	containerIcon.innerHTML += `<div class="icon-box"><i class="${arrIcon[i].family} ${arrIcon[i].prefix}${arrIcon[i].name}" style="color: ${arrIcon[i].color}"></i></div>`
};

selectType.addEventListener('change', typeSwitch)

function typeSwitch() {
	containerIcon.innerHTML = ''
	if(selectType.value == 'animal') {
		for (let i in iconAnimal) {
			containerIcon.innerHTML += `<div class="icon-box"><i class="${iconAnimal[i].family} ${iconAnimal[i].prefix}${iconAnimal[i].name}" style="color: ${iconAnimal[i].color}"></i></div>`
		}
	} else if (selectType.value == 'vegetable') {
		for (let i in iconVegetable) {
			containerIcon.innerHTML += `<div class="icon-box"><i class="${iconVegetable[i].family} ${iconVegetable[i].prefix}${iconVegetable[i].name}" style="color: ${iconVegetable[i].color}"></i></div>`
		}
	} else if(selectType.value == 'user') {
		for (let i in iconUser) {
			containerIcon.innerHTML += `<div class="icon-box"><i class="${iconUser[i].family} ${iconUser[i].prefix}${iconUser[i].name}" style="color: ${iconUser[i].color}"></i></div>`
		}
	} else {
		for(let i = 0; i < arrIcon.length; i++) {
			containerIcon.innerHTML += `<div class="icon-box"><i class="${arrIcon[i].family} ${arrIcon[i].prefix}${arrIcon[i].name}" style="color: ${arrIcon[i].color}"></i></div>`
		};
	}
}
