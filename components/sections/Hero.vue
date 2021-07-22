<template>
  <div class="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
		<div class="jumbotron-img-container --has-blob animation-translate animation-item-1">
			<Blob scale="1.195" time="5" amount="2" fill="#ff007a" />
			<Blob scale="1.195" time="4.75" amount="2" fill="#ff00b5" />
			<Blob scale="1.195" time="3.55" amount="2" fill="#ff23f2" />
			<Blob scale="1.195" time="2.35" amount="2" fill="#ff0000" />
			<img
				src="assets/img/avatar.png"
				alt="Avatar"
				class="jumbotron-img"
				@mouseenter="$root.$emit('anchor-hover')"
				@mouseleave="$root.$emit('anchor-hover')"
			/>
		</div>
    <h1
      class="
        display-1 display-animated display-animated-in
        animation-translate animation-item-2
      "
    >
      <span
        v-for="(name, index) in content.name"
        :key="index"
        @mouseenter="$root.$emit('anchor-hover')"
        @mouseleave="$root.$emit('anchor-hover')"
      >
        {{ name }}<br />
      </span>
    </h1>
    <p class="lead animation-translate animation-item-3">
      {{ content.function }}
    </p>
  </div>
</template>
<script>
import Blob from '~/components/Blob.vue'
export default {
	components: {
    Blob
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>
