<template>
    <div class="main">
        <div class="container"></div>
        <div class="welcome">
            <div class="logo">
                <img src="~/assets/food-truck.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        overflow-x: hidden;
    }
    .main {
        position: absolute;
        & .container {
            height: calc(100vh - 60px);
            width: 100vw;
            background-image: url("~/assets/background.jpg");
            background-size: cover;
            background-position: center;
            position: absolute;
            z-index: 1;
        }
        & .welcome {
            @media screen and (max-width: 1100px) {
                width: 80vw;
                margin-left: 10vw;
                margin-top: calc(35vh - 60px);
                height: 30vh;
            }
            position: relative;
            margin-left: 20vw;
            border-radius: 32px;
            z-index: 2;
            background-color: rgba(104, 176, 171, .7);
            width: 60vw;
            height: 60vh;
            margin-top: calc(20vh - 60px);
            display: flex;
            justify-content: center;
            & .logo {
                width: 80%;
                height: 60%;
                display: flex;
                justify-content: center;
                border: 5px solid black;
                border-style: none none solid none;
                & img {
                    width: auto;
                    height: 100%;
                }
            }
        }
    }
</style>