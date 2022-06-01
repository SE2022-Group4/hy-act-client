import {UserItem} from 'src/models/user.item';
import {defineStore} from 'pinia';
import {api} from 'boot/axios';

export type UserState = {
  user: UserItem;
}

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({user: {
    name: '', email: '', grade: 0, major: '', mileage: 0, reserved_programs: [],
  }} as UserState),
  actions: {
    async fetchUser() {
      const response = await api.get('/user');
      this.user = response.data;
    }
  }
})
