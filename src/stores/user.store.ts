import {UserItem} from 'src/models/user.item';
import {defineStore} from 'pinia';
import {api} from 'boot/axios';

export type UserState = {
  user: UserItem;
  success: boolean;
}

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({user: {
    name: '', email: '', grade: 0, group: '', major: '', mileage: 0, reserved_programs: [],
  }, success: true} as UserState),
  actions: {
    fetchUser() {
      api.get('/user/info', {headers: {'Authorization': `Token ${localStorage.getItem('token')}`}}).then(res => {
        console.log(res.data);
        this.user = res.data;
      }).catch((error) => {
        console.log(error);
        this.success = false;
        window.location.href = '/login'
      });
    },
    async logout() {
      await api.post('/logout');
      this.user = {
        name: '', email: '', grade: 0, group: '', major: '', mileage: 0, reserved_programs: [],
      } as UserItem;
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessToken');
    }
  }
})
