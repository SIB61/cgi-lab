var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var white = [255, 255, 255];

function setPixel(x, y, color = white) {
  var imageData = context.createImageData(1, 1);
  var data = imageData.data;
  data[0] = color[0]; // Red component
  data[1] = color[1]; // Green component
  data[2] = color[2]; // Blue component
  data[3] = 255; // Alpha component (255 for fully opaque)
  context.putImageData(imageData, x, y);
}

export function drawDDALine(x1, y1, x2, y2, color) {
  var dx = x2 - x1;
  var dy = y2 - y1;

  var steps = Math.max(Math.abs(dx), Math.abs(dy));

  var xIncrement = dx / steps;
  var yIncrement = dy / steps;

  var x = x1;
  var y = y1;

  for (var i = 0; i <= steps; i++) {
    setPixel(Math.round(x), Math.round(y), color);
    x += xIncrement;
    y += yIncrement;
  }
}

export function drawBresenhamLine(x1, y1, x2, y2, color) {
  var dx = Math.abs(x2 - x1);
  var dy = Math.abs(y2 - y1);
  var sx = x1 < x2 ? 1 : -1;
  var sy = y1 < y2 ? 1 : -1;
  var err = dx - dy;

  while (true) {
    setPixel(x1, y1, color);

    if (x1 === x2 && y1 === y2) {
      break;
    }

    var e2 = 2 * err;

    if (e2 > -dy) {
      err -= dy;
      x1 += sx;
    }

    if (e2 < dx) {
      err += dx;
      y1 += sy;
    }
  }
}

export function drawBresenhamCircle(centerX, centerY, radius, color) {
  var x = radius;
  var y = 0;
  var err = 0;

  while (x >= y) {
    setPixel(centerX + x, centerY + y, color);
    setPixel(centerX + y, centerY + x, color);
    setPixel(centerX - y, centerY + x, color);
    setPixel(centerX - x, centerY + y, color);
    setPixel(centerX - x, centerY - y, color);
    setPixel(centerX - y, centerY - x, color);
    setPixel(centerX + y, centerY - x, color);
    setPixel(centerX + x, centerY - y, color);

    y++;

    if (err <= 0) {
      err += 2 * y + 1;
    }

    if (err > 0) {
      x--;
      err -= 2 * x + 1;
    }
  }
}

export function drawMidpointCircle(centerX, centerY, radius, color) {
  var x = radius;
  var y = 0;
  var decision = 1 - radius;

  while (x >= y) {
    setPixel(centerX + x, centerY + y, color);
    setPixel(centerX + y, centerY + x, color);
    setPixel(centerX - y, centerY + x, color);
    setPixel(centerX - x, centerY + y, color);
    setPixel(centerX - x, centerY - y, color);
    setPixel(centerX - y, centerY - x, color);
    setPixel(centerX + y, centerY - x, color);
    setPixel(centerX + x, centerY - y, color);

    y++;

    if (decision <= 0) {
      decision += 2 * y + 1;
    } else {
      x--;
      decision += 2 * (y - x) + 1;
    }
  }
}

export function drawUpperHalfCircle(centerX, centerY, radius, color) {
  var x = radius;
  var y = 0;
  var decision = 1 - radius;

  while (x >= y) {
    setPixel(centerX + x, centerY - y, color);
    setPixel(centerX + y, centerY - x, color);
    setPixel(centerX - y, centerY - x, color);
    setPixel(centerX - x, centerY - y, color);

    y++;

    if (decision <= 0) {
      decision += 2 * y + 1;
    } else {
      x--;
      decision += 2 * (y - x) + 1;
    }
  }
}

export function drawLeftHalfCircle(centerX, centerY, radius, color) {
  var x = radius;
  var y = 0;
  var decision = 1 - radius;

  while (x >= y) {
    setPixel(centerX - x, centerY - y, color);
    setPixel(centerX - y, centerY - x, color);
    setPixel(centerX - y, centerY + x, color);
    setPixel(centerX - x, centerY + y, color);

    y++;

    if (decision <= 0) {
      decision += 2 * y + 1;
    } else {
      x--;
      decision += 2 * (y - x) + 1;
    }
  }
}

export function drawRightHalfCircle(centerX, centerY, radius, color) {
  var x = radius;
  var y = 0;
  var decision = 1 - radius;

  while (x >= y) {
    setPixel(centerX + x, centerY - y, color);
    setPixel(centerX + y, centerY - x, color);
    setPixel(centerX + y, centerY + x, color);
    setPixel(centerX + x, centerY + y, color);

    y++;

    if (decision <= 0) {
      decision += 2 * y + 1;
    } else {
      x--;
      decision += 2 * (y - x) + 1;
    }
  }
}

export function drawBottomHalfCircle(centerX, centerY, radius, color) {
  var x = radius;
  var y = 0;
  var decision = 1 - radius;

  while (x >= y) {
    setPixel(centerX + x, centerY + y, color);
    setPixel(centerX + y, centerY + x, color);
    setPixel(centerX - y, centerY + x, color);
    setPixel(centerX - x, centerY + y, color);

    y++;

    if (decision <= 0) {
      decision += 2 * y + 1;
    } else {
      x--;
      decision += 2 * (y - x) + 1;
    }
  }
}

export function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
