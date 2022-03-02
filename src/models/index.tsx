export interface ClassModel {
  id: string;
  name: string;
}

export interface AvailableClasses {
  items: ClassModel[];
}

export interface Mentor {
  id: string;
  name: string;
  description: string;
}

export interface ClassDetail extends ClassModel {
  mentors: Mentor[];
  description: string;
}

export interface JoinClassRequestBody {
  classId: string;
  attendeeFullName: string;
  attendeeEmail: string;
}

export interface JoinClassResponse {
  message: string;
}
