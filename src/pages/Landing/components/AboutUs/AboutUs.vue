<script lang="ts" setup>
    import style from './AboutUs.module.scss';
import Title from 'components/Title/Title.vue';
</script>
<template>
    <div :class="style.aboutUs">
        <img :class="style.img" src="../../../../assets/img/aboutUs.png" alt="aboutAs">
        <div :class="style.textBlock">
            <Title text="О нас" />
            <p>PeroTravel - Первый онлайн-сервис по бронированию экскурсий без очередей и операторов. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
    </div>
</template>