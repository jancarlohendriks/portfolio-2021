<template>
  <!-- <transition name="fade" :duration="1000"> -->
  <transition name="fade">
    <article id="modal-project-1" class="modal fade show">
			<div class="modal-backdrop fade show"></div>
      <div class="modal-dialog modal-fluid">
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
                <h3 class="article-subtitle">Design e-shop</h3>
                <p class="article-tags">Design — Frontend — Backend</p>
              </div>
              <main class="row flex-column-reverse flex-lg-row">
                <div class="col-12 col-lg-6">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                  <p>
                    Stet clita, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua.
                  </p>
                </div>
                <div class="col-12 col-lg-6">
                  <img
                    class="img-fluid mb-10"
                    src="assets/img/project_1.jpg"
                    alt="Nanovo"
                  />
                </div>
              </main>
            </article>
          </div>
        </div>
      </div>
    </article>
  </transition>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // console.log(this.project);
  },
}
</script>

<style></style>
