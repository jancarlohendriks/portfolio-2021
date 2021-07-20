<template>
  <div>
    <h2 class="section-title animation-translate-overline animation-item-1">
      {{ content.title }}
    </h2>
    <div class="row mb-10 animation-translate animation-item-2">
      <div
        class="col-12 col-md-4"
        @mouseenter="$root.$emit('anchor-hover')"
        @mouseleave="$root.$emit('anchor-hover')"
      >
        <div class="contact">
          <strong class="contact-label">Stay in touch</strong>
          <a :href="'mailto:' + content.email">{{ content.email }}</a
          ><br />
          <a :href="'tel:' + content.phone">{{ content.phone }}</a>
        </div>
      </div>
      <div
        class="col-12 col-md-4"
        @mouseenter="$root.$emit('anchor-hover')"
        @mouseleave="$root.$emit('anchor-hover')"
      >
        <div class="contact">
          <strong class="contact-label">Social</strong>
          <a
            v-for="(social, index) in content.socials"
            :key="index"
            :href="social.link">
						{{ social.name }}
						<br />
					</a>
        </div>
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
