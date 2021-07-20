<template>
  <div class="row">
    <div class="col col-xl-10">
      <h2
        class="section-title animation-translate-overline animation-item-1"
        v-if="content.title"
      >
        {{ content.title }}>
      </h2>
      <article class="article animation-translate animation-item-2">
        <nuxt-content :document="content" />
      </article>
    </div>
  </div>
</template>
<script>
export default {
  data() {
  	return {
  		content: []
  	}
  },
  // async asyncData({ $content, params }) {
  //   content = await this.$content('about').fetch()
  //   return { content }
  // },
  async created() {
  	this.content = await this.$content('about').fetch()
  }
}
</script>
