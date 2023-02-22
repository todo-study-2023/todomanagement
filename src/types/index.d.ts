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

enum linkOrImage {
  "link",
  "image",
}

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
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

interface FineEntity {
  date: Date;
  members: Entity<MemberEntity>[];
  time: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

interface RoomEntity {
  roomName: string;
  roomDesc: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  enterCode: number;
}

interface TodoEntity {
  todoContent: string;
  complitedAt: Date;
  authenticationMethod: string; //수정필요
  authenticationContent: string;
  author?: Entity<MemberEntity>[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
