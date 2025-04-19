import { User } from './user.interface';

export interface Student extends User {
  studentId: string;
  classId: number;
  dateOfBirth: Date;
  address: string;
  phoneNumber: string;
  parentName: string;
  parentPhone: string;
}
