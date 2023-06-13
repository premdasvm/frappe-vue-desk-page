<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
    <button @click="count++">Count is: {{ count }}</button>
    <button @click="count = 0" class="reset-button">Reset</button>
</template>

<style scoped>
button {
    display: inline-block;
    padding: 15px 25px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
    margin: 50px;
}

button:hover {
    background-color: #3e8e41
}

button:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.reset-button {
    background-color: red;
    /* Changes the background color of the reset button to red */
}
</style>