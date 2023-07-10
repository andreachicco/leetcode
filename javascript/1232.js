/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    const coordinatesSize = coordinates.length;
    const m = calculateAngularCoeff([coordinates[0], coordinates[coordinatesSize - 1]]);

    
    for(let i = 1; i < coordinatesSize - 1; ++i) {
        const newM = calculateAngularCoeff([coordinates[0], coordinates[i]]);
        // console.log(m, newM);
        if(m !== newM) return false;
    }

    return true;
};

const calculateAngularCoeff= (coordinates) => {
    const m = ( (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]));
    // console.log(`(${coordinates[1][1]} - ${coordinates[0][1]}) / (${coordinates[1][0]} - ${coordinates[0][0]}) = ${m}`);
    return (m === -Infinity) ? Math.abs(m) : m;
}

console.log(checkStraightLine([[2,1],[4,2],[6,3]]));

//(3 - 1) / (6 - 2) = 2 / 4 = 1 / 2