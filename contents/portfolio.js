const num_imgs = 18


let row1_imgs = ""
let row2_imgs = ""

for (let i = 1; i < num_imgs+1; i++) {
	if(i%2 != 0) {
		row1_imgs += `<img class="portfolioimg" onclick="fullimg(this)" src="../previews/` + i + `.jpg">`
	} else {
		row2_imgs += `<img class="portfolioimg" onclick="fullimg(this)" src="../previews/` + i + `.jpg">`
	}
}

const portfolio = `
<div class="portfolio">
	<div class="imgrow">` +
		//FLEX ROW 1 IMGS (ODD)
		row1_imgs +
`	</div>
	<div class="imgrow">` +
		//FLEX ROW 2 IMGS (EVEN)
		row2_imgs +
`	</div>
</div>`

document.addEventListener('wheel', (event) => {
	if(!event.shiftKey) {
		document.getElementById("content").scrollBy(event.deltaY/2, 0)
	}
})

function fullimg (element) {
	let filename = element.src.split("/").slice(-1)[0]
	console.log(filename)
	let fs = document.getElementById("fullscreen")
	fs.style.zIndex = "100"
	fs.innerHTML = `<img class="fullimg" onclick="closefullimg()" src="img/` + filename + `">` 
}

function closefullimg () {
	let fs = document.getElementById("fullscreen")
	fs.innerHTML = ""
	fs.style.zIndex = "-10"
}