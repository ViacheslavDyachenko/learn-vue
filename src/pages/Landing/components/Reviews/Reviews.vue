<script lang="ts" setup>
    import style from './Reviews.module.scss';
    type ReviewsProps = {
        img: string,
        name: string,
        age: number,
        text: string
    }
    const props = defineProps<ReviewsProps>();
</script>
<template>
    <div :class="style.reviews">
        <img :src="props.img" alt="img">
        <div :class="style.content">
            <p :class="style.title">{{ props.name }}, {{ props.age }} лет</p>
            <p :class="style.text">{{ props.text }}</p>
        </div>
    </div>
</template>