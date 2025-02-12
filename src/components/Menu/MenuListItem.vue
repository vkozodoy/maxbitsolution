<script setup lang="ts">
    defineProps<{ cocktail: string, isActive: boolean }>()
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
      background-color: white;
      color: black;
      margin-bottom: 10px;

        &.active,
        &:hover {
            background-color: #3567d3;
            color: white;
            border-radius: 12px;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
</style>
