import Vue from 'vue'

import PerfectScrollbar from 'perfect-scrollbar'

//对应的css
import "perfect-scrollbar/css/perfect-scrollbar.css";

const el_scrollBar = (el) => {
  //在元素上加点私货，名字随便取，确保不会和已有属性重复即可，我取名叫做_ps_
  console.log(el._ps_);
  if (el._ps_ instanceof PerfectScrollbar) {
      el._ps_.update();
  } else {
      //el上挂一份属性
      el._ps_ = new PerfectScrollbar(el, { });
  }

};

Vue.directive("perfect-scroll",{
  inserted(el, binding){
      const { arg } = binding;
      if(arg === "true"){
          el = el.querySelector(".el-table__body-wrapper");
          el.style = "overflow-y:hidden !important; overflow-x:hidden !important;"
          if(!el){
              return console.warn("未发现className为el-table__body-wrapper的dom");
          }
      }
      const rules = ["fixed", "absolute", "relative"];
          if (!rules.includes(window.getComputedStyle(el, null).position)) {
              console.error(`perfect-scrollbar所在的容器的position属性必须是以下之一：${rules.join("、")}`)
          }
          el_scrollBar(el);
  },
  componentUpdated(el, binding, vnode) {
 
      const { arg } = binding;
      if (arg === "true") {
          el = el.querySelector(".el-table__body-wrapper");
          if(!el){
              return console.warn("未发现className为el-table__body-wrapper的dom");
          }
      }
      vnode.context.$nextTick(
          () => {
              try {
                  el_scrollBar(el);
              } catch (error) {
                  console.error(error);
              }
          }
      )
  },
})



