let count = 0

console.log(count)

let countEl = document.getElementById("count")
let saveEl = document.getElementById("save")

function increment()
{
    count += 1
    countEl.innerText = count
}
function increment5()
{
    count += 5
    countEl.innerText = count
}
function increment10()
{
    count += 10
    countEl.innerText = count
}
function increment15()
{
    count = count + 15
    countEl.innerText = count
}

function save()
{
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
}

// function clear()
// {
// }