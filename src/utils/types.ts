import { ApiResponse, HttpStatusCode } from '@api/types';

export type MockError = {
  status?: HttpStatusCode;
  code?: number;
  message?: string;
};

export type ApiPromise<T> = Promise<ApiResponse<T>>;

export declare type Nullable<T> = T | null;
export declare type Undefinable<T> = T | undefined;
