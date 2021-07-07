import ScrollMagic from 'scrollmagic'
import Vue from 'vue'

if (!window.ScrollControler)
  window.ScrollControler = new ScrollMagic.Controller()

Vue.directive('on-screen', {
	bind(el, binding, vnode){
		const sections = vnode.context.$refs.sections.children
		vnode.context.$emit('sections', sections)
		// console.log(vnode.context._data.selected)
		// selected = vnode.context._data.selected
		// sections = vnode.context._data.sections
  },
  inserted(el, biding, vnode) {
		
		const sections = vnode.context.$refs.sections.children
		// console.log(vnode.context.$options);

    el.scrollScene = new ScrollMagic.Scene({
      triggerHook: 0.5,
      triggerel: el,
			reverse: true
    })
      .setClassToggle(el, 'interaction-in')
      .addTo(window.ScrollControler)
			.on('enter', () => {
				console.log('entering');
				// Array.from(sections).indexOf(el)
				vnode.context.$emit('selected', el)
				// console.log(vnode);
				// this.$parent.selected = Array.from(sections).indexOf(el)
			})
			.on('leave', () => {
				console.log('leaving');
				// vnode.context.$emit('selected', el)
				// this.$parent.selected = Array.from(sections).indexOf(el) - 1
			})
  },
  unbind(el) {
    el.scrollScene.destroy(true)
  },
})
