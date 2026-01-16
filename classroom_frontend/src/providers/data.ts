import { BaseRecord, DataProvider, GetListParams, GetListResponse, CrudFilter } from '@refinedev/core';
import { mockSubjects } from './mock-data';

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({ resource, filters }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource === "subjects") {
      let data = mockSubjects;

      // Apply filters
      if (filters && filters.length > 0) {
        filters.forEach((filter: CrudFilter) => {
          if ('field' in filter && filter.field === 'department' && filter.operator === 'eq' && filter.value !== 'all') {
            data = data.filter(subject => subject.department === filter.value);
          }
          if ('field' in filter && filter.field === 'name' && filter.operator === 'contains') {
            data = data.filter(subject => subject.name.toLowerCase().includes((filter.value as string).toLowerCase()));
          }
        });
      }

      return {
        data: data as unknown as TData[],
        total: data.length,
      };
    }

    return {
      data: [] as TData[],
      total: 0,
    };
  },

  getOne: async () => {throw new Error('This function is no present in mock')},
  create: async () => {throw new Error('This function is no present in mock')},
  update: async () => {throw new Error('This function is no present in mock')},
  deleteOne: async () => {throw new Error('This function is no present in mock')},

  getApiUrl: () => "",
};