/*
    shapes.js
    This is where your code goes

    Write the code to create rectangle and circle classes that extend the
    Shape class defined in shape.js. Then create a couple of other subclasses that
    render different sorts of shapes using the HTML <canvas> functions.
    http://www.w3schools.com/tags/ref_canvas.asp

    You can use either the classical or the prototypal style to create your subclasses

    After you've written the code for the sublcasses, call either registerPrototypalShape()
    or registerClassicalShape() to register your new shapes with the application. See the
    app.js file for info on these functions.
 */

/*
var Rectangle = {
    renderShape: function(canvasCtx) {canvasCtx.fillRect(this.left, this.top, this.width, this.height)}
};*/

function createRectangle(left, top, width, height, stylesMap) {
    var rectangle = createShape(left, top, width, height, stylesMap);

    rectangle.renderShape = function(canvasCtx) {canvasCtx.fillRect(this.left, this.top, this.width, this.height)};


    return rectangle;

    // Override renderShape(canvasCtx) and use the canvasCtx.fillRect() method
    // to draw the rectangle.
}

//register new shape with the system
registerPrototypalShape('Rectangle', createRectangle);

function createCircle(left, top, width, height, stylesMap) {
    var circle = createShape(left, top, width, height, stylesMap);

    circle.renderShape = function(canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.arc(left, top, width, 0, 2*Math.PI);
        canvasCtx.fill();
    };


    return circle;
}

//register new shape with the system
registerPrototypalShape('Circle', createCircle);

// rectangle that changes colors from blue to purple
function createGradient(left, top, width, height, stylesMap) {
    var gradient = createShape(left, top, width, height, stylesMap);

    gradient.renderShape = function(canvasCtx) {
        gradient = canvasCtx.createLinearGradient(left, top, (left + width + 50), (top + height + 50));
        gradient.addColorStop(0, 'blue');
        gradient.addColorStop(1, 'purple');

        canvasCtx.fillStyle = gradient;
        canvasCtx.fillRect(this.left, this.top, this.width, this.height);
    };


    return gradient;

    // Override renderShape(canvasCtx) and use the canvasCtx.fillRect() method
    // to draw the rectangle.
}

//register new shape with the system
registerPrototypalShape('Gradient', createGradient);