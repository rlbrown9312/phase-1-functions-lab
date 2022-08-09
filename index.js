function distanceFromHqInBlocks(start) {
    const hQ = 42
    if (start > hQ) {
        return start - hQ;
    } else if (start < hQ) {
        return hQ - start ;
    }      
}

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(start) {
    const oneBlockInFeet = 264;
        const hQ = 42
        if (start > hQ) {
            return (start - hQ) * oneBlockInFeet; 
        } else if (start < hQ) {
            return (hQ - start) * oneBlockInFeet;
    }
           
}

console.log(distanceFromHqInFeet(50))

function distanceTravelledInFeet(start, destination) {
    const oneBlockInFeet = 264;
        if (start > destination) {
            return (start - destination) * oneBlockInFeet;
        } else if (start < destination) {
            return (destination - start) * oneBlockInFeet

    }
}



function calculatesFarePrice(start, destination) {
    const oneBlockInFeet = 264
    const costPerFeet = 0.02;
    const distanceTravelled = distanceTravelledInFeet(start, destination);
        if (distanceTravelled <= 400) {
            return 0;
        } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
            return (distanceTravelled - 400) * 0.02;
        } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
            return 25;
        } else if (distanceTravelled > 2500) { 
            return "cannot travel that far"
    }
}


