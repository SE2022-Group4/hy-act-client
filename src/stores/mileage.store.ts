import {defineStore} from 'pinia';
import {api} from 'boot/axios';

export type MileageUsageItem = {
  mileage: number;
  mileageUsageList: MileageUsageItem[];
}

export const useMileageUsageListStore = defineStore({
  id: 'mileageUsageListStore',
  state: () => ({mileage: 0, mileageUsageList: []} as MileageUsageItem),
  actions: {
    async fetchMileageUsageList() {
      const response = await api.get('/mileage/usage');
      this.mileageUsageList = response.data;
    },
    async fetchMileage() {
      const response = await api.get('/mileage');
      this.mileage = response.data;
    }
  }
})
