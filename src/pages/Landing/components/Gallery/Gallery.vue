<script lang="ts" setup>
    import style from './Gallery.module.scss';
</script>
<template>
    <div :class="style.gallery">
        <img src="../../../../assets/img/gallery/1.png" alt="img">
        <div>
            <img src="../../../../assets/img/gallery/5.png" alt="img">
            <div>
                <img src="../../../../assets/img/gallery/6.png" alt="img">
                <img src="../../../../assets/img/gallery/7.png" alt="img">
            </div>
        </div>
        <img src="../../../../assets/img/gallery/2.png" alt="img">
        <div>
            <div>
                <img src="../../../../assets/img/gallery/3.png" alt="img">
                <img src="../../../../assets/img/gallery/4.png" alt="img">
            </div>
            <img src="../../../../assets/img/gallery/8.png" alt="img">
        </div>
    </div>
</template>