<template>
  <div>
    <h2 class="section-title animation-translate-overline animation-item-1">
      Projects
    </h2>
    <div class="row animation-translate animation-item-2">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="col-12 col-md-4"
      >
        <div class="card" @click.prevent="$root.$emit('modal-open', 0)">
          <img
            class="card-img-top"
            :src="`assets/img/project_${index + 1}.jpg`"
            :alt="project.title"
          />
          <div class="card-body">
            <h3 class="card-title">{{ project.title }}</h3>
            <h4 class="card-subtitle">{{ project.subtitle }}</h4>
            <p class="card-tags">{{ project.tags }}</p>
          </div>
        </div>
      </div>
    </div>
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
  computed: {
    projects() {
      return this.content.projects
    },
  },
  mounted() {
    console.log(this.projects[0].title)
  },
}
</script>
