<template>
  <div>
    <ClientOnly>
      <v-date-picker
        mode="range"
        v-model="selectedDate"
        :min-date="new Date()"
        show-caps
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">

const selectedDate = ref({
  start: new Date(2018, 10, 9),
  end: new Date(2018, 10, 10),
});
</script>
