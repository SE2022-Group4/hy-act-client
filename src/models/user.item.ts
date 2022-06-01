import {ProgramItem} from 'src/models/program.item';

export interface UserItem {
  name: string;
  email: string;
  grade: number;
  major: string;
  mileage: number;
  reserved_programs: ProgramItem[];
}
