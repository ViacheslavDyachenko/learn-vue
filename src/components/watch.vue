<script setup lang="ts">
    import { ref, watch } from 'vue';
    import ClearBtn from './ClearBtn.vue';
    
    type WatchProps = {
        isList: Boolean,
    }

    const props = defineProps<WatchProps>()
    
    const newName = ref('');
    const humans = ref([]);
    const counterHumans = ref(0);
    const countDelHuman = ref(0);

    const clearBtnHandler = () => {
        countDelHuman.value < humans.value.length ? humans.value.length -= countDelHuman.value : humans.value.length = 0;
    }

    const addNewHuman = () => {
        humans.value.push(newName.value);
        newName.value = '';
    }

    const pressEnterHandler = () => {
        humans.value.push(newName.value);
        newName.value = '';
    }

    watch(humans.value, newHumans => {
        counterHumans.value = newHumans.length;
    })
</script>
<template>
    <div>
        <input type="number" v-model="countDelHuman">
        <ClearBtn @click="clearBtnHandler" />
        <input @keyup.enter="pressEnterHandler" type="text" v-model="newName" />
        <button @click="addNewHuman">Save</button>
        <p>Всего человек: {{ counterHumans }}</p>
        <Transition mode="out-in">
            <ul v-if="props.isList">
                <TransitionGroup name="list">
                    <li v-for="human, index of humans" :key="index">{{ human }}</li>
                </TransitionGroup>
            </ul>
            <div v-else-if="!props.isList">
                <TransitionGroup name="list">
                    <p v-for="human, index of humans" :key="index">{{ human }}</p>
                </TransitionGroup>
            </div>
        </Transition>
    </div>
</template>

<style>
    .v-enter-from {
        opacity: 0;
        transform: translateX(20px);
    }
    .v-enter-active {
        transition: 0.3s;
    }
    .v-enter-to {
        opacity: 1;
    }
    .v-leave-from {
        opacity: 1;
    }
    .v-leave-active {
        transition: 0.3s;
    }
    .v-leave-to {
        opacity: 0;
        transform: translateX(20px);
    }
    .list-enter-from {
        opacity: 0;
    }
    .list-enter-active {
        transition: 0.3s;
    }
    .list-enter-to {
        opacity: 1;
    }
    .list-leave-from {
        opacity: 1;
    }
    .list-leave-active {
        transition: 0.3s;
    }
    .list-leave-to {
        opacity: 0;
    }

</style>