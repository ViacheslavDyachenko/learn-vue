<script setup lang="ts">
    import { mapState } from 'redux-vuex';
    import { mapActions } from 'redux-vuex'
    const data = mapState('increment');
    const actions: any = mapActions('incrementValue');
    
</script>

<template>
    <p>{{ data.increment.value }}</p>
    <button @click="() => actions.incrementValue()">Redux increment</button>
</template>