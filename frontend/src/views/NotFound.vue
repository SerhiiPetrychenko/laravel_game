<template>
    <div class="not_found_body">
        <div class="dandruff">
            <dandruff-search/>
        </div>
        <h2>404</h2>
        <p>Page not found!</p>
        <button @click="goBack" class="btn first_text go_back">
            Go back!
        </button>
    </div>
</template>
<script setup>
import {useRouter} from "vue-router";
import DandruffSearch from "../components/Svg/DandruffSearch.vue";
const router = useRouter();
function goBack() {
    router.back();
}
</script>
<style lang="scss" scoped>
.not_found_body {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

.go_back {
    background: var(--pLg-blue);
    color: var(--pLg-white);
    border-radius: 8px;
    border: 1px solid var(--pLg-blue-strong);

    &:hover {
        background: var(--pLg-blue-strong);
    }

    &:disabled {
        background: var(--pLg-blue);
    }
}

.dandruff {
    width: 100px;
    height: 100px;
    color: var(--pLg-blue-strong);

    svg {
        width: 100%;
        height: 100%;
        transform: rotate(180deg);
    }
}
</style>
