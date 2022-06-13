import {defineStore} from 'pinia';
import {api} from 'boot/axios';
import {DepartmentItem} from 'src/models/department.item';
import {LecturerItem} from "src/models/lecturer.item";

export type LecturerStore = {
  lecturerList: LecturerItem[];
}

export const useLecturerStore = defineStore({
  id: 'lecturerStore',
  state: () => ({lecturerList: []} as LecturerStore),
  actions: {
    async fetchLectureList() {
      const response = await api.get('/programs/lecturer', {headers: {'Authorization': `Token ${localStorage.getItem('token')}`}})
      console.log(response.data)
      this.lecturerList = response.data;
    }
  }
})
