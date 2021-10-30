<template>
    <div class="container">
        <div class="row">
            <div class="column">
                <ValidationObserver v-slot="{ invalid }">
                    <form @submit.prevent="submitForm">
                        <ValidationProvider     v-slot="{ errors }"
                                                name="form.userName"
                                                rules="required">
                            <div class="form-group" label="Username:" label-for="userName">
                                <input      v-model="form.userName"
                                            required
                                            Placeholder="Your User Name"
                                            id="userName"/>
                                <span class="input-invalid-message">
                                    {{ errors[0] }}
                                </span>
                            </div>

                        </ValidationProvider>
                        <ValidationProvider     v-slot="{ errors }"
                                                name="form.email"
                                                rules="required|email">
                            <div class="form-group" label="Email:" label-for="email">
                                <input      v-model="form.email"
                                            v-validate="'required|email'"
                                            rules="email"
                                            data-vv-as="email"
                                            required
                                            email
                                            Placeholder="Your Email"
                                            id="email"/>
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
    
    import { ValidationObserver, ValidationProvider } from "vee-validate";
    export default {
        components: {
            ValidationObserver,
            ValidationProvider
        },
        name: "RegisterForm",
        data() {
            return { 
                form: {
                    userName: "",
                    email: "",
                    password: "",
                }
            };
        },
        methods: {
            submitForm(event) {
                console.log(this.$validator)
                event.preventDefault();
                const credentials = {
                    userName: this.form.userName,
                    email: this.form.email,
                    password: this.form.password
                }
                alert(credentials);
                console.log(credentials);                
                this.$router.push("/")
            }
        }
    }
</script>