<template>
	<span id="page-cursor" ref="pageCursor" :style="cursorCircle"></span>
</template>

<script>
export default {
	data() {
    return {
			xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0
    }
  },
	computed: {
		cursorCircle() {
      return `top:${this.yParent}px;left:${this.xParent}px;`
    },
  },
	beforeDestroy() {
		window.removeEventListener("mousemove", this.moveCursor)
	},
	mounted() {
		window.addEventListener("mousemove", this.moveCursor)
    this.$root.$on('anchor-hover', () => {
			if (this.$refs.pageCursor) {
				this.$refs.pageCursor.classList.toggle('active')
			}
		})
  },
	methods: {
		moveCursor(e) {
			const cursor = this.$refs.pageCursor
			cursor.style.opacity = 1
			// if(cursor) {
				setTimeout(() => {
					this.xParent = e.pageX - (cursor.offsetWidth / 2)
					this.yParent = e.pageY - (cursor.offsetWidth / 2)
				}, 200);
			// }
		},
	}
}
</script>