class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
        // Count number of days from data of birth to current date

        // divide number of days by 365.25 ( accounts for leap year ever 4 years)

        // round down with floor to get whole number
        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){

        // get number of hours in numOfMins
        let hours = Math.floor(numOfMins / 60);
        // 1 hour

        // get the number of remaining minutes
        let mins = Math.floor(numOfMins % 60);
        // 3 mins

        // get the number of seconds  (mult by faction by 60 from mins )
        let secs = Math.trunc((numOfMins % 1) * 60);

        // return hours:minutes:secs
        return hours + ":" + mins + ":" + secs;

    }

}

 module.exports = PleaseStandUp;
