function hello(){
    alert("hello, this is external JS");
}
function printDayOfWeek(){
    const weekday=['sun','mon','tue','wednesday','thur','fri','sat'];
    const date=new Date();
    let day=date.getDay()
    document.writeln("Today is "+weekday[day])
}