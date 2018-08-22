import { Gender } from '../enums/gender.enum';

export class Character {
  id: number;
  name: string;
  gender: Gender;
  email?: string;
  phoneNumber?: string;
  contactPreference: string;
  dateOfBirth: Date;
  department: string;
  isActive: boolean;
  photoPath?: string;
  password: string;
  confirmPassword: string;
}
