let r, g, b;


function sortColorsByHue(colors) {
  // Convert the color strings to HSL values
  const hslColors = colors.map(color => {
    const rgb = hexToRgb(color);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    return hsl;
  });

  // Sort the colors by hue (first element in HSL array)
  hslColors.sort((a, b) => a[0] - b[0]);

  // Convert the sorted HSL values back to color strings
  const sortedColors = hslColors.map(hsl => {
    const rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    return hex;
  });

  return sortedColors;
}

// Helper function to convert a hex color string to an RGB object
function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

// Helper function to convert RGB values to HSL values
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h, s, l];
}

// Helper function to convert HSL values to RGB values
function hslToRgb(h, s, l) {
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s
  }}


  const colors = [
    "#ff0000",
    "#ff3300",
    "#ff6600",
    "#ff9900",
    "#ffcc00",
    "#ffff00",
    "#ccff00",
    "#99ff00",
    "#66ff00",
    "#33ff00",
    "#00ff00",
    "#00ff33",
    "#00ff66",
    "#00ff99",
    "#00ffcc",
    "#00ffff",
    "#00ccff",
    "#0099ff",
    "#0066ff",
    "#0033ff",
    "#0000ff",
    "#3300ff",
    "#6600ff",
    "#9900ff",
    "#cc00ff",
    "#ff00ff",
    "#ff00cc",
    "#ff0099",
    "#ff0066",
    "#ff0033",
    "#000000",
    "#333333",
    "#666666",
    "#999999",
    "#cccccc",
    "#ffffff",
    "#ff99cc",
    "#ff6666",
    "#ff9933",
    "#ffcc66",
    "#ffff99",
    "#ccff99",
    "#99ff99",
    "#66ff99",
    "#33ff99",
    "#33ffcc",
    "#33ffff",
    "#33ccff",
    "#3399ff",
    "#3366ff",
    "#3333ff",
    "#6600cc",
    "#993399",
    "#cc6699",
    "#ff3399",
    "#ff99ff",
    "#ffccff",
    "#99ccff",
    "#6699ff",
    "#3366cc",
    "#6666cc",
    "#9933cc",
    "#cc99cc",
    "#ffcc99",
    "#ffffcc",
    "#ccffcc",
    "#99cc99",
    "#669966",
    "#336633",
    "#003300",
    "#003333",
    "#003366",
    "#003399",
    "#0033cc",
    "#0033ff",
    "#0066cc",
    "#0099cc",
    "#00cccc",
    "#00ffff",
    "#99ffff",
    "#ccffff",
    "#ccccff",
    "#9999cc",
    "#666699",
    "#333366",
    "#000033",
    "#330033",
    "#660033",
    "#990033",
    "#cc0033",
    "#ff0033",
    "#ff3366",
    "#ff6666",
    "#ff9966",
    "#ffcc00",
    "#ffff66",
    "#ccff66",
    "#99ff66",
    "#66ff66",
    "#66ffcc",
    "#66ffff",
    "#66ccff",
    "#9999ff",
    "#9966cc",
    "#660066",
    "#333333",
    "#000000",
    "#330000",
    "#660000",
    "#990000",
    "#cc0000",
    "#ff6666",
    "#ffcccc",
    "#ff9999",
    "#ffcc99",
    "#ffff99",
    "#ccff33",
  ]
  
  for (let i = 0; i < colors.length; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = colors[i];
    div.style.width = "50px";
    div.style.height = "50px";
    document.body.appendChild(div);
  }
  
// const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', /* add more colors as needed... */];

// // Sort colors by hue
// colors.sort((a, b) => {
//   const hueA = hueFromColor(a);
//   const hueB = hueFromColor(b);
//   return hueA - hueB;
// });

// // Get hue from color
// function hueFromColor(color) {
//   const [r, g, b] = hexToRgb(color);
//   const max = Math.max(r, g, b);
//   const min = Math.min(r, g, b);
//   let hue;

//   if (max === min) {
//     hue = 0;
//   } else if (max === r) {
//     hue = 60 * ((g - b) / (max - min));
//   } else if (max === g) {
//     hue = 60 * ((b - r) / (max - min)) + 120;
//   } else {
//     hue = 60 * ((r - g) / (max - min)) + 240;
//   }

//   if (hue < 0) {
//     hue += 360;
//   }

//   return hue;
// }

// // Convert hex color to RGB values
// function hexToRgb(color) {
//   const hex = color.replace('#', '');
//   const r = parseInt(hex.substring(0, 2), 16);
//   const g = parseInt(hex.substring(2, 4), 16);
//   const b = parseInt(hex.substring(4, 6), 16);
//   return [r, g, b];
// }


// if (max === min) {
//   hue = 0;
// } else if (max === r) {
//   hue = 60 * ((g - b) / (max - min));
// } else if (max === g) {
//   hue = 60 * ((b - r) / (max - min)) + 120;
// } else {
//   hue = 60 * ((r - g) / (max - min)) + 240;
// }

// if (hue < 0) {
//   hue += 360;
// }
