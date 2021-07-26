<template>
	<div
		class="page-body with-header"
		:class="{ 'sections-nav-in': menuOpen }"
	>
		<div class="page-bg"></div>
		<LocomotiveScroll ref="scroller" :getted-options="scrollOptions">
			<header class="header">
				<div
					class="
						container-fluid-limited
						d-flex
						align-items-center
						justify-content-between
					"
				>
					<span></span>
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
							<!-- :href="'#' + section.navName" -->
						<a
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
							<a v-for="(info, index) in content.personal"
							:key="index"
							target="_blank"
							:href="(info.key ? `${info.key}` : '') + `${info.value}`">
								{{ info.placeholder }}
							<br v-if="index < content.personal.length - 1" />
							</a>
						</div>
					</li>
				</ul>
			</nav>

			<main class="content">
				<div class="container-fluid-limited">
					<div class="row">
						<div id="sections" ref="sections" class="col col-xl-9" data-scroll-container>
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
			<!-- <PageCursor /> -->
		</LocomotiveScroll>
	</div>
</template>

<script>
import LocomotiveScroll from '~/LocomotiveScroll/component/index.vue'
import Section from '~/components/Section.vue'
import PageCursor from '~/components/PageCursor.vue'

// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

// import { gsap, ScrollTrigger } from "gsap/all";

export default {
  components: {
		LocomotiveScroll,
    Section,
		PageCursor
  },

  data() {
    return {
      menuOpen: false,
      observer: null,
			selected: 0,
			isMobile: true,
			scrollOptions: {
				smooth: true,
				direction: 'vertical',
				lerp: 0.065,
				smartphone: {
					smooth: false
				},
				tablet: {
					smooth: true,
					direction: 'vertical',
					lerp: 1,
				},
			}
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

	beforeUpdate() {
		this.$nuxt.$emit('update-locomotive')
	},

  mounted() {

		const hash = location.hash
		if(hash) {
			const newSection = document.querySelector(hash)
			this.$refs.scroller.locomotive.scrollTo(newSection)
			history.pushState("", document.title, window.location.pathname)
		}
		this.onResize
		window.addEventListener('resize', this.onResize)
    // this.initObserver()
    // this.observeSections()
    this.$root.$on('next-section', (index) => { this.goTo(index) })


		const locoScroll = this.$refs.scroller.locomotive

		locoScroll.on('scroll', (obj) => {
			// let currentElId = obj.currentElements[Object.keys(obj.currentElements)[0]].id
			// let selectedIndex = currentElId.replace(/\D/g, "")
			// this.selected = selectedIndex
			
			// console.log(this.$refs.scroller);
			// ScrollTrigger.update();
			// this.onScroll
		});
  },

  methods: {

		onScroll() {
			[...this.sections].forEach(section => {
        var activeSection = section.id;
        var menuitem = 'menu__'.concat(activeSection);
        var menulink = document.getElementById(menuitem).querySelector('.sectionLink');
        var menupointer = document.getElementById(menuitem).querySelector('.pointer');
        // ----create a new timeline
				var tl = gsap.timeline({
				id: "Nav Animation",
				defaults:{duration:0.5},
				scrollTrigger: {
						trigger: section,
						start: "top 80%",
						end: "+5px",
						toggleActions: "play reverse play reverse",
					}
        });
        tl.to(menulink, {duration:0.5, scale:"1.5"},">");
        tl.to(menupointer, {duration:0.5, autoAlpha:1, width:"15"},"<");
        return tl;

    	}); //End forEach section loop
		},
		// onScroll() {
		// 	[...this.sections].forEach(section => {
		// 		const selected = [...this.sections].indexOf(section)
		// 		if (section.hasAttribute('data-scroll-section-inview')) {
		// 			console.log(selected);
		// 		}
		// 	});
		// },

		onResize() {
			var mql = window.matchMedia('(min-width: 990px)');
			mql.matches ? this.isMobile = false : this.isMobile = true
		},

    goTo(index) {
      // if (this.selected == index) {
      //   return
      // }
      const newSection = this.sections[index]
      // newSection.scrollIntoView()
			this.$refs.scroller.locomotive.scrollTo(newSection)
			// console.log(this.$refs.scroller);
    },

    observeSections() {
      this.sections.forEach((section) => {
        this.observer.observe(section)
      })
    },

    initObserver() {
      let options = { threshold: [0.5] }
      this.observer = new IntersectionObserver((entries) => {
        entries.filter((e) => {
          const selected = [...this.sections].indexOf(e.target)
          if (e.isIntersecting) {
						this.selected = selected
            // e.target.classList.add('interaction-in')
						// this.$nuxt.$emit('update-locomotive')
          }
        })
      }, options)
    },

  },
}
</script>
