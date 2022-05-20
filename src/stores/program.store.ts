import {ProgramItem} from 'src/models/program.item';
import {defineStore} from 'pinia';

export type ProgramState = {
  programList: ProgramItem[];
}

export const useProgramStore = defineStore({
  id: 'programStore',
  state: () => ({programList: []} as ProgramState),
  actions: {
    async fetchProgramList() {
      this.programList = [
        {
          title: '소프트웨어공학',
          target_people: '학부생',
          target_grade: '4학년',
          target_gender: '전체',
          target_major: '컴퓨터전공',
          mileage: 60,
          start_date: new Date('2022-05-05 09:00'),
          end_date: new Date('2022-06-06 18:00'),
          place: '클러스터지원센터 509호',
          current_people: 0,
          max_people: 10,
        },
        {
          title: '예비군',
          target_people: '학부생',
          target_grade: '전체',
          target_gender: '남성',
          target_major: '전체',
          mileage: -60,
          start_date: new Date('2022-05-05 09:00'),
          end_date: new Date('2022-12-31 18:00'),
          place: '대운동장',
          current_people: 0,
          max_people: 1000,
        },
        {
          title: 'ROTC',
          target_people: '학부생',
          target_grade: '1,2학년',
          target_gender: '전체',
          target_major: '전체',
          mileage: -60,
          start_date: new Date('2022-05-05 09:00'),
          end_date: new Date('2022-12-31 18:00'),
          place: '학군단 건물',
          current_people: 0,
          max_people: 1000,
        },
      ];
    }
  }
})
