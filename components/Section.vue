<template>
  <section class="section section-sub-header animation">
    <div class="section-body">
      <slot></slot>
    </div>
    <div class="section-footer animation-translate animation-item-4">
      <a class="section-next goto-section" href="#section-02">
        <span class="section-next-counter">{{ '0' + sectionIndex }}/{{ totalSections &lt; 10 ? '0' + totalSections : totalSections }}</span>
        <span class="section-next-label">Next chapter</span>
        <span class="section-next-icon"></span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
	data() {
		return {
			totalSections: 0,
			sectionIndex: 0
		}
	},
	mounted() {
		this.$nextTick(()=>{
			let sections = this.$parent.$refs.sections
			this.totalSections = sections.children.length
			this.sectionIndex = Array.from(this.$parent.$children).indexOf(this.$parent) + 1
		})
		// this.$nextTick(()=>{
		// 	let sections = this.$parent.$parent.$refs.sections
		// 	this.totalSections = sections.children.length
		// 	this.sectionIndex = Array.from(this.$parent.$parent.$children).indexOf(this.$parent) + 1
		// })

		// this.totalSections = this.$root.$el.$refs.sections.$children.length - 1
		// this.sectionIndex = Array.from(this.$parent.$children).indexOf(this.$el) + 2
	}
}
</script>

<style></style>
