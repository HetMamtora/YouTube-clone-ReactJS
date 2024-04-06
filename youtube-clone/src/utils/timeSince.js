export const timeSince = (date) => {

    const second = Math.floor((new Date().valueOf() - date.valueOf())/1000);

    //Calculate in Years
    let interval = second/31536000;
    if(interval >1){
        return Math.floor(interval) + "years";
    }

    //Calculate in Months
    interval = second/2592000;
    if(interval>1){
        return Math.floor(interval) +"months";
    }

    //Calculate in Days
    interval = second/86400;
    if(interval>1){
        return Math.floor(interval) + "days";
    }

    //Calculate in Hours
    interval = second/3600;
    if(interval>1){
        return Math.floor(interval) + "hours";
    }

    //Calculate in Minutes
    interval = second/60;
    if(interval>1){
        return Math.floor(interval) + "minutes";
    }

    return Math.floor(second) + "seconds";
};