<template>
  <section
    :id="section.navName"
    class="section animation interaction-in"
    :class="{ 'section-sub-header': count.index == 0 }"
    data-scroll-section
  >
    <!-- data-scroll-section data-scroll-delay="5" -->
    <div class="section-body" data-scroll data-scroll-speed="1.5" data-toggle :data-toggle-call="count.index">
      <component :content="section" :is="componentType"></component>
    </div>
    <div class="section-footer animation-translate animation-item-4">
      <div
        class="section-next goto-section"
        @mouseenter="$root.$emit('anchor-hover')"
        @mouseleave="$root.$emit('anchor-hover')"
        @click="$root.$emit('next-section', count.index + 1)"
      >
        <span class="section-next-counter">
          {{ '0' + (count.index + 1) }} /
          {{ count.total &lt; 10 ? '0' + count.total : count.total }}
        </span>
        <span v-if="count.index + 1 !== count.total" class="section-next">
          <span class="section-next-label">Next chapter</span>
          <span class="section-next-icon"></span>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    section: {
      type: Object,
      required: true,
    },
    count: {
      type: Object,
      required: true,
    },
  },
  // beforeUpdate() {
  // mounted() {
  // 	this.$nuxt.$emit('update-locomotive')
  // },
  computed: {
    componentType() {
      if (this.section) {
        return () =>
          import(
            /* webpackPrefetch: true */ `~/components/sections/${this.section.fileName}`
          )
      }
      return null
    },
  },
}
</script>
