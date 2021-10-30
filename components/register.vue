<template>
    <!-- <v-form>
        <v-text-field   v-model="userInfo.name" 
                        label= "name"
                        :rules="[required('name')]"
                        v-if="hasName"/>
        <v-text-field   v-model="userInfo.email" 
                        label= "email"
                        :rules="[required('email'), emailFormat()]"/>
        <v-text-field   v-model="userInfo.password" 
                        label= "Password"
                        :type="showPassword ? 'text' : 'password'"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        :rules="[required('password'), minLength('password', 8)]"
                        v-if="hasName"/>
        <v-btn @click="submitForm(userInfo)" :diabled="!valid">{{ buttonTtttext }}</v-btn>
    </v-form> -->
    <div class="container">
        <div class="row">
            <div class="column">
                <div class="card">
                    <header class="header">
                        Sign-Up
                    </header>
                    <div class="body">
                        <form @submit.prevent="pressed">
                            <div class="form-group">
                                <input type="text" placeholder="Email" v-model="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Password" v-model="password" class="form-control">
                            </div>
                            <button class="button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import validations from "utils/validations"
// import * as firebase from 'firebase/app';
// import '@firebase/auth';
// export default {
//     data() {
//         return {
//             userInfo: {
//                 email: '',
//                 password: '',
//             },
//         }
//     },
//     methods: {
//         pressed() {
//             // console.log(`\t${userInfo.email}\n\t${userInfo.password}`)
//             firebase.auth().createUserWithEmailAndPassword(this.userInfo.email, this.userInfo.password)
//                 .then((user) => {
//                     console.log(`\t${user}`);
//                     this.$router.push(`/account`)
//                 }).catch(error => {
//                     this.errors = error;
//                 })
//         }
//     }
// }
</script>