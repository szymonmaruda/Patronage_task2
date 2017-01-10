var ScoreCounter = function(place, size, current) {
  this.place=place;
  this.size=size;
  this.current=current;

  this.up=function(){
    var tmp = this.current+1;
    var sNumber = tmp.toString();

    if (sNumber.length <= this.size){
      ++this.current;
      return pad(this.current, this.size);
    }else{
      return pad(this.current, this.size);
    }
  }

  this.down=function(){
    --this.current;
    if(this.current <= 0){
      this.current = 0;
    }
    return pad(this.current, this.size);
  }


  this.valuee=function(val){
    if(val == undefined){return this.current;}else{
      var old_current=this.current;
      this.current=val;
      if(this.size >= this.current.length){
        return pad(this.current, this.size);
      }else{
        this.current=old_current;
        return pad(this.current, this.size);
      }
    }
  }

  this.reset=function(){
    this.current=0;
    return pad(this.current, this.size);
  }
};

function pad(n, width) {
  z = '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
