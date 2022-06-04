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
    username: '', email: '', groups: [], telephone: '', departments: [],
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
        username: '', email: '', groups: [], telephone: '', departments: [],
      } as UserItem;
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  }
})
