<template>
	<Section>
		<div class="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
        <img
          src="assets/img/avatar.png"
          class="jumbotron-img animation-translate animation-item-1"
          alt="Avatar"
        />
        <h1
          class="
            display-1 display-animated display-animated-in
            animation-translate animation-item-2
          "
        >
          Jan Carlo<br />Hendriks
        </h1>
        <p class="lead animation-translate animation-item-3">
          FREELANCE WEBDEVELOPER
        </p>
      </div>
	</Section>
  <!-- <section
    id="section-01"
    class="section section-sub-header animation interaction-in"
  >
    <div class="section-body">
      <div class="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
        <img
          src="assets/img/avatar.png"
          class="jumbotron-img animation-translate animation-item-1"
          alt="Avatar"
        />
        <h1
          class="
            display-1 display-animated display-animated-in
            animation-translate animation-item-2
          "
        >
          Jan Carlo<br />Hendriks
        </h1>
        <p class="lead animation-translate animation-item-3">
          FREELANCE WEBDEVELOPER
        </p>
      </div>
    </div>
    <div class="section-footer animation-translate animation-item-4">
      <a class="section-next goto-section" href="#section-02">
        <span class="section-next-counter">{{ '0' + sectionIndex }}/{{ totalSections < 10 ? '0' + totalSections : totalSections }}</span>
        <span class="section-next-label">Next chapter</span>
        <span class="section-next-icon"></span>
      </a>
    </div>
  </section> -->
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
