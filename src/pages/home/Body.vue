<template>
    <div class="hero-body">
        <div class="container">
            <h1 class="title">
                <span class="has-text-weight-light">
                    Hi, I'm
                </span>
                <span id="firstname" class="has-text-primary has-text-weight-semibold hue">
                    Daniel
                </span>
            </h1>
            <h2 id="surname" class="subtitle has-text-primary has-text-weight-semibold hue">
                Meechan
            </h2>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Body',
};
</script>

<style lang="scss">


.hue {
    background: linear-gradient(124deg,#ff470f,#ff3860,#b86bff,#3273dc);
    background-size: 200% auto;
    color: #000;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: hue 8s ease infinite;

    @-webkit-keyframes hue {
        0% {
            background-position: 1% 80%
        }

        50% {
            background-position: 99% 20%
        }

        to {
            background-position: 1% 80%
        }
    }

    @keyframes hue {
        0% {
            background-position: 1% 80%
        }

        50% {
            background-position: 99% 20%
        }

        to {
            background-position: 1% 80%
        }
    }
}

.is-fullheight .hero-body {
    .subtitle {
        float: right;
        margin-top: 0;
        margin-left: 130px;
    }
    .title, .subtitle {
        font-size: 70px;
    }
    @media screen and (max-width: 374px) {
        .title, .subtitle {
            font-size: 35px;
        }
    }
    @media screen and (min-width: 768px) {
        .title, .subtitle {
            font-size: 128px;
        }
    }
    @media screen and (min-width: 1300px) {
        .title, .subtitle {
            font-size: 156px;
        }
    }
    @media screen and (min-width: 1408px) {
        .title, .subtitle {
            font-size: 192px;
        }
    }
    @media screen and (min-width: 1540px) {
        #surname {
            margin-right: -90px;
        }
    }
}
</style>
