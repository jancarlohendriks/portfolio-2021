<template>
  <!-- <transition name="fade" :duration="1000"> -->
  <transition name="fade">
    <article id="modal-project-1" class="modal fade show">
			Hello
      <!-- <div class="modal-dialog modal-fluid">
        <div class="modal-content">
          <div class="modal-header">
            &nbsp;
            <button
              type="button"
              class="modal-close"
              @click="$root.$emit('modal-close')"
              aria-label="Close"
            >
              <span class="d-none">&times;</span>
            </button>
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
                <div class="col-12 col-lg-6">
                  <img
                    class="img-fluid mb-10"
                    :src="`assets/img/${project.img}`"
                    alt="Nanovo"
                  />
									<a :href="project.url">Open project in new tab</a>
                </div>
              </main>
            </article>
          </div>
        </div>
      </div> -->
    </article>
  </transition>
</template>

<script>
export default {
	props: ['project', 'isOpen']
  // props: {
  //   project: {
  //     type: Object,
  //     required: true,
  //   },
  //   isOpen: {
  //     type: Boolean,
  //     default: false,
  //   },
  // }
}
</script>

<style></style>
