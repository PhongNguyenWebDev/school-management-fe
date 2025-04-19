import { User } from './user.interface';

export interface Teacher extends User {
  teacherId: string;
  department: string;
  subjects: string[];
  qualification: string;
  experience: number;
  phoneNumber: string;
  address: string;
}
