<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <!-- <div class="card">
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
            </div> -->
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="submitForm">
            <ValidationProvider
              v-slot="{ errors }"
              name="form.userName"
              rules="required"
            >
              <div class="form-group" label="Username:" label-for="userName">
                <input
                  id="userName"
                  v-model="form.userName"
                  required
                  Placeholder="Your User Name"
                  value="Sticks1988"
                />
                <span class="input-invalid-message">
                  {{ errors[0] }}
                </span>
              </div>
            </ValidationProvider>
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
                  value="MikePB6691@AOL.com"
                />
                <span class="input-invalid-message">
                  {{ errors[0] }}
                </span>
              </div>
            </ValidationProvider>
            <button class="button" :disabled="invalid">Submit</button>
          </form>
        </ValidationObserver>
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
        userName: '',
        email: '',
        password: '',
      },
    }
  },

  methods: {
    async submitForm(event) {
      this.loading = true
      await this.$axios
        .post('/api/register', {
          userName: this.userName,
          email: this.email,
          password: this.password,
        })
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
