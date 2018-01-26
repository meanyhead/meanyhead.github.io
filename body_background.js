// the page this is loaded on must load randomColor.js beforehand
var random_color1 = randomColor({luminosity: 'dark', hue: 'blue'});
var random_color2 = randomColor({luminosity: 'light', hue: 'yellow'});
var gradient_string = 'linear-gradient(to bottom right, ' + random_color1 + ', ' + random_color2 + ')';
document.body.style.background = gradient_string;