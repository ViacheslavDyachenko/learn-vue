<script lang="ts" setup>
    import { ref } from 'vue';
    import style from './TopFilter.module.scss';
    import Button from 'components/Button';
    const country = ref('Абхазия');
    const date = ref('10 ноября 2021');
    const humans = ref('5 человек');
    const category = ref('АВТОБУСНЫЙ ТУР');
    const upadateCategory = (event: any) => {
        category.value = event.target.textContent;
    }
</script>
<template>
    <div :class="style.filterBlock">
        <div :class="style.nav">
            <router-link to="/excursions/"><button @click="upadateCategory">АВТОБУСНЫЙ ТУР</button></router-link>
            <button @click="upadateCategory">ДЖИППИНГ</button>
            <button @click="upadateCategory">ЯХТИНГ</button>
            <button @click="upadateCategory">КАНЬОНИНГ</button>
        </div>
        <div :class="style.filters">
            <input type="text" v-model="country">
            <input type="date" v-model="date">
            <input type="text" v-model="humans">
            <Button redirectTo="#" text="Показать" />
        </div>
    </div>
</template>