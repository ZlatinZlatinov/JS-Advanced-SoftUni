function timeToWalk(steps, footprintLength, speedKm) {
    let distanceMeters = steps * footprintLength; 
    let speedMs = speedKm / 3.6; 
    let time = distanceMeters / speedMs; 
    let rest = Math.floor(distanceMeters / 500); 

    let timeMin = Math.floor(time / 60); 
    let timeSec = Math.round(time - timeMin * 60); 
    let timeHr = Math.floor(time / 3600); 

    console.log((timeHr < 10 ? '0' : '') + timeHr + ':' + (timeMin + rest < 10 ? '0' : '') + (timeMin + rest) + ':' + (timeSec < 10 ? '0' : '') + timeSec);
} // 100/100
timeToWalk(4000, 0.60, 5);