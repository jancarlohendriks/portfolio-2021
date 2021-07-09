<template>
  <div
    class="with-header position-relative"
    data-spy="scroll"
    data-target="#sections-nav"
    data-offset="80"
    :class="{ 'sections-nav-in': menuOpen }"
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
						:href="'#' + section.id"
            class="nav-link sections-nav-link goto-section"
            :class="{ active: index == selected }"
          >
            <span class="sections-nav-counter">{{ '0' + (index + 1) }}</span>
            {{ section.title }}
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

    <Modals />
  </div>
</template>

<script>
import Section from '~/components/Section.vue'

export default {
  components: {
    Section,
  },

  data() {
    return {
      menuOpen: false,
      selected: null,
      observer: null,
      bodyTop: 0,
      isScrolling: false,
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
  },

  mounted() {
    this.initObserver()
    this.observeSections()

    // var isScrolling
    // window.addEventListener('scroll', () => {
		// 	this.isScrolling = true
		// 	window.clearTimeout(isScrolling)
		// 	isScrolling = setTimeout(() => this.isScrolling = !this.isScrolling, 66)
    // }, false)

    this.$on('next-section', () => {
      this.nextSection()
    })
  },

  methods: {
    scrollTo(sectionId) {
			// this.isScrolling = true
			// var isScrolling
			// window.addEventListener('scroll', () => {
			// 	console.log(window.scrollY)
			// 	this.bodyTop == newSection.getBoundingClientRect().top ?
			// 	console.log("object")
			// 	: null
			// }, false)

			this.isScrolling = true
			var isScrolling
			window.addEventListener('scroll', () => {
				// window.clearTimeout(isScrolling)
				// isScrolling = setTimeout(() => this.isScrolling = false, 66)
				setTimeout(() => this.isScrolling = false, 66)
			}, false)

      const newSection = this.sections[sectionId]
      const newSectionTop = newSection.getBoundingClientRect().top
      const newTop = window.scrollY + newSectionTop
      window.scrollTo({ top: newTop })
      // const newTop = this.bodyTop + newSectionTop
      // window.scrollTo({ top: newTop })
			// this.bodyTop = top
    },

    nextSection() {
      const newSection = this.sections[this.selected + 1]
      const top = this.bodyTop + newSection.getBoundingClientRect().top
      window.scrollTo({ top: top })
      this.bodyTop = top
    },

    observeSections() {
      this.sections.forEach((section) => {
        this.observer.observe(section)
      })
    },

    initObserver() {
      const options = {
        threshold: [0.5],
      }
      this.observer = new IntersectionObserver((entries) => {
        entries.filter((e) => {
          const selected = [...this.sections].indexOf(e.target)
          if (e.isIntersecting) {
						this.selected = selected
						e.target.classList.add('interaction-in')
						// if (this.isScrolling == false) {
						// 	window.location.hash = this.sections[selected].id
						// }
					}
          // ) : e.target.classList.remove('interaction-in')
        })
      }, options)
    },
  },
}
</script>
