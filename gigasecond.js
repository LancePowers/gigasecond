function Gigasecond(date) {
    this.birthday = date;
}

Gigasecond.prototype.date = function () {
    var birthSeconds = this.birthday.getTime();
    var seconds = birthSeconds + 1000000000000;
    var result = new Date(seconds);
    result.setHours(0);
    result.setMinutes(0);
    result.setSeconds(0);
    result.setMilliseconds(0);
    return result;
}

module.exports = Gigasecond