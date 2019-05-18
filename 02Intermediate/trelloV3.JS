let myTodos = {
    day: 'Monday',
    meetings:0,
    meetDone:0,

    addMeeting: function (num) {
        this.meetings = this.meetings + num
        return `you have ${this.meetings}`
    },
    meetingDone: function(done){
        this.meetDone = this.meetDone + done
        return `you have ${this.meetDone}`
    },
    meetReset: function() {
        this.meetDone = 0
        this.meetings = 0
        return `you have done ${this.meetDone} meet and have ${this.meetings} left`
    },
    summary: function () {
        this.meetleft = this.meetings - this.meetDone
        return `you have ${this.meetleft}`
    },
}

console.log(myTodos.addMeeting(4));
console.log(myTodos.meetingDone(3));

console.log(myTodos.summary());

console.log(myTodos.meetReset());
