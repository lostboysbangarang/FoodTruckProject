<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <div class="card">
          <header class="header">Sign-Up</header>
          <div class="body">
            <form @submit.prevent="pressed">
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.email"
                  name="email"
                  placeholder="Email"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.password"
                  placeholder="Password"
                  name="password"
                  class="form-control"
                  required
                />
              </div>
              <button type="submit" class="button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    async submitForm(event) {
      event.preventDefault()
      const credentials = {
        email: this.form.email,
        password: this.form.password,
      }
      try {
        await this.$auth.loginWith('local', {
          data: credentials,
        })
        this.$router.push('/')
      } catch (error) {
        console.log(`\tCredentials\n`)
        console.log(credentials)
        alert('ERROR: ' + error.message)
      }
    },
  },
}
</script>
