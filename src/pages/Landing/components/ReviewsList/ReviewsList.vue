<script lang="ts" setup>
    import style from './ReviewsList.module.scss';
    import Reviews from '../Reviews';
    type ReviewsListProps = {
        list: {
            img: string,
            name: string,
            age: number,
            text: string
        }[]
    }
    const props = defineProps<ReviewsListProps>();
</script>
<template>
    <div :class="style.list">
        <Reviews
            v-for="item of props.list"
            :img="item.img"
            :name="item.name"
            :age="item.age"
            :text="item.text"
        />
    </div>
</template>