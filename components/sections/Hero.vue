<template>
  <div class="section" :id="content.id">
    <div class="section-body">
      <h2>
        {{ content.title }}
      </h2>
      <div>
        {{ content.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content'],
  data() {
    return {
      content: this.content,
    }
  },
}
</script>

<style scoped>
.section.interaction-in {
  color: red;
	transition: all ease-in-out .3s;
}
</style>
