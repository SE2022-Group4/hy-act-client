import {UserItem} from 'src/models/user.item';

export interface AttendanceItem{
  applications: ApplicationItem;
}

interface ApplicationItem {
  students: UserItem[];
}
