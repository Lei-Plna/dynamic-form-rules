<template>
  Child Component Rendered
  <!-- <h1>isRef: {{ isRef(props.required) }}</h1>
  <h2>isRequired: {{ required }}</h2>

  <h1>isRef: {{ isRef(props.buttonState) }}</h1>
  <h2>buttonState: {{ buttonState }}</h2> -->

  <h1>isRef: {{ isRef(props.rules) }}</h1>
  <h1>isRef: {{ isRef(required) }}</h1>
</template>

<script setup lang="ts">
import { isRef } from 'vue';
import { FormRules } from 'element-plus';
import { Form } from '../types';
const props = defineProps<{
  // required: boolean;
  // buttonState: boolean;
  rules: FormRules<Form>;
}>();
// @debug assert
const postalCodeRule = props.rules.postalCode as Array<any>;
const required = ref(postalCodeRule[0].required);
</script>
