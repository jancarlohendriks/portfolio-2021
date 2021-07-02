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
          <div ref="sections" class="col col-xl-9">
            <Hero id="Top"/>
            <About id="About"/>
            <Skills id="Skills"/>
            <Facts id="Facts"/>
            <Experiences id="Experiences"/>
            <Projects id="Projects"/>
            <Contact id="Contact"/>
          </div>
        </div>
      </div>
    </main>
    
		<!-- Modals -->

		<Modals />

  </div>
</template>

<script>
import ScrollMagic from 'scrollmagic'
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'
import Contact from '../components/sections/Contact.vue'
import Experiences from '../components/sections/Experiences.vue'
import Facts from '../components/sections/Facts.vue'
import Projects from '../components/sections/Projects.vue'
import Skills from '../components/sections/Skills.vue'

if (!window.ScrollControler)
  window.ScrollControler = new ScrollMagic.Controller()

export default {
	components: {
		Hero,
		About,
		Contact,
		Experiences,
		Facts,
		Projects,
		Skills
	},
	data() {
		return {
			menuOpen: false,
			sections: null,
			selected: null
		}
	},
	mounted() {
		this.$nextTick(() => {
			
			this.sections = this.$refs.sections.children
			
			for (const section in this.sections) {
				if (Object.hasOwnProperty.call(this.sections, section)) {
					const element = this.sections[section];
					
					element.scrollScene = new ScrollMagic.Scene({
						triggerHook: 0.5,
						triggerElement: element,
						reverse: true
					})
						.setClassToggle(element, 'interaction-in')
						.addTo(window.ScrollControler)
						.on('enter', () => {
							this.selected = Array.from(this.sections).indexOf(element)
						})
						.on('leave', () => {
							this.selected = Array.from(this.sections).indexOf(element) - 1
						})
				}
			}
		})

	}
}
</script>