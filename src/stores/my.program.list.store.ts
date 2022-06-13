import {ProgramItem} from 'src/models/program.item';
import {api} from 'boot/axios';
import {defineStore} from 'pinia';

export type MyProgramListStore = {
  programList: ProgramItem[];
}

export const useMyProgramListStore = defineStore({
  id: 'previousProgramListStore',
  state: () => ({programList: []} as MyProgramListStore),
  actions: {
    async fetchMyProgramList() {
      const response = await api.get('/programs/my/', {headers: {'Authorization': `Token ${localStorage.getItem('token')}`}});
      this.programList = response.data;
    }
  }
})
