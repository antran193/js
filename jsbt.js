var people = ["Greg", "Mary", "Devon", "James"];
var text="";
function looplog()
{
    
    for(var i=0; i<people.length;i++)
    {
        // text = text + people[i] + "<br>";
        console.log("ten thang thu "+ i + " la :"+ people[i]);
    }
}
function removegrey()
{
    people.shift();
    document.getElementById("demo").innerHTML = people;
}
function removejam()
{
    people.pop();
    document.getElementById("demo").innerHTML = people;
}
function addmatt()
{
    people.unshift("matt");
    document.getElementById("demo").innerHTML=people;
}
function addname()
{
    people.push("an cho dien");
    document.getElementById("demo").innerHTML=people;
}
function looptomary()
{
    for(var i =0;i<people.length;i++)
    {
        if(people[i]!="Mary")
        {
            console.log(people[i]);
        }
        else 
        {
            console.log(people[i]);
            break
        }
    }
}
function makecopy()
{
    var slices="matt";
    for(var i=0;i<people.length;i++)
    {
        if(people[i]=="matt")
        {
            var newpeople= people.slice(i+1);
            document.getElementById("demo").innerHTML=newpeople;
            break
        }
    }
}

function indexofmary()
{
    for(var i=0;i<people.length;i++)
    {
        if(people[i]=="Mary")
        {
            var x = i;
            break
        }
    }
    document.getElementById("demo1").innerHTML="Mary index : "+x;
}
function indexoffoo()
{
    for(var i=0;i<people.length;i++)
    {
        if(people[i]=="Foo")
        {
            var x = i;
            break
        }
    }
    if(isNaN(x))
    {
        x=-1;
        // return x
    }
    document.getElementById("demo1").innerHTML="Foo index : "+x;
}
function redifine()
{
    var x=0;
    people.shift();
    people.pop()
    people.unshift("Greg");
    people.push("james");
    for(var i=0;i<people.length;i++)
    {
        if(people[i]=="Devon")
        {
            x=i;
            break
        }
    }
    people.splice(x,1,"Elizabeth","Artie");
    document.getElementById("demo").innerHTML=people;


}
