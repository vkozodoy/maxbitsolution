<script setup lang="ts">
import { defineEmits } from 'vue';
import MenuList from '../menu/MenuList.vue';
import { cocktailList } from '../../constants/index';

const emit = defineEmits<{
  (event: "click", value: string): void;
}>();

const handleClick = async (cocktail: string) => {
  emit("click", cocktail);
};
</script>

<template>
  <div class="menu">
    <MenuList :cocktailList="cocktailList" @click="handleClick"/>
  </div>
</template>

<style scoped>
.menu {
  width: 100%;
  max-width: 250px;
  background-color: #f9f9f9;
  margin-top: 20px;
}

@media (max-width: 1024px) {
  .menu {
    width: 100%;
    max-width: 100%;
    margin: 20px 20px 0px 20px;
  }
}
</style>
