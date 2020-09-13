// function myfunction(){

//     // alert('xin chao')

//     // for (var i=0; i <= 10; i++)
//     // {
//     //     console.log('aaaa '+i+'' );
//     // }

//     var input = document.getElementById('demo').value;
//     var a =input;
//     var b =2;
//     var tong2so = tong(parseInt(a),b);
//     console.log(tong2so);
// }
// function tong(x,y){
//     return x + y ;
// }
// function onchang(){
//     var a = document.getElementById('demo1').value;
//     console.log(a);
// }
// function oncha(){
//     console.log(document.getElementById('cars').value)
// }

var button=document.getElementById('test');
button.onclick=function(){
    alert("sos.....")
}

// Lấy đối tượng html, bạn có thể sử dụng các DOM Element khác để lấy
var elementObjs = document.getElementsByClassName('show');
 
// Lặp qua từng phần tử trong kết quả và gán sự kiện
for (var i = 0; i < elementObjs.length; i++)
{
    elementObjs[i].onclick = function()
    {
        alert("sos.....");
        return false;
    };
}

function aa(){
    document.getElementById('content').style.background='yellow';
}

function change(){
    document.getElementById('hinh').src='./img/2.jpg';
}
var hinh=document.getElementById('hinh');
var changehinh =document.getElementById('change1');
changehinh.onclick=function(){
    hinh.src='./img/3.jpg';
}
