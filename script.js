let contain = document.getElementById("contain")



let Alink = document.getElementById("Alink")

Alink.addEventListener("click", function () {
    console, console.log("click skill");

    contain.innerHTML = `
    <ul>
                    <li>Ui/Ux</li>
                    <p>Designing web /App interFaces </p>
                    <li>Web developer</li>
                    <p>Web app development </p>
                    <li>APP develope</li>
                    <p>Building Android/ios app </p>
                </ul>
    
    `

})


let blink = document.getElementById("blink")

blink.addEventListener("click", function () {
    console, console.log("click Experience");
    contain.innerHTML = `
    <ul>
                    <li>2022-currunt</li>
                    <p>ui/ux Design Traning at Et institute </p>
                    <li>2019-2022</li>
                    <p>Team lead at Starapp LLc</p>
                    <li>2019-2017</li>
                    <p>ui/ux Design Executive at Coin Digital Ltd</p>
                     <li>2017-2016</li>
                    <p>Internship at ekart eCommer</p>
                </ul>
    
    `

})


let clink = document.getElementById("clink")

clink.addEventListener("click", function () {
    console, console.log("click Education");
    contain.innerHTML = `
    <ul>
                    <li>2016</li>
                    <p>ui/ux Design Traning at Et institute </p>
                    <li>2016</li>
                    <p>MBA From MIT Bangolor</p>
                    <li>2014</li>
                    <p>BBA From ISM Bangolor</p>
                </ul>
    
    `


})



