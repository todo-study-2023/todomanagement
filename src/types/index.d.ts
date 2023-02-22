type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

type Color =
  | "primary"
  | "primaryLight"
  | "blue"
  | "black"
  | "background"
  | "gray"
  | "grayDark"
  | "grayLight"
  | "line"
  | "lineLight"
  | "white"
  | "red"
  | "redLight";

interface Entity<T> {
  data: {
    id: number;
    attributes: T;
  }[];
  meta: any;
}

interface MemberEntity {
  id?: number;
  memberId: string;
  email: string;
  name: string;
  profileImg: string;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}

interface FineEntity {
  date: Date;
  members: Entity<MemberEntity>[] | number | number[];
  time: number;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}

interface RoomEntity {
  roomName: string;
  roomDesc: string;
  startDate: Date;
  endDate: Date;
  members?: Entity<MemberEntity>[] | number | number[];
  enterCode: number;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}

interface TodoEntity {
  todoContent: string;
  complitedAt: Date;
  authenticationMethod: string;
  authenticationContent: string;
  author?: Entity<MemberEntity> | number;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}
