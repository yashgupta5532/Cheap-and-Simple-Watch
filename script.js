// hours=document.getElementById('hours');
// minutes=document.getElementById('minutes');
// seconds=document.getElementById('seconds');
setInterval(()=>{
    d=new Date();
    dhours=d.getHours();
    dminutes=d.getMinutes();
    dseconds=d.getSeconds();
    hrotation=30*dhours + dminutes/2;
    mrotation=6*dminutes + dseconds/10;
    srotation=6*dseconds;
    console.log(dseconds);
    hours.style.transform=`rotate(${hrotation}deg)`;
    minutes.style.transform=`rotate(${mrotation}deg)`;
    seconds.style.transform=`rotate(${srotation}deg)`;
},1000);
console.log("running");
