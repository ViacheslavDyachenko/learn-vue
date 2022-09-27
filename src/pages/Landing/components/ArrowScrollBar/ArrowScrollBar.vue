<script lang="ts" setup>
    import style from './ArrowScrollBar.module.scss';
    type ArrowScrollBarProps = {
        leftBtnIsActive: boolean,
        rightBtnIsActive: boolean,
        scrollOnTheLeft: () => void,
        scrollOnTheRight: () => void
    }
    const props = defineProps<ArrowScrollBarProps>();
</script>
<template>
    <div :class="style.scrollBarBlock">
        <img @click="props.scrollOnTheLeft" :class="style.leftArrow" :src="require(`../../../../assets/img/leftScrollArrow${props.leftBtnIsActive ? 'Active' : ''}.svg`)" alt="<">
        <img @click="props.scrollOnTheRight" :class="style.rightArrow" :src="require(`../../../../assets/img/rightScrollArrow${props.rightBtnIsActive ? 'Active' : ''}.svg`)" alt=">">
        <div :class="style.scrollBar">
            <div :class="style.line"></div>
            <div :class="style.indicator"></div>
        </div>
    </div>
</template>