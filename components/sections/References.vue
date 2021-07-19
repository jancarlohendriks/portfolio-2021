<template>
  <div>
    <h2 class="section-title animation-translate-overline animation-item-1">
      {{ content.title }}
    </h2>
    <div
      class="row animation-translate animation-item-2"
      @mouseenter="$root.$emit('anchor-hover')"
      @mouseleave="$root.$emit('anchor-hover')"
    >
      <div
        class="col-6 col-lg-3"
        v-for="(skill, index) in content.skills"
        :key="index"
      >
        <a href="#" class="logo-link">
          <img
            class="logo-img"
            :src="'assets/img/logos/' + skill + '.svg'"
            :alt="skill"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>
