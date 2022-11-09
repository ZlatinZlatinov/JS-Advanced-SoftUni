function roadRadar(speed, area) {
    const motorwaySpeed = 130;
    const interstateSpeed = 90;
    const citySpeed = 50;
    const residentialSpeed = 20;

    let limit = 0;
    let res = 0;
    let speeding = false;

    switch (area) {
        case 'motorway':
            limit = motorwaySpeed;
            if (speed > motorwaySpeed) {
                res = speed - motorwaySpeed;
                speeding = true;
            } else {
                res = speed;
            }
            break;

        case 'interstate':
            limit = interstateSpeed;
            if (speed > interstateSpeed) {
                res = speed - interstateSpeed;
                speeding = true;
            } else {
                res = speed;
            }
            break;

        case 'city':
            limit = citySpeed;
            if (speed > citySpeed) {
                res = speed - citySpeed;
                speeding = true;
            } else {
                res = speed;
            }
            break;

        case 'residential':
            limit = residentialSpeed;
            if (speed > residentialSpeed) {
                res = speed - residentialSpeed;
                speeding = true;
            } else {
                res = speed;
            }
            break;
    }

    let status;
    if (speeding) {
        if (res <= 20) {
            status = 'speeding';
        } else if (res <= 40) {
            status = 'excessive speeding';
        } else if (res > 40) {
            status = 'reckless driving';
        }
        console.log(`The speed is ${res} km/h faster than the allowed speed of ${limit} - ${status}`);
    } else {
        console.log(`Driving ${res} km/h in a ${limit} zone`);
    }
} // 100/100
roadRadar(40, 'city');
roadRadar(120, 'interstate');