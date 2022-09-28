<script lang="ts" setup>
    import { ref } from 'vue';
    import style from './Feedback.module.scss';
import Button from 'components/Button/Button.vue';
    const name = ref('');
    const phone = ref('');
    const mail = ref('');
</script>
<template>
    <div :class="style.feedback">
        <div :class="style.form">
            <p :class="style.title">Остались вопросы?</p>
            <p :class="style.label">Оставь заявку и мы ответим</p>
            <div :class="style.inputsBlock">
                <input type="text" placeholder="Имя" v-model="name">
                <input type="text" placeholder="Телефон" v-model="phone">
                <input type="text" placeholder="Почта" v-model="mail">
            </div>
            <Button
                text="Оставить заявку"
                redirectTo="#"
            />
        </div>
    </div>
</template>