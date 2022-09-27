<script lang="ts" setup>
    import style from "./HeaderImage.module.scss";
    type HeaderImageProps = {
        src: string,
        onClick: (event: any) => void
    }
    const props = defineProps<HeaderImageProps>();
</script>
<template>
    <img @click="props.onClick" :src="props.src" alt="HeaderImage">
</template>