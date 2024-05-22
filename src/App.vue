<template>
  <div class="container">
    <el-form :model="form" :label-width="labelWidth">
      <el-form-item label="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="age">
        <el-input v-model="form.age" />
      </el-form-item>
      <el-form-item label="postalCode">
        <el-input v-model="form.postalCode" />
      </el-form-item>
      <el-form-item label="province">
        <el-select v-model="form.province">
          <el-option
            v-for="province in topProvinces"
            :key="province.value"
            :label="province.label"
            :value="province.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="city">
        <el-select v-model="form.city" :disabled="!form.province">
          <el-option
            v-for="city in cities"
            :key="city.value"
            :label="city.label"
            :value="city.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="district">
        <el-select v-model="form.district" :disabled="!form.city">
          <el-option
            v-for="district in districts"
            :key="district.value"
            :label="district.label"
            :value="district.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useCalculateMaxStringWidth } from './hooks/useCalculateMaxStringWidth';
import { Provinces, useProvince } from './hooks/useProvince';
import { Form } from './types';
const { getProvinces } = useProvince();

const topProvinces = getProvinces();
const cities: Ref<Provinces> = ref([]);
const districts: Ref<Provinces> = ref([]);
const form: Ref<Form> = ref({
  name: '',
  age: '',
  postalCode: '',
  province: '',
  city: '',
  district: ''
});

const labelWidth = useCalculateMaxStringWidth(Object.keys(form.value));
</script>

<style lang="scss">
.container {
  width: 800px;
  margin: auto;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
</style>
