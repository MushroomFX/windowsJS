function ms_anim() {
    var element_ = document.getElementById('mslogo');
    var element__ = document.getElementById('ms_content');
    var element___ = document.getElementById('ms_v');
    
    element_.classList.add("ms_anim_");
    element__.classList.add("ms_anim__");
    element___.classList.add("ms_anim___");
    
    setTimeout(function(){
      element_.classList.remove("ms_anim_");
      element__.classList.remove("ms_anim__");
      element___.classList.remove("ms_anim___");
    },1500);
  }