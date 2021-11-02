<template>
    <div class="form-wrap">
        <ValidationObserver v-slot="{invalid}">
            <form :disabled="loading" @submit.prevent="submissive">
                <p class="register">
                    Don't have an account? Register now:
                    <nuxt-link to="/register">Register</nuxt-link>
                </p>
                <h2>Login to FoodTrucks</h2>
                <div class="inputs">
                    <div class="input">
                        <ValidationProvider     v-slot="{errors}"
                                                name="email"
                                                rules="required|email">
                            <input  id="email"
                                    type="email"
                                    v-model="email"
                                    placeholder="Your Login Email">
                            <!-- <img class="icon" src="~assets/svgs/email.svg"/> -->
                            <span class="input-invalid-message">{{errors[0]}}</span>
                            <!-- <div    class="form-group"
                                    label="Email"
                                    label-for="email">
                            </div>                     -->
                        </ValidationProvider>
                    </div>
                    <div class="input">
                        <ValidationProvider     v-slot="{errors}"
                                                name="password"
                                                rules="required|min:6|max:35">
                            <input  id="password"
                                    type="password"
                                    v-model="password"
                                    placeholder="Your Login Password"/>
                            <span class="input-invalid-message">{{errors[0]}}</span>
                            <!-- <img class="icon" src="~assets/svgs/password.svg"/> -->
                            <!-- <div    class="form-group"
                                    label="Password"
                                    label-for="password">
                            </div>                     -->
                        </ValidationProvider>
                    </div>
                </div>
                <button class="button" :disabled="invalid || loading">
                    Login
                </button>
                <div class="angle"></div>
            </form>
        </ValidationObserver>
        <div class="background"></div>
    </div>
</template>

<script>
    import { ValidationObserver, ValidationProvider } from 'vee-validate'
    // import email from "../assets/svgs/email.svg";
    // import password from "../assets/svgs/password.svg";
    export default {
        name: 'LoginForm',
        components: {
            ValidationObserver,
            ValidationProvider,
            // email,
            // password
        },
    }
</script>

<style lang="scss">
    body {
        background-color: whitesmoke;
    }
    .form-wrap {
        overflow: hidden;
        background-color: whitesmoke;
        display: flex;
        // z-index: 3;
        height: calc(100vh - 60px);
        justify-content: center;
        align-self: center;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        // max-width: 1600px;
        a { 
            text-decoration: none;
            color: #4A7C59;
        }
        .register {
            margin-bottom: 32px;
            .nuxt-link {
                color: black;
            }
        }
        form { 
            padding: 0 10px;
            position: relative;
            display: flex;
            z-index: 3;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            @media (min-width: 1100px) {
                padding: 0 50px;
            }
            h2 { 
                text-align: center;
                font-size: 32px;
                color: #68B0AB;
                margin-bottom: 40px;
                @media (min-width:1100px) {
                    font-size: 40px;
                }
            }
            .inputs {
                width: 100%;
                max-width: 350px;
                .input {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 8px;
                    input { 
                        width: 100%;
                        border: none;
                        background-color: #FAF3DD;
                        padding: 4px 4px 4px 30px;
                        height: 50px;
                        &:focus {
                            outline: none;
                        }
                        &:active {
                            background-color: #FAF3DD;
                        }
                        &#email {
                            background-image: url(assets/svgs/email.svg);  
                        }
                        &#password {
                            background-image: url(assets/svgs/password.svg);  
                        }
                        background-repeat: no-repeat;
                        background-position: 8px center;
                        // background-position-x: 8px;
                        background-size: 12px auto;
                    }
                    input:-webkit-autofill,
                    input:-webkit-autofill:hover, 
                    input:-webkit-autofill:focus, 
                    input:-webkit-autofill:active{
                        -webkit-box-shadow: 0 0 0 30px #FAF3DD inset !important;
                        box-shadow: 0 0 0 30px #FAF3DD inset !important;
                    }
                    .icon {
                        width: 12px;
                        height: auto;
                        position: absolute;
                        left: 6px;
                    }
                }
            }
        }
        .angle {
            display: none;
            position: absolute;
            background-color: whitesmoke;
            transform: rotateZ(9deg);
            z-index: -1;
            width: 360px;
            right: -30%;
            height: 110vh;
            @media (min-width:900px) {
                display: initial;
            }
        }
        .background {
            display: none;
            flex: 2;
            background-size: cover;
            background-position: center;
            background-image: url(assets/loginRegister.jpg);
            width: 100%;
            height: 100%;
            @media (min-width:900px) {
                display: initial;
            }
        }
        
    }
</style>