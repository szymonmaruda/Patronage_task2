var ScoreCounter = function(place, size, current) {
    this.place = place;
    this.size = size;
    this.current = current;

    this.up = function() {
        if(typeof(this.current)=="string"){
          this.current=Number(this.current);
        }
        var tmp = this.current + 1;

        var sNumber = tmp.toString();

        if (sNumber.length <= this.size) {

            ++this.current;
            return this.current;
        } else {
            return this.current;
        }
    }

    this.down = function() {
        --this.current;
        if (this.current <= 0) {
            this.current = 0;
        }
        return this.current;
    }


    this.valuee = function(val) {

        if (val == undefined) {
            return this.current;
        } else {

            var old_current = this.current;
            this.current = val;
            if (this.size >= this.current.length) {
                return this.current;
            } else {

                this.current = old_current;
                return this.current;
            }
        }
    }

    this.reset = function() {
        this.current = 0;
        return this.current;
    }

    this.pad = function(n, width) {
        z = '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
};
