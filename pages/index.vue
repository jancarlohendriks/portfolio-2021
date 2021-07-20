<template>
  <div
    class="page-body with-header"
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
        <span class="header-brand"> Personal Portfolio </span>
        <span class="header-brand"> Jan Carlo Hendriks </span>
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

    <nav
			ref="nav"
			class="sections-nav-container"
			@mouseenter="$root.$emit('anchor-hover')"
			@mouseleave="$root.$emit('anchor-hover')"
		>
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
						@click="menuOpen = false"
          >
            <span class="sections-nav-counter">{{ '0' + (index + 1) }}</span>
            {{ section.navName }}
          </a>
        </li>
        <li class="sections-nav-item">
          <div class="sections-nav-info">
            <a :href="'mailto:' + content.personal.email">{{
              content.personal.email
            }}</a
            ><br />
            <a :href="'tel:' + content.personal.phone">{{
              content.personal.phone
            }}</a>
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
		<PageCursor />
  </div>
</template>

<script>
import Section from '~/components/Section.vue'
import PageCursor from '~/components/PageCursor.vue'

export default {
  components: {
    Section,
		PageCursor
  },

  data() {
    return {
      menuOpen: false,
      observer: null,
			selected: 0,
			isMobile: true,
    }
  },

	// transition: {
  //   beforeLeave(el) {
  //     document.body.style.backgroundColor = "#171717"
  //   },
  //   beforeEnter(el) {
  //     document.body.style.backgroundColor = "none"
  //   },
  // },

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
		const hash = location.hash
		if(hash) {
			document.querySelector(hash).scrollIntoView()
		}
		this.onResize
		window.addEventListener("resize", this.onResize)
    this.initObserver()
    this.observeSections()
    this.$root.$on('next-section', (index) => { this.goTo(index) })
  },

  methods: {

		onResize() {
			var mql = window.matchMedia('(min-width: 990px)');
			mql.matches ? this.isMobile = false : this.isMobile = true
		},

    goTo(index) {
      if (this.selected == index) {
        return
      }
      const newSection = this.sections[index]
      newSection.scrollIntoView()
    },

    observeSections() {
      this.sections.forEach((section) => {
        this.observer.observe(section)
      })
    },

    initObserver() {
      let options = { threshold: [0.3] }
      this.observer = new IntersectionObserver((entries) => {
        entries.filter((e) => {
          const selected = [...this.sections].indexOf(e.target)
          if (e.isIntersecting) {
            this.selected = selected
            e.target.classList.add('interaction-in')
          }
        })
      }, options)
    },
  },
}
</script>
