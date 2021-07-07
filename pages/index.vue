<template>
  <div class="with-header position-relative" data-spy="scroll" data-target="#sections-nav" data-offset="80" :class="menuOpen ? 'sections-nav-in' : null">
    <header class="header">
      <div class="container-fluid-limited d-flex align-items-center justify-content-between">
        <a href="index.html" class="header-brand">
					<!-- Jan Carlo -->
          <!-- <img
            src="assets/img/logo_b.svg"
            data-light-src="assets/img/logo.svg"
            data-dark-src="assets/img/logo_b.svg"
            alt="Your logo"
          /> -->
        </a>
        <button
					@click="menuOpen = !menuOpen"
					class="sections-nav-toggler"
					aria-label="Toggle navigation">
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
					v-for="(section, index) in sections"
					:key="index"
					@click="selected = index, menuOpen = false"
					class="sections-nav-item">
          <a :href="'#' + section.id" class="nav-link sections-nav-link goto-section" :class="selected == index ? 'active' : null">
            <span class="sections-nav-counter">{{ '0' + (index + 1) }}</span>
            {{ section.id }}
          </a>
        </li>
				<li class="sections-nav-item">
					<div class="sections-nav-info">
						<a href="mailto:john@wilson.com">john@wilson.com</a><br>
						<a href="tel:+420652887351">+420 652 887 351</a>
					</div>
				</li>
      </ul>
    </nav>
    <main class="content">
      <div class="container-fluid-limited">
        <div class="row">
          <div id="sections" ref="sections" class="col col-xl-9">
						<!-- <Section id="Top"> -->
						<Section id="Top" v-on-screen>
							<div class="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
								<img
									src="assets/img/avatar.png"
									class="jumbotron-img animation-translate animation-item-1"
									alt="Avatar"
								/>
								<h1
									class="
										display-1 display-animated display-animated-in
										animation-translate animation-item-2
									"
								>
									Jan Carlo<br />Hendriks
								</h1>
								<p class="lead animation-translate animation-item-3">
									FREELANCE WEBDEVELOPER
								</p>
								<!-- <nuxt-content :document="hero" /> -->
							</div>
						</Section>
						<!-- <Section id="About"> -->
						<Section id="About" v-on-screen>
							<div class="row">
								<div class="col col-xl-10">
									<h2 class="section-title animation-translate-overline animation-item-1">
										About me
									</h2>
									<article class="article animation-translate animation-item-2">
										<p>
											I'm freelance webdeveloper lorem ipsum dolor sit amet, consetetur
											sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
											et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
											accusam et justo duo dolores et ea rebum. Stet clita kasd
											gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
											Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
											nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
											erat, sed diam voluptua. At vero eos et accusam et justo duo
											dolores et ea rebum.
										</p>
										<p>
											Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
											nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
											erat, sed diam voluptua. At vero eos et accusam et justo duo
											dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
											sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
											amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
											invidunt ut labore et dolore magna.
										</p>
										<p>
											Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
											nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
											erat, sed diam voluptua. At vero eos et accusam et justo duo
											dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
											sanctus est Lorem ipsum dolor sit amet.
										</p>
									</article>
								</div>
							</div>
						</Section>
            <!-- <Hero id="Top"/>
            <About id="About"/>
            <Skills id="Skills"/>
            <Facts id="Facts"/>
            <Experiences id="Experiences"/>
            <Projects id="Projects"/>
            <Contact id="Contact"/> -->
          </div>
        </div>
      </div>
    </main>
    
		<!-- Modals -->

		<Modals />

  </div>
</template>

<script>
// import ScrollMagic from 'scrollmagic'
// import Hero from '../components/sections/Hero.vue'
// import About from '../components/sections/About.vue'
// import Contact from '../components/sections/Contact.vue'
// import Experiences from '../components/sections/Experiences.vue'
// import Facts from '../components/sections/Facts.vue'
// import Projects from '../components/sections/Projects.vue'
// import Skills from '../components/sections/Skills.vue'

// import { mapMutations } from 'vuex'

// if (!window.ScrollControler)
//   window.ScrollControler = new ScrollMagic.Controller()

export default {
	components: {
		// Hero,
		// About,
		// Contact,
		// Experiences,
		// Facts,
		// Projects,
		// Skills
	},
	data() {
		return {
			menuOpen: false,
			sections: null,
			selected: 0
		}
	},

	mounted() {
		this.$on('selected', (e) => {
			console.log(e);
		}),
		this.$on('sections', (e) => {
			this.sections = e
		})
	},

	async beforeMount() {
		const content = await this.$content()
			.sortBy('createdAt', 'desc')
			.fetch()
		console.log(content);
	}


	// CONTENT

	// async asyncData({ $content, params }) {
  //   const hero = await $content('', 'hero').fetch()
  //   const index = await $content('', 'index').fetch()

  //   return { hero, index }
  // }



	// updated() {
	// 	this.sections = this.$refs.sections.children
	// 	console.log(this.sections);
	// },
	
	// mounted() {
		
	// 	this.sections = this.$refs.sections.children
	// 	// this.$nextTick(() => {
	// 		// this.sections = this.$refs.sections.children
	// 		// console.log(this.sections);
			
	// 		for (const section in this.sections) {
	// 			if (Object.hasOwnProperty.call(this.sections, section)) {
	// 				const element = this.sections[section];
					
	// 				element.scrollScene = new ScrollMagic.Scene({
	// 					triggerHook: 0.9,
	// 					triggerElement: element,
	// 					reverse: true
	// 				})
	// 					.setClassToggle(element, 'interaction-in')
	// 					.addTo(window.ScrollControler)
	// 					.on('enter', () => {
	// 						this.selected = Array.from(this.sections).indexOf(element)
	// 					})
	// 					.on('leave', () => {
	// 						this.selected = Array.from(this.sections).indexOf(element) - 1
	// 					})
	// 			}
	// 		}
	// 	// })

	// }
}
</script>