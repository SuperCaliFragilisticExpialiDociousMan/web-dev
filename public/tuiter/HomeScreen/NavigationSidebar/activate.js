function onload(){
    var trs=document.getElementById('tb').getElementsByTagName('tr');
    for (var i=0;i<trs.length;i++){
        trs[i].onclick=function(){
            for (var j=0;j<trs.length;j++){
                trs[i].style.backgroundColor='yellow';
            }
            this.style.backgroundColor='red';
        };
    }
}
export default onload ;
