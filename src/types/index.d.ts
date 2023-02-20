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
