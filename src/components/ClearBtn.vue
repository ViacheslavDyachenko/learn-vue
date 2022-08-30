<script setup lang="ts">
    import { useAttrs } from 'vue';

    const attrs = useAttrs();
</script>

<template>
    <div>
        <button @click="attrs.onClick">Удалить</button>
    </div>
</template>

<script lang="ts">
    export default {
        inheritAttrs: false
    }
</script>