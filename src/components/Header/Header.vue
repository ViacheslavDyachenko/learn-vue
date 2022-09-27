<script lang="ts" setup>
    import style from "./Header.module.scss";
    import Button from "components/Button";
    import HeaderImage from "components/HeaderImage";
    import { onMounted, onUnmounted, ref } from "vue";
    const headerNode = ref(null);
    const imageList = ref(null);
    const timer = ref(null);
    const headerImageList = ref([
        {
            id: 1,
            url: require('../../assets/img/HeaderImage1.png')
        },
        {
            id: 2,
            url: require('../../assets/img/HeaderImage1.png')
        },
        {
            id: 3,
            url: require('../../assets/img/HeaderImage1.png')
        },
        {
            id: 4,
            url: require('../../assets/img/HeaderImage1.png')
        }
    ])
    const editedHeaderImage = (event: any) => {
        headerNode.value.style.backgroundImage = `url(${event.target.src})`;
    }
    onMounted(() => {
        timer.value = setInterval(() => {
            if (parseInt(imageList.value.style.left) <= 0) clearInterval(timer.value);
            imageList.value.style.left = imageList.value.getBoundingClientRect().left - 1 + 'px'
        }, 20)
    })
    onUnmounted(() => {
        clearInterval(timer.value);
    })
</script>
<template>
    <div ref="headerNode" :class="style.header">
        <div :class="style.navConteiner">
            <router-link to="/">
                <img src="../../assets/img/logo.svg" alt="PERO TRAVEL">
            </router-link>
            <nav>
                <router-link to="/">Главная</router-link>
                <router-link to="/excursions">Экскурсии</router-link>
                <router-link to="/personal-area">Личный кабинет</router-link>
            </nav>
        </div>
        <div :class="style.content">
            <div :class="style.title">
                <p>ПУТЕШЕСТВУЙ</p>
                <p>вместе с</p>
                <p>PERO TRAVEL</p>
            </div>
            <div :class="style.socialNetworks">
                <a href="#"><img src="../../assets/img/vk.svg" alt="vk"></a>
                <a href="#"><img src="../../assets/img/inst.svg" alt="inst"></a>
                <a href="#"><img src="../../assets/img/facebook.svg" alt="facebook"></a>
            </div>
        </div>
        <Button
            withArrow
            redirectTo="/excursions"
            text="К экскурсиям"
        />
        <div ref="imageList" :class="style.imageList">
            <HeaderImage v-for="item of headerImageList" :key="item.id" :src="item.url" :onClick="editedHeaderImage" />
        </div>
    </div>
</template>

<style>
    .router-link-active {
        color: #FFC700!important;
    }
</style>