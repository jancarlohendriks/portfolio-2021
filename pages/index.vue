<template>
  <!-- <div
    class="page-body with-header position-relative"
    data-spy="scroll"
    data-target="#sections-nav"
    data-offset="80"
    :class="{ 'sections-nav-in': menuOpen, 'modal-open': modalOpen }"
  > -->
  <div
    class="page-body with-header"
    :class="{ 'sections-nav-in': menuOpen, 'modal-open': modalOpen }"
  >
    <header class="header">
      <div
        class="
          container-fluid-limited
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <a href="/" class="header-brand">
          <!-- Jan Carlo -->
        </a>
        <button
          @click="menuOpen = !menuOpen"
          class="sections-nav-toggler"
          aria-label="Toggle navigation"
        >
          <span class="sections-nav-toggler-bar"></span>
          <span class="sections-nav-toggler-bar"></span>
          <span class="sections-nav-toggler-bar"></span>
          <span class="sections-nav-toggler-bar"></span>
        </button>
      </div>
    </header>

    <nav class="sections-nav-container">
      <ul id="sections-nav" class="nav sections-nav sections-nav-animated">
        <li
          v-for="(section, index) in content.sections"
          :key="index"
          class="sections-nav-item"
        >
          <a
						:href="'#' + section.navName"
            class="nav-link sections-nav-link goto-section"
            :class="{ active: index == selected }"
          >
            <span class="sections-nav-counter">{{ '0' + (index + 1) }}</span>
            {{ section.navName }}
          </a>
        </li>
        <li class="sections-nav-item">
          <div class="sections-nav-info">
            <a href="mailto:john@wilson.com">john@wilson.com</a><br />
            <a href="tel:+420652887351">+420 652 887 351</a>
          </div>
        </li>
      </ul>
    </nav>

    <main class="content">
      <div class="container-fluid-limited">
        <div class="row">
          <div id="sections" ref="sections" class="col col-xl-9">
            <Section
              v-for="(section, index) in content.sections"
              :key="index"
              :section="section"
              :count="{
                index: index,
                total: content.sections.length,
              }"
            />
          </div>
        </div>
      </div>
    </main>

    <!-- Modals -->

    <!-- <Modals :isOpen="modalOpen" :project="projects[0]" /> -->
    <Modals v-if="modalOpen" :project="projects[0]" />

		<div v-if="modalOpen" class="modal-backdrop fade show"></div>
  
	</div>
</template>

<script>
import Section from '~/components/Section.vue'
// import Modals from '~/components/Modals.vue'

export default {
  components: {
    Section,
		Modals: () => import(/* webpackChunkName: "Modals" */ '~/components/Modals.vue')
		// Modals: () => import(/* webpackPrefetch: true */ '~/components/Modals.vue')
  },

  data() {
    return {
      menuOpen: false,
      modalOpen: false,
      selected: null,
      observer: null,
    }
  },

  async asyncData({ $content, params }) {
    const content = await $content('index').fetch()
    return { content }
  },

  computed: {
    sections() {
      return this.$refs.sections.children
    },
    projects() {
      const projects = this.content.sections.filter(e => e.fileName == 'Projects')[0].projects
			return projects
    },
  },

  mounted() {
    this.initObserver()
    this.observeSections()

    // var isScrolling
    // window.addEventListener('scroll', () => {
		// 	window.clearTimeout(isScrolling)
		// 	isScrolling = setTimeout(() => {
		// 		// const newHash = this.content.sections[this.selected].navName
		// 		const newHash = this.sections[this.selected].id
		// 		window.location.hash = newHash
		// 	}, 66)
    // }, false)

    this.$on('next-section', () => {
      this.nextSection()
    })

    this.$root.$on('modal-open', (e) => {
			this.modalOpen = true
    })

    this.$root.$on('modal-close', () => {
			this.modalOpen = false
    })
  },

  methods: {
    nextSection() {
      const newSection = this.sections[this.selected + 1]
      const newSectionTop = newSection.getBoundingClientRect().top
      const newScrollTop = window.scrollY + newSectionTop
      window.scrollTo({ top: newScrollTop })
    },

    observeSections() {
      this.sections.forEach((section) => {
        this.observer.observe(section)
      })
    },

    initObserver() {
      const options = { threshold: [0.5] }
      this.observer = new IntersectionObserver((entries) => {
        entries.filter((e) => {
          const selected = [...this.sections].indexOf(e.target)
          if (e.isIntersecting) {
						this.selected = selected
						e.target.classList.add('interaction-in')
					}
          // ) : e.target.classList.remove('interaction-in')
        })
      }, options)
    },
  },
}
</script>
