export interface IUser {
    id: number;
    [key: string]: any;
}

export interface IColumn {
    fieldName: string;
    label: string;
}

export interface IFilterState {
    [key: string]: string;
}