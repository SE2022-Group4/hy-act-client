export interface UserItem {
  username: string;
  email: string;
  real_name: string;
  groups: UserGroup[];
  telephone: string;
  departments: string[];
}

interface UserGroup {
  name: string;
}
