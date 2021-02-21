interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface ResponseModel<T = any> {
  results: T[];
  info: Info;
}
