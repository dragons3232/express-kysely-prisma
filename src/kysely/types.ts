import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type SmsCode = {
    id: Generated<number>;
    phone: string;
    code: string;
    createdAt: Generated<Timestamp>;
    expiredAt: Timestamp;
};
export type DB = {
    SmsCode: SmsCode;
};
