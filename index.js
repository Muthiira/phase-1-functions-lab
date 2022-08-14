// Code your solution in this file!
function distanceFromHqInBlocks(n) {
	return Math.abs(n - 42);
}

function distanceFromHqInFeet(n) {
	const distanceFromHqInFeet = distanceFromHqInBlocks(n) * 264;
	return distanceFromHqInFeet;
}

function distanceTravelledInFeet(start, destination) {
	if (destination > start) {
		const travel = (destination - start) * 264;
		return travel;
	}
	else
		return (start - destination) * 264;

}

function calculatesFarePrice(destination, start) {
	const travel = (destination - start) * 264;
	if (travel <= 400) {
		return 0;
	}
	else if (travel > 400 && travel <= 2000) {
		return (travel - 400)*(0.02);
	}
	else if (travel > 2000 && travel <= 2500) {
		return 25;
	}
	else {
		return "cannot travel that far";
	}
}