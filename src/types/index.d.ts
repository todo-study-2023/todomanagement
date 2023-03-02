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

interface StrapiWrapper<T> {
  id: number;
  attributes: T;
}

interface Entity<T> {
  data: StrapiWrapper<T>[];
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
  members: Entity<MemberEntity>;
  time: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

type PartialFineEntity = Partial<FineEntity>;

interface FineParam extends PartialFineEntity {
  members: number[];
}



interface RoomEntity {
  id?: number;
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
  id: number;
  todoContent: string;
  complitedAt: string;
  authenticationMethod: string;
  authenticationContent: string;
  author: Entity<MemberEntity>;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

type PartialTodoEntity = Partial<TodoEntity>;

interface TodoParam extends PartialTodoEntity {
  complitedAt?: Date;
  author?: number;
}

type DoneData = Pick<
  TodoEntity,
  "complitedAt" | "todoContent" | "authenticationContent"
>;

type FineData = Pick<FineEntity, "members">;
