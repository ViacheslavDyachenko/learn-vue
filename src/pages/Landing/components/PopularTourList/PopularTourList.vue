<script lang="ts" setup>
    import { iteratorSymbol } from 'immer/dist/internal';
import PopularTour from '../PopularTour';
    import style from './PopularTourList.module.scss';
    type PopularTourListProps = {
        list: {
            img: string,
            category: string,
            title: string,
            time: string,
            price: number,
            description: string,
            detailsUrl: string,
        }[]
    }
    const props = defineProps<PopularTourListProps>();
</script>
<template>
    <div v-if="typeof props.list === 'object'" :class="style.list">
        <PopularTour
            v-for="item of props.list"
            :img="item.img"
            :category="item.category"
            :title="item.title"
            :time="item.time"
            :price="item.price"
            :description="item.description"
            :detailsUrl="item.detailsUrl"
        />
    </div>
</template>