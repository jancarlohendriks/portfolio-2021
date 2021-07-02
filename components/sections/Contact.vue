<template>
  <section id="section-10" class="section animation">
    <div class="section-body">
      <h2 class="section-title animation-translate-overline animation-item-1">
        Contact
      </h2>
      <div class="row mb-10 animation-translate animation-item-2">
        <div class="col-12 col-md-4">
          <div class="contact">
            <strong class="contact-label">Stay in touch</strong>
            <a href="mailto:john@wilson.com">john@wilson.com</a><br />
            <a href="tel:+420652887351">+420 652 887 351</a>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="contact">
            <strong class="contact-label">Social</strong>
            <a href="https://www.facebook.com/">Facebook</a><br />
            <a href="https://www.linked.com/">LinekdIn</a><br />
            <a href="https://www.twitter.com/">Twitter</a>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="contact">
            <strong class="contact-label">Address</strong>
            1234 Houston Street<br />
            New York<br />
            NY 123456<br />
          </div>
        </div>
      </div>
      <div class="row">
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
      </div>
    </div>
    <div class="section-footer animation-translate animation-item-5">
      <span class="section-next goto-section">
        <span class="section-next-counter">10/10</span>
      </span>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
