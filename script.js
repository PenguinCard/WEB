var Body = {
  SetColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  SetBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
var List = {
  SetColor:function(color){
    // var llist = document.querySelectorAll('li');
    // var i = 0;
    // while(i < llist.length){
      // llist[i].style.color = color;
      // i = i + 1;
    // }
    $('li').css('color', color);
  }
}
var Link = {
  SetColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
      // alist[i].style.color = color;
      // i = i + 1;
    // }
    $('a').css('color', color);
  }
}

function linkSetColor(color){
  List.SetColor(color);
  Link.SetColor(color);
}

function nightdayhandle(self){
  if(self.value==='day'){
    self.value='night';
    Body.SetColor('black');
    Body.SetBackgroundColor('white');
    linkSetColor('darkcyan');
  }else{
    self.value='day';
    Body.SetBackgroundColor('black');
    Body.SetColor('darkgray');
    linkSetColor('darkgray');
  }
}
