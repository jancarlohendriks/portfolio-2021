<template>
  <div>
    <h2 class="section-title animation-translate-overline animation-item-1">
      Projects
    </h2>
    <div class="row animation-translate animation-item-2">
      <div class="col-12 col-md-4">
        <div class="card" @click.prevent="$root.$emit('modal-open', 0)">
          <img
            class="card-img-top"
            src="assets/img/project_1.jpg"
            alt="Nanovo"
          />
          <div class="card-body">
            <h3 class="card-title">Nanovo</h3>
            <h4 class="card-subtitle">Design e-shop</h4>
            <p class="card-tags">Frontend — Backend</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <a class="card" href="#modal-project-2" data-toggle="modal">
          <img class="card-img-top" src="assets/img/project_2.jpg" alt="Bbop" />
          <div class="card-body">
            <h3 class="card-title">Bbop</h3>
            <h4 class="card-subtitle">Social Network for Musicians</h4>
            <p class="card-tags">Design — Frontend — Backend</p>
          </div>
        </a>
      </div>
      <div class="col-12 col-md-4">
        <a class="card" href="#modal-project-3" data-toggle="modal">
          <img
            class="card-img-top"
            src="assets/img/project_3.jpg"
            alt="Janja Prokić"
          />
          <div class="card-body">
            <h3 class="card-title">Janja Prokić</h3>
            <h4 class="card-subtitle">Jewelry e-shop</h4>
            <p class="card-tags">Frontend — Backend</p>
          </div>
        </a>
      </div>
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