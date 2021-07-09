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
              :section="section.id"
              :count="{
                index: index,
                total: content.sections.length,
              }"
            />
						<!-- <section class="section animation">
							<div class="section-body">
								0
							</div>
						</section>
						<section class="section animation">
							<div class="section-body">
								1
							</div>
						</section>
						<section class="section animation">
							<div class="section-body">
								2
							</div>
						</section> -->
          </div>
        </div>
      </div>
    </main>

    <!-- Modals -->

    <Modals />
  </div>
</template>

<script>
import Hero from '~/components/sections/Hero.vue'
import Section from '~/components/Section.vue'

export default {
  components: {
    Hero,
		Section
  },

  data() {
    return {
      menuOpen: false,
      selected: null,
      observer: null,
    }
  },

  async asyncData({ $content, params }) {
    const content = await $content('index').fetch()
    const hero = content.sections.find((s) => s.id == 'hero')
    const about = content.sections.find((s) => s.id == 'about')
    const skills = content.sections.find((s) => s.id == 'skills')
    return { content, hero, about, skills }
  },

  computed: {
    sections() {
      return this.$refs.sections.children
    },
  },

  mounted() {
    this.initObserver()
    this.observeSections()
  },

  methods: {
    observeSections() {
      this.sections.forEach((section) => {
        this.observe(section)
      })
    },

    observe(entry) {
      this.observer.observe(entry)
    },

    setActiveSection(section) {
      this.selected = section
    },

    initObserver() {
      const options = {
        threshold: [0.5],
      }
      this.observer = new IntersectionObserver((entries) => {
				entries.filter((e) => {
					e.isIntersecting ? (
						this.selected = [...this.sections].indexOf(e.target),
						e.target.classList.add('interaction-in')
						) : e.target.classList.remove('interaction-in')
				})
        
				// const activeEntry = entries.filter((e) => e.isIntersecting)
        // const index = [...this.sections].indexOf(activeEntry[0].target)
        // this.selected = index
        // entries.map((e) =>
        //   e.intersectionRatio > 0
        //     ? e.target.classList.add('interaction-in')
        //     : e.target.classList.remove('interaction-in')
        // )
      }, options)
    },
  },
}

// if (process.client) {
// 	this.sections = this.$refs.sections.children
// 	let nav = this.$refs.nav.children

// 	for (const section in this.sections) {

// 		if (Object.hasOwnProperty.call(this.sections, section)) {
// 			const element = this.sections[section]
// 			const controller = new this.$scrollmagic.Controller()
// 			const item = nav[section]
// 			const link = item.querySelector('a')
// 			console.log(link);

// 			this.selected = section

// 			element.scrollScene = new this.$scrollmagic.Scene({
// 				triggerHook: 0.5,
// 				triggerElement: element,
// 				reverse: true
// 			})
// 				.setClassToggle(element, 'interaction-in')
// 				.setClassToggle(link, 'active')
// 				.addIndicators()
// 				.addTo(controller)
// 				// .on('enter', () => {
// 				// 	const item = nav[section]
// 				// 	const link = item.querySelector('a')
// 				// 	console.log(link);
// 				// 	// link.classList.toggle('active')
// 				// 	// this.selected = Array.from(this.sections).indexOf(element)
// 				// })
// 				// .on('leave', () => {
// 				// 	const item = nav[section]
// 				// 	const link = item.querySelector('a')
// 				// 	console.log(link);
// 				// 	// link.classList.toggle('active')
// 				// 	// this.selected = Array.from(this.sections).indexOf(element) - 1
// 				// })
// 		}
// 	}

// }

// this.selected = 0
</script>
