<script lang="ts" setup>
    import style from './TypesExcursions.module.scss';
    type TypesExcursionsProps = {
        src: string,
        title: string,
        description: string
    }
    const props = defineProps<TypesExcursionsProps>();
</script>
<template>
    <div :class="style.type">
        <img :class="style.img" :src="props.src" alt="img">
        <div :class="style.descriptionBlock">
            <p :class="style.title">{{ props.title }}</p>
            <p :class="style.description">{{ props.description }}</p>
        </div>
    </div>
</template>