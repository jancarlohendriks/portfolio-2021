<template>
  <div>
    <h2 class="section-title animation-translate-overline animation-item-1">
      {{ content.title }}
    </h2>
    <div class="row mb-10 animation-translate animation-item-2">
      <div
        class="col-12 col-md-4"
        @mouseenter="$root.$emit('anchor-hover')"
        @mouseleave="$root.$emit('anchor-hover')"
      >
        <div class="contact">
          <strong class="contact-label">Stay in touch</strong>
          <a href="mailto:john@wilson.com">{{ content.email }}</a
          ><br />
          <a href="tel:+420652887351">{{ content.phone }}</a>
        </div>
      </div>
      <div
        class="col-12 col-md-4"
        @mouseenter="$root.$emit('anchor-hover')"
        @mouseleave="$root.$emit('anchor-hover')"
      >
        <div class="contact">
          <strong class="contact-label">Social</strong>
          <a href="https://www.facebook.com/">Facebook</a><br />
          <a href="https://www.linked.com/">LinekdIn</a><br />
        </div>
      </div>
    </div>
    <!-- <div class="row">
			<div class="col-12 col-xl-9">
				<h3 class="section-subtitle animation-translate animation-item-3">
					Leave a message
				</h3>
				<form
					class="needs-validation animation-translate animation-item-4"
					novalidate
				>
					<div class="row">
						<div class="col-12 col-md-6">
							<div class="form-group">
								<label for="contact-form-name">Name</label>
								<input
									type="text"
									class="form-control"
									name="name"
									id="contact-form-name"
									placeholder="Your name"
									required
								/>
								<div class="invalid-feedback">Please enter your name.</div>
							</div>
						</div>
						<div class="col-12 col-md-6">
							<div class="form-group">
								<label for="contact-form-name">E-mail</label>
								<input
									type="email"
									class="form-control"
									name="email"
									id="contact-form-email"
									placeholder="@"
									required
								/>
								<div class="invalid-feedback">
									Please enter a valid e-mail address.
								</div>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="contact-form-message">Message</label>
						<textarea
							class="form-control"
							name="message"
							id="contact-form-message"
							placeholder="Your message"
							rows="5"
							required
						></textarea>
						<div class="invalid-feedback">Please type some message.</div>
					</div>
					<button type="submit" class="btn btn-primary">Send</button>
				</form>
			</div>
		</div> -->
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