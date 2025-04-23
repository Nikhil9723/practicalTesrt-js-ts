function calculateArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    return shape.height * shape.width;
    // Implement this function to calculate the area based on shape type
}
var circle = { kind: 'circle', radius: 5 };
var rectangle = { kind: 'rectangle', width: 4, height: 6 };
console.log(calculateArea(circle)); // Should output: ~78.54 (π * 5²)
console.log(calculateArea(rectangle)); // Should output: 24 (4 * 6)
