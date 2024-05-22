import provinceJSON from '../mock/province.json';
import { usePickProperties } from './usePickProperties';
export interface Province {
  value: string;
  label: string;
  children?: Province[];
}

export type Provinces = Province[];
export type ProvinceInfo = Omit<Province, 'children'>;

export function useProvince() {
  const provinces: Provinces = provinceJSON;

  const getProvinces = (...provinceValues: string[]) => {
    if (!provinceValues.length) {
      return pickProvinceInfo(provinces);
    }

    let subProvinces: Provinces = [];
    for (const provinceValue of provinceValues) {
      const province = findProvince(provinceValue);
      if (province) {
        subProvinces = province.children || [];
      }
    }
    return pickProvinceInfo(subProvinces);
  };

  function findProvince(provinceValue: string): Province | undefined {
    return provinces.find((province) => province.value === provinceValue);
  }

  function pickProvinceInfo(provinces: Provinces): ProvinceInfo[] {
    return provinces.map((province) =>
      usePickProperties(province, 'value', 'label')
    );
  }
  return {
    getProvinces
  };
}
