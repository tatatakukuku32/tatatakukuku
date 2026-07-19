const c=document.getElementById("rain"),x=c.getContext("2d");
function r(){c.width=innerWidth;c.height=innerHeight}r();onresize=r;
const d=[...Array(180)].map(()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,l:10+Math.random()*20,s:4+Math.random()*5}));
(function a(){x.clearRect(0,0,c.width,c.height);x.strokeStyle="rgba(210,230,255,.5)";
d.forEach(v=>{x.beginPath();x.moveTo(v.x,v.y);x.lineTo(v.x-2,v.y+v.l);x.stroke();v.y+=v.s;if(v.y>innerHeight){v.y=-20;v.x=Math.random()*innerWidth;}});requestAnimationFrame(a)})();