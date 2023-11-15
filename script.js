const moves = document.getElementById('moves-count');
const timer = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const gameContainer = document.querySelector('.game-container');
const result = document.getElementById('result');
const controls = document.querySelector('.controls');
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//Items array
const items = [
	{name:"bee", image:".\images\bee.png"},
	{name:"anaconda", image:".\images\anaconda.png"},
	{name:"chameleon", image:".\images\chameleon.png"},
	{name:"cockatoo", image:".\images\cockatoo.png"},
	{name:"crocodile", image:".\images\crocodile.png"},
	{name:"gorilla", image:".\images\gorilla.png"},
	{name:"macaw", image:".\images\macaw.png"},
	{name:"monky", image:".\images\monky.png"},
	{name:"piranha", image:".\images\piranha.png"},
	{name:"sloth", image:".\images\sloth.png"},
	{name:"tiger", image:".\images\tiger.png"},
	{name:"toucan", image:".\images\toucan.png"}
];

//Initial time
const timeGenerator = () + +> {
	seconds += 1;
//minutes logic


}