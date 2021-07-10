<template>
  <div
		id="page-body"
    class="page-body with-header"
    :class="{ 'modal-open': modalOpen, 'sections-nav-in': menuOpen }"
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
						@click.prevent="goTo(index)"
          >
						<!-- @click="(menuOpen == true) ? menuOpen = false : null" -->
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

    <Modals v-if="modalOpen" :project="projects[0]" />

    <div v-if="modalOpen" class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
import Section from '~/components/Section.vue'

export default {
  components: {
    Section,
    Modals: () =>
      import(/* webpackChunkName: "Modals" */ '~/components/Modals.vue'),
  },

  data() {
    return {
      menuOpen: false,
      modalOpen: false,
      selected: null,
      observer: null,
			isScrolling: false
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
    pageBody() {
			return document.getElementById('page-body')
		},
    projects() {
      const projects = this.content.sections.filter(
        (e) => e.fileName == 'Projects'
      )[0].projects
      return projects
    },
  },

  mounted() {
    this.initObserver()
    this.observeSections()

    // var isScrolling
    this.pageBody.addEventListener('scroll', this.onScroll)

    this.$on('next-section', () => {
      this.nextSection()
    })

    this.$root.$on('modal-open', (e) => {
      this.modalOpen = true
			// const section = [...this.sections].find((s) => s.id == 'Projects')
      // const newSectionTop = section.getBoundingClientRect().top
			// console.log(newSectionTop);
			// window.scrollTo({ top: newSectionTop })
    })

    this.$root.$on('modal-close', () => {
      this.modalOpen = false
    })
  },

  methods: {

		onScroll(e) {
			window.clearTimeout(this.isScrolling)
			this.isScrolling = setTimeout(() => {
				const newHash = this.content.sections[this.selected].navName
				// const newHash = this.sections[this.selected].id
				window.location.hash = newHash
      }, 66)
		},

    nextSection() {
			this.goTo(this.selected + 1)
    },

		goTo(index) {
			this.menuOpen == true ? this.menuOpen = false : null

			const newSection = this.sections[index]
      const newSectionTop = newSection.getBoundingClientRect().top
      const newScrollTop = window.scrollY + newSectionTop
			this.pageBody.scrollTo({ top: newScrollTop })
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
						// window.location.hash = this.content.sections[selected].navName
          }
        })
      }, options)
    },
  },
}
</script>
