document.querySelector("#clear").addEventListener("click", function(){
    document.querySelector("input").value = "";
});

document.querySelector("#search").addEventListener("click", function(){
    var query = document.querySelector("input").value;
    console.log(query);
});
