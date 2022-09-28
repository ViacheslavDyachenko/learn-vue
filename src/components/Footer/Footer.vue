<script lang="ts" setup>
    import style from './Footer.module.scss';
</script>
<template>
    <div :class="style.footer">
        <router-link to="/">
            <img src="../../assets/img/footerLogo.svg" alt="logo">
        </router-link>
        <nav :class="style.nav">
            <router-link to="/">Главная</router-link>
            <router-link to="/excursions">Экскурсии</router-link>
            <router-link to="/personal-area">Личный кабинет</router-link>
        </nav>
        <div :class="style.socialNetworks">
            <div>
                <img src="../../assets/img/wh.svg" alt="wh">
                <a target="_blank" href="https://api.whatsapp.com/send/?phone=89167904620">8 916 790 46 20</a>
            </div>
            <div>
                <img src="../../assets/img/tg.svg" alt="wh">
                <a target="_blank" href="https://t.me/iDyachenko_s">8 916 790 46 20</a>
            </div>
            <div>
                <img src="../../assets/img/tg.svg" alt="wh">
                <a target="_blank" href="https://t.me/iDyachenko_s">Телеграм-бот PeroTravel</a>
            </div>
        </div>
        <div :class="style.contacts">
            <div>
                <img src="../../assets/img/mail.svg" alt="mail">
                <p>office@perotravel.ru</p>
            </div>
            <div>
                <a href="#"><img src="../../assets/img/footerVk.svg" alt="VK"></a>
                <a href="#"><img src="../../assets/img/footerInst.svg" alt="INST"></a>
                <a href="#"><img src="../../assets/img/footerFacebook.svg" alt="FACEBOOK"></a>
            </div>
        </div>
    </div>
</template>