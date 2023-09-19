let user = prompt('Как вас зовут?').toLowerCase().trim()
let q = Math.floor(Math.random() * 10)
let mes = 10
let bmest = mes - q
alert(bmest + " свободные места ")
if (user[0] === 'a') {
    let age = prompt('Сколько вам лет?')
    if (age >= 20 && age <= 40) {
        let dolar = prompt('Сколько денег имеешь?')
        if (dolar >= 100) {
            let kolpe = prompt('Сколько вас')
            if (kolpe > bmest || kolpe < 0) {
                alert("Занято")
            } else { alert("Добро пожаловать") }
        }
    }
}

