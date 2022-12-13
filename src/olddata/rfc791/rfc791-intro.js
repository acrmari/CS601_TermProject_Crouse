var imgs = new Array(); var imgcnt = 0; var thisimg = 0;
imgs[imgcnt++] = 'rfc791-005.GIF';
imgs[imgcnt++] = 'rfc791-006.GIF';
imgs[imgcnt++] = 'rfc791-007.GIF';
imgs[imgcnt++] = 'rfc791-008.GIF';
imgs[imgcnt++] = 'rfc791-009.GIF';
imgs[imgcnt++] = 'rfc791-011.GIF';
imgs[imgcnt++] = 'rfc791-013.GIF';
imgs[imgcnt++] = 'rfc791-015.GIF';
imgs[imgcnt++] = 'rfc791-017.GIF';
imgs[imgcnt++] = 'rfc791-018.GIF';
imgs[imgcnt++] = 'rfc791-019.GIF';
imgs[imgcnt++] = 'rfc791-021.GIF';
imgs[imgcnt++] = 'rfc791-023.GIF';
imgs[imgcnt++] = 'rfc791-025.GIF';
imgs[imgcnt++] = 'rfc791-026.GIF';
imgs[imgcnt++] = 'rfc791-027.GIF';
imgs[imgcnt++] = 'rfc791-028.GIF';

var towerex = new Array(); var towerexcnt = 0; var thistowerex = 0;
towerex[towerexcnt++] = 'rfc791-029.GIF';
towerex[towerexcnt++] = 'rfc791-030.GIF';
towerex[towerexcnt++] = 'rfc791-032.GIF';
towerex[towerexcnt++] = 'rfc791-033.GIF';
towerex[towerexcnt++] = 'rfc791-034.GIF';
towerex[towerexcnt++] = 'rfc791-035.GIF';
towerex[towerexcnt++] = 'rfc791-037.GIF';
towerex[towerexcnt++] = 'rfc791-038.GIF';
towerex[towerexcnt++] = 'rfc791-039.GIF';
towerex[towerexcnt++] = 'rfc791-041.GIF';

var routing = new Array(); var routingcnt = 0; var thisrouting = 0;
routing[routingcnt++] = 'rfc791-043.GIF';
routing[routingcnt++] = 'rfc791-045.GIF';
routing[routingcnt++] = 'rfc791-047.GIF';
routing[routingcnt++] = 'rfc791-049.GIF';
routing[routingcnt++] = 'rfc791-051.GIF';
routing[routingcnt++] = 'rfc791-052.GIF';
routing[routingcnt++] = 'rfc791-053.GIF';
routing[routingcnt++] = 'rfc791-055.GIF';
routing[routingcnt++] = 'rfc791-057.GIF';
routing[routingcnt++] = 'rfc791-059.GIF';
routing[routingcnt++] = 'rfc791-061.GIF';
routing[routingcnt++] = 'rfc791-063.GIF';
routing[routingcnt++] = 'rfc791-065.GIF';
routing[routingcnt++] = 'rfc791-067.GIF';
routing[routingcnt++] = 'rfc791-069.GIF';
routing[routingcnt++] = 'rfc791-071.GIF';
routing[routingcnt++] = 'rfc791-073.GIF';
routing[routingcnt++] = 'rfc791-075.GIF';
routing[routingcnt++] = 'rfc791-077.GIF';
routing[routingcnt++] = 'rfc791-079.GIF';
routing[routingcnt++] = 'rfc791-083.GIF';
routing[routingcnt++] = 'rfc791-085.GIF';
routing[routingcnt++] = 'rfc791-087.GIF';
routing[routingcnt++] = 'rfc791-089.GIF';
routing[routingcnt++] = 'rfc791-091.GIF';
routing[routingcnt++] = 'rfc791-093.GIF';
routing[routingcnt++] = 'rfc791-095.GIF';
routing[routingcnt++] = 'rfc791-097.GIF';


function setStart()  {
currentIndx=0;
document.PacketSwitched.src='rfc791-005.GIF';
writeImageNumber();
}

function nextImg() {
if (document.images) {
  thisimg++;
  if (thisimg >= imgcnt) thisimg = 0;
  document.PacketSwitched.src = imgs[thisimg];
}
}
function prevImg() {
if (document.images) {
  thisimg--;
  if (thisimg < 0) thisimg = imgcnt-1;
  document.PacketSwitched.src = imgs[thisimg];
}
} 

function setTowers()  {
currentIndx=0;
document.PacketSwitched.src='rfc791-029.GIF';
writeImageNumber();
}
function nextTEX() {
if (document.images) {
  thistowerex++;
  if (thistowerex >= towerexcnt) thistowerex = 0;
  document.PacketSwitched.src = towerex[thistowerex];
}
}
function prevTEX() {
if (document.images) {
  thistowerex--;
  if (thistowerex < 0) thistowerex = towerexcnt-1;
  document.PacketSwitched.src = towerex[thistowerex];
}
} 


function setRouter1()  {
currentIndx=0;
document.PacketSwitched.src='rfc791-043.GIF';
writeImageNumber();
}

function nextRoute() {
if (document.images) {
  thisrouting++;
  if (thisrouting >= routingcnt) thisrouting = 0;
  document.PacketSwitched.src = routing[thisrouting];
}
}
function prevRoute() {
if (document.images) {
  thisrouting--;
  if (thisrouting < 0) thisrouting = routingcnt-1;
  document.PacketSwitched.src = routing[thisrouting];
}
} 