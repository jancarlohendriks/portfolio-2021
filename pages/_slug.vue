<template>
	<article id="modal-project-1" class="modal fade show">
		<div class="modal-dialog modal-fluid">
			<div class="modal-content">
				<div class="modal-header">
					&nbsp;
					<!-- <nuxt-link class="modal-close" to="/#Projects"> -->
					<div class="modal-close"
					@click="$router.go(-1)">
						<span class="d-none">&times;</span>
					</div>
					<!-- </nuxt-link> -->
				</div>
				<div class="modal-body">
					<article class="article">
						<div class="article-header">
							<h2 class="article-title">{{ project.title }}</h2>
							<h3 class="article-subtitle">{{ project.subtitle }}</h3>
							<p class="article-tags">{{ project.tags }}</p>
						</div>
						<main class="row flex-column-reverse flex-lg-row">
							<div class="col-12 col-lg-6">
								<nuxt-content :document="project" />
							</div>
							<div class="col-12 col-lg-6">
								<a target="_blank" :href="project.url">Open project in new tab</a>
								<br><br>
								<img
									class="img-fluid mb-10"
									:src="`assets/img/${project.img}`"
									alt="Nanovo"
								/>
							</div>
						</main>
					</article>
				</div>
			</div>
		</div>
	</article>
</template>
<script>
export default {
	transition: 'fade',
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  }
}
</script>
