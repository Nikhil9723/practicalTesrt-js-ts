type Shape = 
  | { kind: 'circle'; radius: number } 
  | { kind: 'rectangle'; width: number; height: number };

function calculateArea(shape: Shape): number {
    if(shape.kind === "circle") {
        return Math.PI*shape.radius*shape.radius;
    }
    return shape.height * shape.width
  // Implement this function to calculate the area based on shape type
}

const circle: Shape = { kind: 'circle', radius: 5 };
const rectangle: Shape = { kind: 'rectangle', width: 4, height: 6 };

console.log(calculateArea(circle));    // Should output: ~78.54 (π * 5²)
console.log(calculateArea(rectangle)); // Should output: 24 (4 * 6)