const passwordChars = [
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ..."abcdefghijklmnopqrstuvwxyz",
    ..."0123456789",
    ..."!@#$%^&*()-_=+[]{}|;:'\",.<>?/~"
];

const passSize = document.getElementById("pass_size")
let p1 = document.getElementById("pass1")
let p2 = document.getElementById("pass2")


function randomPass()
{
    const s = passSize.valueAsNumber
    let pass = ""
    for (let i = 0; i < s; i++) {
        pass+=passwordChars[Math.floor(Math.random()*passwordChars.length)]
    }

    return pass
}
function generate()
{
    p1.textContent = randomPass()
    p2.textContent = randomPass()
}

p1.addEventListener("click",copy1)

function copy1()
{
    const txt = p1.textContent

    navigator.clipboard.writeText(txt)

}

p2.addEventListener("click",copy2)

function copy2()
{
    const txt = p2.textContent

    navigator.clipboard.writeText(txt)
}