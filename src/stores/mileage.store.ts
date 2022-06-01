import {defineStore} from 'pinia';
import {api} from 'boot/axios';
import {MileageUsageItem} from "src/models/mileage.usage.item";

export type MileageItem = {
  mileage: number;
  mileageUsageList: MileageUsageItem[];
}

export const useMileageStore = defineStore({
  id: 'mileageUsageListStore',
  state: () => ({mileage: 0, mileageUsageList: []} as MileageItem),
  actions: {
    async fetchMileageUsageList() {
      // const response = await api.get('/mileage/usage');
      this.mileageUsageList = [
        {'title': '식사 100% 할인권', 'place': '바비든든', 'mileage': 100, 'date': new Date()},
        {'title': '식사 100% 할인권', 'place': '더빱집', 'mileage': 100, 'date': new Date()},
        {'title': '식사 100% 할인권', 'place': '지상이네', 'mileage': 100, 'date': new Date()},
        {'title': '식사 100% 할인권', 'place': '잠 좀 자자', 'mileage': 100, 'date': new Date()},
      ];
    },
    async fetchMileage() {
      const response = await api.get('/mileage');
      this.mileage = response.data;
    }
  }
})
