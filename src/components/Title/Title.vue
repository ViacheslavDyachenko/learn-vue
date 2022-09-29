<script lang="ts" setup>
    import style from "./Title.module.scss";
    type TitleProps = {
        text?: string,
        class?: string
    }
    const props = defineProps<TitleProps>();
</script>
<template>
    <h1 :class="`${style.title} ${props.class}`">{{ props.text }}</h1>
</template>