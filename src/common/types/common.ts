import { ReactNode } from 'react';

export type BreadcrumbsType = {
  title: string;
  url?: string;
};

export type PageParams = {
  page?: number;
  perPage?: number;
};

export type DateRangeParams = {
  createdFrom?: string;
  createdTo?: string;
};

export type Status = {
  value: number;
  label: string;
  color: string;
};


export type ImageData = Record<
  128 | 240 | 360 | 480 | 720 | 1080 | 'original' | 'thumbnail',
  {
    id: string;
    size: number;
  }
>;

export type DescriptionsRecord = {
  isShow?: boolean;
  isRequired?: boolean;
  labelText: string;
  descriptionElement: ReactNode;
};

type NumericValues<T> = {
  [K in keyof T]: K extends string ? T[K] : never;
};

export type NumberEnumUnion<T> = NumericValues<T>[keyof NumericValues<T>];

export type ListData<T> = {
  code: number,
  data: {
    list: T[],
    page: number,
    perPage: number,
    total: number
  }
  msg: string;
  success: boolean;
};
