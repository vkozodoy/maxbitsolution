<script setup lang="ts">
defineProps<{ cocktail: string; isActive: boolean }>();
</script>

<template>
  <li :class="{ active: isActive }">
    {{ cocktail }}
  </li>
</template>

<style scoped>
li {
  padding: 10px;
  cursor: pointer;
  background-color: #e1e1e1;
  color: black;
  margin-bottom: 10px;
  border-radius: 12px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;

  &.active,
  &:hover {
    background-color: #3567d3;
    color: white;
  }
}
</style>
