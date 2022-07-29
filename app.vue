<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const name = ref<string>();

watch(name, (newName) => {
  localStorage.setItem("userName", newName);
});

onMounted(() => {
  name.value = localStorage.getItem("userName");
});
</script>

<template>
  <div>
    <!-- Take argument from name, pass it to Hero and show it in h1 -->
    <Hero />
    <h2>
      Hello
      <span class="u-name" v-if="name !== null || undefined">{{ name }}</span>
    </h2>
    <input
      type="text"
      name="message"
      id="message"
      placeholder="Write your name here"
      v-model="name"
      autocomplete="off"
      v-if="name !== null || undefined"
    />
  </div>
</template>
