<template>
  <article id="modal-project-1" class="modal fade show">
    <div class="modal-dialog modal-fluid">
      <div class="modal-content">
        <div class="modal-header">
          &nbsp;
          <NuxtLink to="/#Projects"
						class="modal-close"
            @mouseenter="$root.$emit('anchor-hover')"
            @mouseleave="$root.$emit('anchor-hover')">
            <span class="d-none">&times;</span>
          </NuxtLink>
        </div>
        <div class="modal-body">
          <article class="article">
            <div class="article-header">
              <h2 class="article-title">{{ project.title }}</h2>
              <h3 class="article-subtitle">{{ project.subtitle }}</h3>
              <p class="article-tags">{{ project.tags }}</p>
            </div>
            <main class="row flex-column-reverse flex-lg-row">
              <div class="col-12 col-lg-6">
                <nuxt-content :document="project" />
              </div>
              <a target="_blank" :href="project.url"
                class="col-12 col-lg-6"
                @mouseenter="$root.$emit('anchor-hover')"
                @mouseleave="$root.$emit('anchor-hover')"
              >
                <img
                  class="img-fluid mb-10"
                  :src="`assets/img/${project.img}`"
                  alt="Nanovo"
                />
								<p class="modal-link">
										<span class="line-left"></span>
										View site
										<span class="arrow-right"></span>
								</p>
              </a>
            </main>
          </article>
        </div>
      </div>
    </div>
    <!-- <PageCursor /> -->
  </article>
</template>
<script>
// import PageCursor from '~/components/PageCursor.vue'
export default {
  transition: 'fade',
  components: {
    // PageCursor,
  },
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  },
}
</script>
