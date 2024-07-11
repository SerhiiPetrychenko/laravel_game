<template>
    <section v-if="isLoading">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "Loader",
    computed: {
        ...mapGetters([
            'isLoading'
        ])
    }
}
</script>

<style lang="scss" scoped>
.lds-ring {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(45deg);
    z-index: 9999999999;
}
.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid var(--tyr-gray);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--tyr-blue) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

</style>
