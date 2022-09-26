<script setup>
import ToDoList from './components/ToDoList.vue';
import watch from './components/watch.vue';
import increment from './components/increment.vue';
import { ref, onMounted } from 'vue';
import style from './index.module.scss';
const isListRef = ref(false);
const onClick = () => {
  document.body.style.backgroundColor = '#000';
}
</script>

<template>
  <div :class="style.app">
    <ToDoList />
    <div>
      <input name="isList" type="checkbox" v-model="isListRef">
      <label for="isList">структурированный список</label>
    </div>
    <watch :onClick="onClick" :is-list="isListRef" />
    <increment />
  </div>
</template>