var ScoreUI = function(place, size, current) {
    this.place = place;

    var new_place = this.place.getAttribute("id");

    this.size = size;
    this.current = current;
    var scoreCounter = new ScoreCounter(document.querySelector('.counter'), this.size, this.current);
    var cntr_place = scoreCounter.place.getAttribute("class");

    document.getElementById(new_place).querySelector("."+cntr_place).innerHTML = scoreCounter.pad(this.current, this.size);


    document.getElementById(new_place).querySelector(".up").onclick = function() {
        this.current = scoreCounter.up();

        document.getElementById(new_place).querySelector(".counter").innerHTML = scoreCounter.pad(this.current, size);
    };

    document.getElementById(new_place).querySelector(".down").onclick = function() {
        this.current = scoreCounter.down();
        document.getElementById(new_place).querySelector(".counter").innerHTML = scoreCounter.pad(this.current, size);
    };

    document.getElementById(new_place).querySelector(".get").onclick = function() {
        this.current = scoreCounter.valuee(0);
        alert(this.current);
    };

    document.getElementById(new_place).querySelector(".set").onclick = function() {
        var val = document.getElementById(new_place).querySelector(".value").value;
        this.current = scoreCounter.valuee(val);
        document.getElementById(new_place).querySelector(".counter").innerHTML = scoreCounter.pad(this.current, size);
    };

    document.getElementById(new_place).querySelector(".reset").onclick = function() {
        this.current = scoreCounter.reset();
        document.getElementById(new_place).querySelector(".counter").innerHTML = scoreCounter.pad(this.current, size);
    };
    
    var forms = document.getElementsByTagName("form");
    for(var i=0; i<forms.length;i++){
      forms[i].addEventListener("submit", function(e){e.preventDefault();});
    }


    document.querySelector(".add_counter").onclick = function() {
        var number = document.getElementsByClassName("counter").length + 1;
        var div = document.createElement('div');
        document.getElementById('page-wrapper').appendChild(div);
        div.id = "score-" + number;
        div.innerHTML = document.getElementById("page-wrapper").firstElementChild.innerHTML;
        div.getElementsByTagName("h1")[0].firstChild.nodeValue = "Score " + number + ":";

        new ScoreUI(document.getElementById(div.id), 4, 0);
    }

    document.querySelector(".delete_counter").onclick = function() {
        var counters = document.getElementById('page-wrapper').getElementsByTagName('div');
        if (counters.length > 3) {
            counters[counters.length - 1].remove();
        }
    }
}
