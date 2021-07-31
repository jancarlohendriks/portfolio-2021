<template>
  <div>
    <h2 class="section-title animation-translate-overline animation-item-1">
      Projects
    </h2>
    <div class="row animation-translate animation-item-2">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="col-12 col-md-4"
				data-cursor-hover
      >
				<nuxt-link class="card" :to="'/' + project.slug" :id="'fixed-target-' + index">
				<!-- data-scroll
				data-scroll-repeat -->
					<!-- data-scroll
					data-scroll-sticky
					:data-scroll-target="'#fixed-target-' + index" -->
          <img
            class="card-img-top"
            :src="`assets/img/${project.img}`"
            :alt="project.title"
          />
          <div class="card-body">
            <h3 class="card-title">{{ project.title }}</h3>
            <h4 class="card-subtitle">{{ project.subtitle }}</h4>
            <p class="card-tags">{{ project.tags }}</p>
          </div>
        </nuxt-link>
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
	data() {
		return {
			projects: []
		}
	},
	async created() {
		this.projects = await this.$content('projects')
			.only(['title', 'subtitle', 'tags', 'img', 'slug'])
			.sortBy('slug', 'asc')
			.fetch()
	}
}
</script>
