export interface IColumnSchema {
  columnId: string;
  columnName: string;
}

export interface IListviewConfiguration {
  editConfig: {
    onClick: () => any;
  };
  deleteConfig: {
    onClick: () => any;
  };
}
