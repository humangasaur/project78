images = ["mom.jpg", "papa.jpg", "tai ji.png", "dadi.jpg", "didi.png", "me.jpg"];
names = ["mother", "dad", "Tai ji","Dadi", "didi", "me"];
var i = 0;
function update(){
    if ( i==5){
        i=0;
    }
    document.getElementById("image").src=images[i];
    document.getElementById("name").src=names[i];
    i++
}