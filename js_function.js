// function consoleTool () {
//     console.log('함수를 실행했습니다.')
// };
const messageContainer = document.querySelector('#dDaymessage');
const container = document.querySelector('#dDayContainer');

// container.style.display = 'none';
messageContainer.innerHTML = '<h3>D-day를 입력해주세요.</h3>';

// const arr = [1, 2, 3];
// console.log('arr === [1, 2, 3]', arr === [1, 2, 3])
//
// let name = 'jason'
// const obj = {
//     name : 'jason',
//     age : 25
// }
//
// if(name === 'jason'){
//     console.log('Hi, Jason')
// }

// if (obj.name === 'peter') {
//     console.log('안녕, ' + obj.name)
// } else if (obj.name === 'jason') {
//     console.log('반가워, ' + obj.name)
// } else {
//     console.log('your not peter')
// }

// if (obj.name === 'peter' || obj.name === 'jason') {
//     console.log('안녕, ' + obj.name)
// } else {
//     console.log('your not peter')
// }
//
// if (obj.name === 'jason' && obj.age >= 25) {
//     console.log('안녕, ' + obj.name)
// } else {
//     console.log('your not peter')
// }

function dateForMaker () {
    const inputYear = document.querySelector('#targetYearInput').value;
    const inputMonth = document.querySelector('#targetMonthInput').value;
    const inputDate = document.querySelector('#targetDateInput').value;

    // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
    return dateFormat;
    // console.log(inputYear, inputMonth, inputDate);
}

function counterMaker () {
    const targetDateInput = dateForMaker();
    const nowDate = new Date();
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
    const reming = (targetDate - nowDate) / 1000;

    // 만약 reming이 0이라면, 타이머가 종료 되었습니다. 출력. ---> 수도코드
    if (reming <= 0) {
        messageContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>'
    } else if (isNaN(reming)) {
        messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>'
        // 만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력.
    };

    const remingObj = {
        remingDate : Math.floor(reming / 3600 / 24),
        remingHours : Math.floor(reming / 3600) % 24,
        remingMin : Math.floor(reming / 60) % 60,
        remingSec : Math.floor(reming) % 60
    };

    const documentObj = {
        days : document.querySelector('#days'),
        hours : document.querySelector('#hours'),
        min : document.querySelector('#min'),
        sec : document.querySelector('#sec')
    };

    const timeKeys = Object.keys(remingObj);
    const docKeys = Object.keys(documentObj);

    // for (let i = 0; i < timeKeys.length; i = i + 1) {
    //     documentObj[docKeys[i]].textContent = remingObj[timeKeys[i]];
    // }; //---> for문 사용방법

    let i = 0;
    for (let key in documentObj) {
        // console.log(documentObj[key], key)
        documentObj[key].textContent = remingObj[timeKeys[i]];
        //i = i + 1;
        i++;
    };

    // for - in : 오브젝트의 프로퍼티들의 키들을 정해진 변수명으로 받아온다.

    // documentObj['days'].innerHTML = remingObj['remingDate'];
    // documentObj['hours'].innerHTML = remingObj['remingHours'];
    // documentObj['min'].innerHTML = remingObj['remingMin'];
    // documentObj['sec'].innerHTML = remingObj['remingSec'];

};