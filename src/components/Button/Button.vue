<script lang="ts" setup>
    import style from "./Button.module.scss";
    type ButtonProps = {
        text: string,
        withArrow?: boolean,
        redirectTo: string,
        onClick?: () => void
    }
    const props = defineProps<ButtonProps>();
</script>
<template>
    <router-link :to="redirectTo">
        <button :class="style.button">
            {{ props.text }}
            <img v-if="props.withArrow" src="../../assets/img/Arrow.svg" alt="->">
        </button>
    </router-link>
</template>