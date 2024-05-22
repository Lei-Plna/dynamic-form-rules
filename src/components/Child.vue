<template>
  Child Component Rendered
  <h1>isRef: {{ isRef(props.required) }}</h1>
  <h2>isRequired: {{ required }}</h2>

  <h1>isRef: {{ isRef(props.buttonState) }}</h1>
  <h2>buttonState: {{ buttonState }}</h2>
</template>

<script setup lang="ts">
import { isRef } from 'vue';
const props = defineProps<{
  required: boolean;
  buttonState: boolean;
}>();
</script>
