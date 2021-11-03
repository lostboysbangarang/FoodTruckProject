<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <div class="error_message">{{ error_message }}</div>
        <div class="card">
          <header class="header">Sign-Up</header>
          <div class="body">
            <ValidationObserver v-slot="{ invalid }">
              <form :disabled="loading" @submit.prevent="submitForm">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="form.userName"
                  rules="required|min:3|max:35|alphaNum"
                >
                  <div
                    class="form-group"
                    label="Username:"
                    label-for="userName"
                  >
                    <input
                      id="userName"
                      v-model="form.userName"
                      required
                      Placeholder="Your User Name"
                    />
                    <span class="input-invalid-message">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="form.email"
                  rules="required|email"
                >
                  <div class="form-group" label="Email:" label-for="email">
                    <input
                      id="email"
                      v-model="form.email"
                      required
                      type="email"
                      Placeholder="Your Email"
                      rules="A valid email is required"
                    />
                    <span class="input-invalid-message">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="form.password1"
                  rules="required|min:6|max:35"
                >
                  <div
                    class="form-group"
                    label="Password:"
                    label-for="password1"
                  >
                    <input
                      id="password1"
                      v-model="form.password1"
                      type="password"
                      required
                      Placeholder="Password"
                      rules="A valid password is required"
                    />
                    <span class="input-invalid-message">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="form.password2"
                  rules="required|min:6|max:35"
                >
                  <div
                    class="form-group"
                    label="Confirm Password:"
                    label-for="password2"
                  >
                    <input
                      id="password2"
                      v-model="form.password2"
                      type="password"
                      required
                      Placeholder="Confirm Password"
                      rules="A valid password is required"
                    />
                    <span class="input-invalid-message">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>

                <button class="button" :disabled="invalid || loading">
                  Submit
                </button>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  name: 'RegisterForm',
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      error_message: '',
      form: {
        userName: '',
        email: '',
        password: '',
      },
      loading: false,
    }
  },

  methods: {
    async submitForm(event) {
      this.loading = true
      await this.$axios
        // todo: display errors in page rather than as alerts. alerts suck.

        .post('/api/register', this.form)
        .then((response) => {
          this.success = true
          this.errored = false
        })
        .catch((error) => {
          this.errored = true
          this.error_message = error.response.data.error
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style lang="scss" scoped>
  .error_message {
    text-align: center;
    color: red;
    font-weight: bold;
    margin: 10px;
  }

</style>
