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
        <a href="/" class="header-brand"> Personal Portfolio </a>
        <a href="/" class="header-brand"> Jan Carlo Hendriks </a>
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

    <Modals v-show="modalOpen" :project="project" />

    <span id="cursor" ref="cursor" :style="cursorCircle"></span>
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
      isScrolling: false,
      project: null,
			xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      cursorPos: {
        x: 0,
        y: 0,
      },
      mousePos: {
        x: 0,
        y: 0,
      },
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

		cursorCircle() {
      return `top:${this.yParent}px;left:${this.xParent}px;`
    },
  },

	beforeMount() {
		history.pushState("", document.title, window.location.pathname);
	},

  created() {
    this.project = this.projects[0]
  },

  mounted() {
    this.initObserver()
    this.observeSections()
		this.pageBody.addEventListener("mousemove", this.moveCursor);
    this.pageBody.addEventListener('scroll', this.onScroll)
    this.$root.$on('next-section', (index) => { this.goTo(index) })
    this.$root.$on('anchor-hover', () => { this.$refs.cursor.classList.toggle('active') })
		this.$root.$on('modal-close', () => { this.modalOpen = false })
    this.$root.$on('modal-open', (e) => {
      this.project = this.projects[e]
      this.modalOpen = true
    })
  },

  methods: {

		moveCursor(e) {
			const cursor = this.$refs.cursor
			setTimeout(() => {
				this.xParent = e.pageX - (cursor.offsetWidth / 2)
				this.yParent = e.pageY - (cursor.offsetWidth / 2)
			}, 120);
		},

    onScroll() {
      const newHash = this.content.sections[this.selected].navName
      history.replaceState({}, newHash, `/#${newHash}`)
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
      const options = { threshold: [0.5] }
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
