export interface ListParams {
  pageIndex: number;
  pageSize: number;
  sort?: string;
  order?: "asc" | "desc";
  [key: string]: any;
}
export interface PaginationParams {
  pageSize: number;
  pageIndex: number;
  pageCount: number;
}
export interface ListResponse<caigiday> {
  data: caigiday[];
  errorMessage: string;
  pageCount: number;
  totalRow: number;
  succeed: boolean;
  pagination: PaginationParams;
}
