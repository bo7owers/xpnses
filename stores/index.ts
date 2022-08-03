import { defineStore } from "@pinia/nuxt/dist/runtime/composables";

export const useUNameStore = defineStore("userName", () => {
  const name = ref<string>();
  watch(name, (newName) => {
    localStorage.setItem("userName", newName);
  });

  onMounted(() => {
    name.value = localStorage.getItem("userName");
  });

  return { name };
});
