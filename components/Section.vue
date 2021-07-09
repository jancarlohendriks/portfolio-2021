<template>
  <section class="section animation" :class="{ 'section-sub-header': count.index == 0 }">
    <div class="section-body">
      <component :is="componentType"></component>
    </div>
    <div class="section-footer animation-translate animation-item-4">
      <a class="section-next goto-section" href="#section-02">
        <span class="section-next-counter">
          {{ '0' + (count.index + 1) }} /
          {{ count.total &lt; 10 ? '0' + count.total : count.total }}
        </span>
				<span v-if="count.index + 1 !== count.total">
					<span class="section-next-label">Next chapter</span>
					<span class="section-next-icon"></span>
				</span>
      </a>
    </div>
  </section>
</template>

<script>

export default {
	props: {
		section: {
			type: String,
			required: true
		},
		count: {
			type: Object,
			required: true
		}
	},
  computed: {
    componentType: function() {
      if (this.section) {
        return () => import(`~/components/sections/${this.section}`);
      }
      return null;
    }
  }
}
</script>
