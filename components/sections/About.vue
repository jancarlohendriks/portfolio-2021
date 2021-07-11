<template>
  <div class="row">
    <div class="col col-xl-10">
      <h2 class="section-title animation-translate-overline animation-item-1">
        {{ content.title }}
      </h2>
      <article class="article animation-translate animation-item-2">
        <p v-for="(text, index) in content.text" :key="index">
					{{ text }}
        </p>
      </article>
    </div>
  </div>
</template>
<script>
export default {
	props: {
		content: {
			type: Object,
			required: true
		}
	}
}
</script>
