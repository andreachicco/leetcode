/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = function(path) {
    
    const coordinates = {x: 0, y: 0};
    const points = [{x: coordinates.x, y: coordinates.y}];
    const directions = {
        N: {
            axe: "y",
            value: 1
        },
        E: {
            axe: "x",
            value: 1
        },
        S: {
            axe: "y",
            value: -1
        },
        W: {
            axe: "x",
            value: -1
        }
    }

    for(let i = 0; i < path.length; ++i) {
        const value = directions[path[i]].value;
        coordinates[directions[path[i]].axe] += value;
        
        const pointCrossed = points.find(point => point.x === coordinates.x && point.y === coordinates.y);
        if(pointCrossed) return true; 
        
        points.push({x: coordinates.x, y: coordinates.y});
    }

    return false;
};

console.log(betterIsPathCrossing("NENWS"));