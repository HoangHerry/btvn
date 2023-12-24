// bt1
let bt1 = (chuoi) => {
    let mang = chuoi.split('');
    let length = mang.length; 
    let result
    if(length > 3){
        if(mang[length - 1] == 'g' && mang[length - 2] == 'n' && mang[length - 3] == 'i'){
            result = mang.join('') + 'ly'
        }
        else{
            result = mang.join('') + 'ing'

        }
    }
    else{
        result = mang.join('')
    }
    return result
}
console.log(`bt1: ${bt1('play')}`);
console.log(`bt1: ${bt1('playing')}`);
console.log(`bt1: ${bt1('go')}`);


//bt2
function bt2(input) {
    return input.replace(/./g, (character) => {
      return character === character.toUpperCase() ? character.toLowerCase() : character.toUpperCase();
    });
  }
console.log(`bt2: ${bt2('TRung NghIa')}`); 
let bt2c2 = (chuoi) => {
    let mang = chuoi.split('')
    for(let index in mang){
        if(mang[index] === mang[index].toLowerCase()){
            mang[index] = mang[index].toUpperCase()
        }
        else{
            mang[index] = mang[index].toLowerCase()
        }   
    }
    return mang.join('')
}
console.log(`bt2c2: ${bt2c2('TRung NghIa')}`)
//bt2c3
let test = []
let bt2c3 = (chuoi) => {
    let mang = chuoi.split('')
    return  mang.reduce((accumulator, char)=>{
        if (char === char.toUpperCase()) {
            accumulator.push(char.toLowerCase())
        }
        else{
            accumulator.push(char.toUpperCase())
        }
        return accumulator
    },test).join('')
}
console.log(`bt2c3: ${bt2c3('TRung NghIa')}`)
// bt2c3
let bt2c4 = (chuoi) => {
    let mang = chuoi.split('')
    return mang.map((item) => {
        if (item === item.toUpperCase()) {
            item = item.toLowerCase() 
        }
        else{
            item = item.toUpperCase()
        }
        return item
    }).join('')
}
console.log(`bt2c4 ${bt2c4('TRung NghIa')}`)
//bt3
let bt3 = (mang) => {
    return mang.filter((item) => {
        return !isNaN(item)
    })

}
console.log(`bt3: ${bt3([1, "a", 2, "b", 3])}`)
// bt4
let bt4 = (mang) => {
    let length = mang.length;
    let temp;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
          if (mang[j] > mang[j + 1]) {
            temp = mang[j];
            mang[j] = mang[j + 1];
            mang[j + 1] = temp;
          }
        }
      }
    return mang;
}
console.log(`bt4: ${bt4([1, 5, 3, 2])}`)
let bt4c2 = (mang) => {
    return mang.sort()
}
console.log(`bt4c2: ${bt4c2([1, 5, 3, 2])}`)
// bt5
let bt5 = (mang) =>{
    return mang.map((item) => {
        return item * 2
    })
}
console.log(`bt5: ${bt5([1, 2, 3])}`)
// bt6
let bt6 = (mang) => {
    return mang.filter((item) => {
        return item % 2 !== 0
    })
}
console.log(`bt6 ${bt6([1, 2, 3, 4, 5, 6, 7])}`)
// bt7
let bt7 = (mang) => {
    let result = []
    let length = mang.length
    for (let i = 0; i < length; i++) {
        if (result.indexOf(mang[i]) === -1) {
          result.push(mang[i]);
        }
      }
    return result
}
console.log(`bt7: ${bt7([1, 2, 3, 1, 2, 3, 4, 5, 3, 1, 2])}`
)