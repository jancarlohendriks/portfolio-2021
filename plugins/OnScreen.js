import ScrollMagic from 'scrollmagic'
import Vue from 'vue'

if (!window.ScrollControler)
  window.ScrollControler = new ScrollMagic.Controller()

let selected
let sections

Vue.directive('on-screen', {
	bind(el, binding, vnode){
		selected = vnode.context._data.selected
		sections = vnode.context._data.sections
  },
  inserted(element, vnode) {
    // element.classList.add('v-on-screen');
    element.scrollScene = new ScrollMagic.Scene({
      triggerHook: 0.5,
      triggerElement: element,
    })
      .setClassToggle(element, 'interaction-in')
      .addTo(window.ScrollControler)
			.on('enter', () => {
				console.log(selected);
				// element.index
				// vnode.context._data.selected = 3
			})
  },
  unbind(element) {
    element.scrollScene.destroy(true)
  },
})
