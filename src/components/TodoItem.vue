<template lang="html">
  <div class="todoWrappeer">
    <button class="removeTodo" v-on:click="removeTodo">Delete</button> {{todo.text}}
  </div>
</template>

<script src="./TodoItem.js"></script>
<style src="./TodoItem.css"></style>
