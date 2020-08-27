<template>
  <footer >
    <div class="inner-wrap">
      <div class="footer_left">
        <div class="address">
          <p>
            123 Bacon Street, 9th Floor
            <br />London, UK 
            <br />12393901
          </p>
          <p>
            <a >info@screenprints.com</a>
            <br />
            <a >Store</a>
          </p>
          <p>SCREENPRINTS is a mockup </p>
        </div>
        <div class="social">
        </div>
      </div>
      <div class="footer_right">
        <img

          class="footer_logo"
          alt="Matte"
        />
        <ul class="matte_components">
          <li>
            <a target="_blank">Books</a>
          </li>
          <li>
            <a target="_blank">Blog</a>
          </li>
          <b>
            <li>
              <a href="https://screenprints.com/" target="_blank">About</a>
            </li>
          </b>
        </ul>
        <div class="email_subscribe">
          <div >
            <form
              
            >
              <div >
                <div class="mc-field-group">
                  <label for="mce-Email">Join Our Mailing List:</label>
                  <input
                    type="email"
                    value
                    name="EMAIL"
                    class="required email"
                    placeholder
               
                  />
                  <input
                    type="submit"
                    value
                    name="subscribe"
                   
                    class="button"
                  />
                </div>
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input
                    type="text"
                   
                    tabindex="-1"
                    value
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
  components: [],
};
</script>

<style scoped lang="scss">
</style>