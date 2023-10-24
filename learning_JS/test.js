function makeColor(r, g, b) {
    const color = {
        this: r = r,
        this: g = g,
        this: b = b,
        rgb() {
            const { r, g, b } = this;
            return `rgb ${r}, ${g}, ${b}`
        },
    }
    return color;
}

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r,
//         color.g = g,
//         color.b = b,
//         color.rgb = function () {
//             const { r, g, b } = this;
//             return `rgb ${r}, ${g}, ${b}`
//         };
//     return color;
// }

const firstColor = new makeColor(255, 15, 36);