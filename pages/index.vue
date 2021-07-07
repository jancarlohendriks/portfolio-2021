<template>
	<div
		class="with-header position-relative"
		data-spy="scroll"
		data-target="#sections-nav"
		data-offset="80"
		:class="menuOpen ? 'sections-nav-in' : null"
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
				<a href="index.html" class="header-brand">
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
					@click=";(selected = index), (menuOpen = false)"
					class="sections-nav-item"
				>
					<a
						:href="'#' + section.id"
						class="nav-link sections-nav-link goto-section"
						:class="selected == index ? 'active' : null"
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
						<Hero :content="hero"></Hero>
						<Hero :content="about"></Hero>
						<Hero :content="skills"></Hero>
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
import Hero from '~/components/sections/Hero.vue'

if (!window.ScrollControler)
	window.ScrollControler = new ScrollMagic.Controller()

export default {
	components: {
		Hero,
	},
	data() {
		return {
			menuOpen: false,
			sections: null,
			selected: 0,
		}
	},
	async asyncData({ $content, params }) {
		const content = await $content('index').fetch()
		const hero = content.sections.find((s) => s.id == 'hero')
		const about = content.sections.find((s) => s.id == 'about')
		const skills = content.sections.find((s) => s.id == 'skills')

		return { content, hero, about, skills }
	},

	mounted() {
		this.sections = this.$refs.sections.children

		for (const section in this.sections) {
			if (Object.hasOwnProperty.call(this.sections, section)) {
				const element = this.sections[section]

				element.scrollScene = new ScrollMagic.Scene({
					triggerHook: 0.5,
					triggerElement: element,
					reverse: true,
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
	},

}
</script>
