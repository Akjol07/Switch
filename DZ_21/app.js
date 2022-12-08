//21-01 dz2
// 1
// const arr = []
// for (let i = 0; i < 11; i++) {
//     arr.push(i)
// }
// console.log(arr)
//
// // 2
// for (let g = 20; g > 0; g--) {
//     console.log(g)
// }
//
// // 3
// const svetofor = prompt('Выберите цвет, (красный, жёлтый, зелёный)')
// switch (svetofor) {
//     case 'красный':
//         alert('Stop')
//         break
//     case 'жёлтый':
//         alert('Wait')
//         break
//     case 'зелёный':
//         alert('Go')
//         break
//     default:
//         alert('Error')
// }

// 21-03 dz2
// 1
const netflix = {
    name: 'Stranger Things',
    releaseDate: 2016,
    mainActor: 'Eleven',
    episodes: {
        season: 4,
        episode: 8
    }
}
console.log('Название сериала: ' + netflix.name + ' Дата Выхода: ' + netflix.releaseDate + ' Главный актёр: ' + netflix.mainActor + ' Сколько сезонов: ' + netflix.episodes.season + ' Сколько серии ' + netflix.episodes.episode)
//2
const week = prompt('День недели:')
switch (week) {
    case 'Monday':
    case 'monday':
        console.log('Понедельник')
        break
    case 'Tuesday':
    case 'tuesday':
        console.log('Вторник')
        break
    case 'Wednesday':
    case 'wednesday':
        console.log('Среда')
        break
    case 'Thursday':
    case 'thursday':
        console.log('Четверг')
        break
    case 'Friday':
    case 'friday':
        console.log('Пятница')
        break
    case 'Saturday':
    case 'saturday':
        console.log('Суббота')
        break
    case 'Sunday':
    case 'sunday':
        console.log('Воскресенье')
        break
    default:
        console.log('Ошибка')
}

// 21-02 dz2
// 1
const bank = {
    numberCard: "99685223652254",
    dateEnd: "2025.27.02",
    nameUser: "Akjol",
    typeOfCARD: "Банковская карта",
    CVC: 173,
};
console.log(bank);
console.log(bank.nameUser);

// 2
const bankInfo = {
    num: 54,
    nameBank: "Optima",
    schedule: "Monday-Friday",
    nowWorks: true,
    bankPlace: {
        city: "Bishek",
        street: "Manas",
        homeNum: "119",
    },
};
console.log(bankInfo);
console.log(bankInfo.bankPlace);

// 3
let CardType = prompt("Выберит следующее : Unistream,RIA,Contact,MonkeyGram");
switch (CardType) {
    case "Unistream":
        console.log("Get balance from 'Unistream'");
        break;
    case "RIA":
        console.log("Get balance from 'RIA'");
        break;
    case "Contact":
        console.log("Get balance from 'Contact'");
        break;
    case "MonkeyGram":
        console.log("Get balance from 'MonkeyGram'");
        break;

    default:
        console.warn("Invalid card 'processing'");
        break;
}

// 4
let num = Number(prompt("Введите число от 1 до 10ти"));
switch (num) {
    case 1:
        alert("1 => " + "I");
        break;
    case 2:
        alert("2 => " + "II");
        break;
    case 3:
        alert("3 => " + "III");
        break;
    case 4:
        alert("4 => " + "IV");
        break;
    case 5:
        alert("5 => " + "V");
        break;
    case 6:
        alert("6 => " + "VI");
        break;
    case 7:
        alert("7 => " + "VII");
        break;
    case 8:
        alert("8 => " + "VIII");
        break;
    case 9:
        alert("9 => " + "IX");
        break;
    case 10:
        alert("10 => " + "X");
        break;

    default:
        alert("Error");
        break;
}

//5
let customerType = Number(prompt("Введите 1 либо 2"));
customerType === 1
    ? alert("физическое лицо")
    : customerType === 2
        ? alert("юридическое лицо")
        : alert("error");