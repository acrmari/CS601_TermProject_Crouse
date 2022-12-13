var imgs = new Array(); var imgcnt = 0; var thisimg = 0;
imgs[imgcnt++] = 'ietf-rfcs-010.GIF';
imgs[imgcnt++] = 'ietf-rfcs-020.GIF';
imgs[imgcnt++] = 'ietf-rfcs-030.GIF';
imgs[imgcnt++] = 'ietf-rfcs-040.GIF';
imgs[imgcnt++] = 'ietf-rfcs-050.GIF';
imgs[imgcnt++] = 'ietf-rfcs-051.GIF';
imgs[imgcnt++] = 'ietf-rfcs-052.GIF';
imgs[imgcnt++] = 'ietf-rfcs-053.GIF';
imgs[imgcnt++] = 'ietf-rfcs-054.GIF';
imgs[imgcnt++] = 'ietf-rfcs-055.GIF';
imgs[imgcnt++] = 'ietf-rfcs-056.GIF';
imgs[imgcnt++] = 'ietf-rfcs-060.GIF';
imgs[imgcnt++] = 'ietf-rfcs-070.GIF';
imgs[imgcnt++] = 'ietf-rfcs-080.GIF';
imgs[imgcnt++] = 'ietf-rfcs-090.GIF';
imgs[imgcnt++] = 'ietf-rfcs-091.GIF';
imgs[imgcnt++] = 'ietf-rfcs-092.GIF';
imgs[imgcnt++] = 'ietf-rfcs-093.GIF';
imgs[imgcnt++] = 'ietf-rfcs-100.GIF';
imgs[imgcnt++] = 'ietf-rfcs-110.GIF';
imgs[imgcnt++] = 'ietf-rfcs-111.GIF';
imgs[imgcnt++] = 'ietf-rfcs-120.GIF';
imgs[imgcnt++] = 'ietf-rfcs-125.GIF';


function setCurrentIndex()  {
currentIndx=0;
document.ARPANET.src=imgs[0];
writeImageNumber();
}

function nextImg() {
if (document.images) {
  thisimg++;
  if (thisimg >= imgcnt) thisimg = 0;
  document.ARPANET.src = imgs[thisimg];
}
}
function prevImg() {
if (document.images) {
  thisimg--;
  if (thisimg < 0) thisimg = imgcnt-1;
  document.ARPANET.src = imgs[thisimg];
}
} 