<template>
    <div class="w_full h_full row_flex">
        <div class="column_flex gap_20">
            <h2>Welcome First Page</h2>
            <div class="w_full row_flex gap_20">
                <LogInBtn/>
                <RegisterBtn/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.h_full {
    height: 100vh;
}

.row_flex {
    justify-content: center;
}

.column_flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.gap_20 {
    gap: 20px;
}
</style>
<script setup lang="ts">
import LogInBtn from "@/components/UI/buttons/LogInBtn.vue";
import RegisterBtn from "@/components/UI/buttons/RegisterBtn.vue";
</script>
