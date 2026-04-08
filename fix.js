const fs = require('fs');
const filepath = 'c:\\Users\\desktop1\\Desktop\\under\\index.html';
let content = fs.readFileSync(filepath, 'utf8');

// 1. Fix hero-title double spacing
content = content.replace(/<\/span><br>/g, '</span>');

// 2. Fix hero em stroke to be more visible
content = content.replace('color: transparent;', 'color: rgba(212, 178, 84, 0.15);');
content = content.replace('-webkit-text-stroke: 1px var(--gold);', '-webkit-text-stroke: 1.5px var(--gold);');

// 3. Increase text visibility universally by elevating opacities.
content = content.replace(/rgba\(244,\s*244,\s*244,\s*(0\.\d+)\)/g, (match, p1) => {
  let val = parseFloat(p1) + 0.3;
  if(val > 1) val = 1;
  return `rgba(255, 255, 255, ${val})`; // switch to pure white string with higher alpha
});

// Also bump the noise overlay down so background isn't washing out the text
content = content.replace('opacity: 0.5;', 'opacity: 0.25;');

fs.writeFileSync(filepath, content);
console.log("Updated correctly");
