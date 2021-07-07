<template>
  <div>
    <p>
      {{ content.slug }}
    </p>
    <p>
      {{ content.createdAt }}
    </p>
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
