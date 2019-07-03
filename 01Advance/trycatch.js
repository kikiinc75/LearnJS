const convertToRp = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 12000
    } else {
        throw Error('Ammount have to number')
    }

}

try {
    const myValue = convertToRp('five')
    console.log(myValue);

} catch (e) {
    console.log(e);

}

console.log('I will not run if  program crashes!!');
