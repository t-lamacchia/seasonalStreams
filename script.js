console.log('Hello!');
const todaysDate = () => {
    let d = new Date();
    return "Today's date is " + d
}

const dateblock = document.getElementById("dateblock")
dateblock.innerText = todaysDate();


const body = document.body
const d = new Date();

if(d.getHours()> 20 || d.getHours()< 8){
    body.style["backgroundColor"] = "black";
    body.style["color"] = "white";
}else {
    body.style["backgroundColor"] = "white";
    body.style["color"] = "black";
}


const writeTableRow = (table, movies) => {
    const newRow = table.insertRow ();

    newRow.innerHTML = `<tr id=${movie.name}>
    <td>${movie.name}</td>
    td>${movie.rating}</td>
    td>${movie.name}</td>
    `
}