<script>
    export let name;
    export let message;
    export let bgColor;
    export let nominal;
</script>

<main>
    <div
        id="content-alert" class="flex {bgColor} m-2 p-2 w-100 max-w-screen-sm h-auto rounded-lg">
        <div class="flex">
            <div class="logo slideLeft">
                <img
                    alt="Logo"
                    src="https://raw.githubusercontent.com/ardyhim/streamalert/main/assets/logo.png"
                />
            </div>
        </div>
        <div class="flex-auto pl-5">
            <h1 class="slideTop text-teal-50 text-2xl">{name}</h1>
            <p class="slideLeft text-teal-100">{message}</p>
        </div>
        <div class="flex-auto pl-5">
            <h1 class="slideTop text-teal-50 text-2xl text-red-50 text-center">
                {nominal}
            </h1>
        </div>
    </div>

</main>

<style>
    .logo {
        width: 100px;
        height: 120px;
    }

    .slideTop {
        animation: 2s anim-slideTop ease-out;
    }

    .slideLeft {
        animation: 2s anim-slideLeft ease-out;
    }

    .slideRight {
        animation: 2s anim-slideRight ease-out;
    }

    @keyframes anim-slideTop {
        0% {
            opacity: 0;
            transform: translateY(80%);
        }

        20% {
            opacity: 0;
        }

        50% {
            opacity: 1;
            transform: translateY(0%);
        }

        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    @keyframes anim-slideLeft {
        0% {
            opacity: 0;
            transform: translateX(80%);
        }

        20% {
            opacity: 0;
        }

        50% {
            opacity: 1;
            transform: translateX(0%);
        }

        100% {
            opacity: 1;
            transform: translateX(0%);
        }
    }

    @keyframes anim-slideRight {
        0% {
            opacity: 0;
            transform: translateX(-80%);
        }

        20% {
            opacity: 0;
        }

        50% {
            opacity: 1;
            transform: translateX(0%);
        }

        100% {
            opacity: 1;
            transform: translateX(0%);
        }
    }

    .slide-left {
        animation: 2s slide-left cubic-bezier(0.175, 0.885, 0.32, 1.275) 5s;
    }

    @-webkit-keyframes slide-left {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }

        50% {
            -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
        }

        100% {
            -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
        }
    }

    @keyframes slide-left {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }

        50% {
            -webkit-transform: translateX(-102%);
            transform: translateX(-102%);
        }

        100% {
            -webkit-transform: translateX(-102%);
            transform: translateX(-102%);
        }
    }

    .slide-right {
        animation: 1s slide-right cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @-webkit-keyframes slide-right {
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }

        0% {
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
            opacity: 0;
        }
    }

    @keyframes slide-right {
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }

        0% {
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
            opacity: 0;
        }
    }
</style>
