<script lang="ts" setup>
    import TypesExcursions from '../TypesExcursions';
    import Button from 'components/Button';
    import style from './TypesExcursionsList.module.scss';
</script>
<template>
    <div :class="style.list">
        <TypesExcursions
            :src="require('../../../../assets/img/typesExcursions/1.svg')"
            title="Автобусный тур"
            description="Один из самых насыщенных впечатлениями, доступных по цене и популярных видов отдыха. Во время одной поездки можно посмотреть достопримечательности сразу нескольких городов, причем обойдется это едва ли не в разы дешевле классического экскурсионного тура с ночевками в отелях."
        />
        <TypesExcursions
            :src="require('../../../../assets/img/typesExcursions/2.svg')"
            title="Джиппинг"
            description="Это путешествие на автомобилях высокой проходимости с преодолением естественных препятствий, это экстремальный вид спорта и отдыха, представляющий собой прохождение туристического маршрута по бездорожью на автомобилях."
        />
        <TypesExcursions
            :src="require('../../../../assets/img/typesExcursions/3.svg')"
            title="Яхтинг"
            description="Это то же, что круиз на лайнере или прогулка на пароме, только на яхте больше свободы, размеры судна в разы меньше, нет назойливой команды, можно самостоятельно почувствовать себя капитаном, постоять за штурвалом. Именно здесь вы почувствуете величайшие просторы Черногор моря."
        />
        <TypesExcursions
            :src="require('../../../../assets/img/typesExcursions/4.svg')"
            title="Каньонинг"
            description="Это экстремально-спортивный вид отдыха, который заключается в преодолении каньонов (обводненных или нет) при помощи альпинистского и иного снаряжения, а иногда и вброд, но без лодок или иных плавсредств."
        />
    </div>
    <div :class="style.actionBlock">
        <p>Выбирайте на нашем сайте экскурсию, которая подходит именно вам и записывайтесь онлайн без очередей, просто и быстро!</p>
        <Button
            text="К экскурсиям"
            withArrow
            redirectTo="/excursions"
        />
    </div>
</template>