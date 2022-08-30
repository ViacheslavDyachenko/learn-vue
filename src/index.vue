<script setup>
import ToDoList from './components/ToDoList.vue';
import watch from './components/watch.vue';
import { ref } from 'vue';
const isListRef = ref(false);
</script>

<template>
  <ToDoList />
  <input name="isList" type="checkbox" v-model="isListRef">
  <label for="isList">структурированный список</label>
  <watch :is-list="isListRef" />
</template>