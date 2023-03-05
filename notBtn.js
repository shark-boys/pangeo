function sharkUp() {
    var num = Math.floor(Math.random()*2);
    switch (num){
        case 0:
            dub = window.open("https://img.freepik.com/free-vector/cute-shark-with-doughnut_138676-3244.jpg"
            ,"Ratting","width=400,height=400,left=150,top=200,toolbar=0,status=0,");
        case 1:
            x = document.getElementById("audio");
            x.style.display = "block";
    }
} 