<script lang="ts" setup>
    import style from './PopularTour.module.scss';
    import Button from 'components/Button';
    type PopularTourProps = {
        img: string,
        category: string,
        title: string,
        time: string,
        price: number,
        description: string,
        detailsUrl: string
    }
    const props = defineProps<PopularTourProps>();
</script>
<template>
    <div
        :style="{backgroundImage: `url(${props.img})`}"
        :class="style.tour"
    >
        <div :class="style.content">
            <p :class="style.category">{{ props.category }}</p>
            <p :class="style.title">{{ props.title }}</p>
            <div :class="style.timeAndPrice">
                <div :class="style.timeBlock">
                    <img src="../../../../assets/img/time.svg" alt="time">
                    <p>{{ props.time }}</p>
                </div>
                <div :class="style.priceBlock">
                    <img src="../../../../assets/img/price.svg" alt="price">
                    <p>{{ props.price }} ₽</p>
                </div>
            </div>
            <p :class="style.description">{{ props.description }}</p>
            <Button
                redirectTo="#"
                text="Подробнее"
            />
        </div>
    </div>
</template>