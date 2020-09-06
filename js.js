function myfunction(){

    // alert('xin chao')

    // for (var i=0; i <= 10; i++)
    // {
    //     console.log('aaaa '+i+'' );
    // }

    var input = document.getElementById('demo').value;
    var a =input;
    var b =2;
    var tong2so = tong(parseInt(a),b);
    console.log(tong2so);
}
function tong(x,y){
    return x + y ;
}
function onchang(){
    var a = document.getElementById('demo1').value;
    console.log(a);
}
function oncha(){
    console.log(document.getElementById('cars').value)
}