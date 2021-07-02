<template>
  <section
    id="section-01"
    class="section section-sub-header animation interaction-in"
  >
    <div class="section-body">
      <slot></slot>
    </div>
    <div class="section-footer animation-translate animation-item-4">
      <a class="section-next goto-section" href="#section-02">
        <span class="section-next-counter">{{ '0' + sectionIndex }}/{{ totalSections < 10 ? '0' + totalSections : totalSections }}</span>
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
		this.totalSections = this.$parent.$children.length - 1
		this.sectionIndex = Array.from(this.$parent.$children).indexOf(this.$el) + 2
	}
}
</script>

<style></style>
