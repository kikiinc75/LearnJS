function name(currentMark,totalMark){
    myPercent = (currentMark/totalMark) * 100
    myGrade = ''
    if (myPercent > 90) {
        myGrade = 'A'
    }else if (myPercent > 80) {
        myGrade = 'B'
    }else if (myPercent > 70) {
        myGrade = 'C'
    }else if (myPercent > 60) {
        myGrade = 'D'
    }else{
        myGrade = 'E'
    }
    return `Your score is ${myPercent}% you got ${myGrade}`
     
}

console.log(name(70,100));
 