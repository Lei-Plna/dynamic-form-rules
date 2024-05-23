<template>
  <div class="container">
    <el-form :model="form" :label-width="labelWidth" :rules="rules">
      <el-form-item label="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="age">
        <el-input v-model="form.age" />
      </el-form-item>
      <el-form-item label="postalCode" prop="postalCode">
        <el-input v-model="form.postalCode" />
      </el-form-item>
      <el-form-item label="province">
        <el-select v-model="form.province" @change="handleProvinceChange">
          <el-option
            v-for="province in topProvinces"
            :key="province.value"
            :label="province.label"
            :value="province.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="city">
        <el-select
          v-model="form.city"
          :disabled="!form.province"
          @change="handleCityChange"
        >
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
      <div class="button-container">
        <el-button type="primary">Submit</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { FormRules } from 'element-plus';
import { useCalculateMaxStringWidth } from './hooks/useCalculateMaxStringWidth';
import { ProvinceInfo, useProvince } from './hooks/useProvince';
import { Form } from './types';

const { getProvinces } = useProvince();

const topProvinces = getProvinces();
const cities: Ref<ProvinceInfo[]> = ref([]);
const districts: Ref<ProvinceInfo[]> = ref([]);
const form: Ref<Form> = ref({
  name: '',
  age: '',
  postalCode: '',
  province: '',
  city: '',
  district: ''
});

const labelWidth = useCalculateMaxStringWidth(Object.keys(form.value), 16, 5);
const districtWritten = computed(() => !!form.value.district);
const rules: Ref<FormRules<Form>> = ref({
  postalCode: [
    {
      required: districtWritten,
      message: 'Please input postalCode',
      trigger: 'blur'
    }
  ]
});

const handleProvinceChange = () => {
  cities.value = getProvinces(form.value.province);
};
const handleCityChange = () => {
  const { province, city } = form.value;
  districts.value = getProvinces(province, city);
};
</script>

<style lang="scss">
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  padding: 10px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  .button-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
}
</style>
