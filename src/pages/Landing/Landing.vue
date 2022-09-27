<script lang="ts" setup>
    import Title from 'components/Title/Title.vue';
    import PopularTourList from './components/PopularTourList';
    import { ref } from 'vue';
    import style from './Landing.module.scss';
    import styleTour from './components/PopularTourList/PopularTourList.module.scss';
    import styleScroll from './components/ArrowScrollBar/ArrowScrollBar.module.scss';
    import ArrowScrollBar from './components/ArrowScrollBar';
    import AboutUs from './components/AboutUs';
    import TypesExcursionsList from './components/TypesExcursionsList';
    const tourList = ref([
        {
            img: require('../../assets/img/tour/tour1.png'),
            category: 'Автобусный тур',
            title: 'Обзорная по Сочи (из Адлера)',
            time: '6 часов',
            price: 618,
            description: 'Приглашаем вас на экскурсию "Обзорная по Большому Сочи": Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...',
            detailsUrl: '#',
        },
        {
            img: require('../../assets/img/tour/tour2.png'),
            category: 'Конный тур',
            title: 'Конные прогулки',
            time: '1,5 часа',
            price: 1809,
            description: 'Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...',
            detailsUrl: '#',
        },
        {
            img: require('../../assets/img/tour/tour3.png'),
            category: 'Квадротур',
            title: 'Пасть дракона',
            time: '2,5 часа',
            price: 3515,
            description: 'Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или "Пасть Дракона" (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...',
            detailsUrl: '#',
        },
        {
            img: require('../../assets/img/tour/tour1.png'),
            category: 'Автобусный тур',
            title: 'Женский монастырь',
            time: '4 часа',
            price: 618,
            description: 'Троице - Георгиевский женский монастырь расположен в селе Лесное в живописном месте, в котором гармонично сочетаются красота природы и красота архитектуры сотворенная руками человека. Это удивительное место расположено совсем недалеко от Чёрного моря - всего в 20 километрах',
            detailsUrl: '#',
        },
        {
            img: require('../../assets/img/tour/tour1.png'),
            category: 'Автобусный тур',
            title: 'Обзорная по Сочи (из Адлера)',
            time: '6 часов',
            price: 618,
            description: 'Приглашаем вас на экскурсию "Обзорная по Большому Сочи": Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...',
            detailsUrl: '#',
        },
        {
            img: require('../../assets/img/tour/tour1.png'),
            category: 'Автобусный тур',
            title: 'Обзорная по Сочи (из Адлера)',
            time: '6 часов',
            price: 618,
            description: 'Приглашаем вас на экскурсию "Обзорная по Большому Сочи": Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...',
            detailsUrl: '#',
        },
    ]);
    const translateVal = ref(0);
    const scrollTick = ref(0);
    const leftBtnIsActive = ref(false);
    const rightBtnIsActive = ref(true);
    const scrollingTour = (isLeft: boolean) => {
        const tourListBlock = document.querySelector(`.${styleTour.list}`);
        const scrollIndicator = document.querySelector(`.${styleScroll.indicator}`);
        if (!isLeft) {
            if (translateVal.value === -1140) {
                rightBtnIsActive.value = false;
                leftBtnIsActive.value = true;
                return;
            } else {
                rightBtnIsActive.value = true;
                leftBtnIsActive.value = true;
            };

            if (translateVal.value - 380 === -1140) {
                rightBtnIsActive.value = false;
            }
            for(let item of tourListBlock.children) {
                (item as any).style.transition = '0.3s';
                (scrollIndicator as any).style.transition = '0.3s';
                (item as any).style.transform = `translateX(${translateVal.value - 380}px)`;
                (scrollIndicator as any).style.marginLeft = `calc(${33 * (scrollTick.value + 1)}% - 157px)`;
            }
            translateVal.value -= 380;
            scrollTick.value += 1;
        } else {
            if (translateVal.value === 0) {
                leftBtnIsActive.value = false;
                rightBtnIsActive.value = true;
                return;
            } else {
                leftBtnIsActive.value = true;
                rightBtnIsActive.value = true;
            };
            if (translateVal.value + 380 === 0) {
                leftBtnIsActive.value = false;
            }
            for(let item of tourListBlock.children) {
                (item as any).style.transition = '0.3s';
                (scrollIndicator as any).style.transition = '0.3s';
                (item as any).style.transform = `translateX(${translateVal.value + 380}px)`;
                (scrollIndicator as any).style.marginLeft = scrollTick.value === 1 ? '0' : `calc(${33 * (scrollTick.value - 1)}% - 157px)`;
            }
            translateVal.value += 380;
            scrollTick.value -= 1;
        }
    }
</script>

<template>
    <div :class="style.content">
        <Title text="Популярные экскурсии" />
        <PopularTourList
            :list="tourList"
        />
        <ArrowScrollBar
            :leftBtnIsActive="leftBtnIsActive"
            :rightBtnIsActive="rightBtnIsActive"
            :scrollOnTheLeft="() => scrollingTour(true)"
            :scrollOnTheRight="() => scrollingTour(false)"
        />
        <AboutUs />
        <Title text="Виды экскурсий" />
        <TypesExcursionsList />
    </div>
</template>