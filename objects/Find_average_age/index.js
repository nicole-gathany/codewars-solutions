function getAverageAge(list) {
    return Math.round(list.reduce((total, cumm) => (total + cumm.age), 0)/list.length);
}