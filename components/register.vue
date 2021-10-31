<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <div class="card">
          <header class="header">Sign-Up</header>
          <div class="body">
            <ValidationObserver v-slot="{ invalid }">
              <form :disabled="loading" @submit.prevent="submitForm">
                <!-- todo: validate username length and characters -->

                <ValidationProvider
                  v-slot="{ errors }"
                  name="form.userName"
                  rules="required"
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

                <!-- todo: validate email format -->

                <ValidationProvider
                  v-slot="{ errors }"
                  name="form.email"
                  rules="required"
                >
                  <div class="form-group" label="Email:" label-for="email">
                    <input
                      id="email"
                      v-model="form.email"
                      required
                      Placeholder="Your Email"
                      rules="A valid email is required"
                    />
                    <span class="input-invalid-message">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>

                <!-- todo: validate passwords are the same -->

                <ValidationProvider
                  v-slot="{ errors }"
                  name="form.password1"
                  rules="required"
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
                  rules="required"
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
      form: {
        userName: 'Sticks1988',
        email: 'MikePB6691@AOL.com',
        password: 'emptypass',
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
          alert(error)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
