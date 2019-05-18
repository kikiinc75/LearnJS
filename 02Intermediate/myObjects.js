let myYoutubeVideoOne = {
    title: 'Loopes in Javascript',
    videoLength: 15,
    videoCreator: 'iqbal',
    videoDescription: 'this is video description and a long one'

}
let myYoutubeVideoTwo = {
    title: 'Loopes in Javascript',
    videoLength: 10,
    videoCreator: 'iqbal',
    videoDescription: 'this is video description and a long one'

}
//console.log(myYoutubeVideo)

//console.log(`hey it's new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);



// //assignment
// let JavascriptCourse = {
//     name: 'Javascript for newbie',
//     price: 1000,
//     description: 'for newbie'
// }
// console.log(`hey there is a new course ${JavascriptCourse.name} the price is ${JavascriptCourse.price} and the description is ${JavascriptCourse.description}`);

// JavascriptCourse.description = 'wew'
// console.log(`hey there is a new course ${JavascriptCourse.name} the price is ${JavascriptCourse.price} and the description is ${JavascriptCourse.description}`);


let changeVideoLength = function(myObject){
    return {
        formatOne: `time of this video is: ${myObject.videoLength + 2}`,    
        formatTwo: `time of this video is: ${myObject.videoLength + 1}`
    }
}
let adOne = changeVideoLength(myYoutubeVideoOne)
console.log(adOne.formatOne);