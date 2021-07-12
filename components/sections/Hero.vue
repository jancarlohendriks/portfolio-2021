<template>
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
      <span v-for="(name, index) in content.name" :key="index">
        {{ name }}<br>
      </span>
    </h1>
    <p class="lead animation-translate animation-item-3">
      {{ content.function }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>
