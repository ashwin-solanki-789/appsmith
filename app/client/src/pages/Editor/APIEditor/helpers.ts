import { submitCurlImportForm } from "actions/importActions";
import type { ActionParentEntityTypeInterface } from "@appsmith/entities/Engine/actionHelpers";

export interface curlImportFormValues {
  curl: string;
  contextId: string;
  name: string;
  contextType: ActionParentEntityTypeInterface;
}

export const curlImportSubmitHandler = (
  values: curlImportFormValues,
  dispatch: any,
) => {
  dispatch(submitCurlImportForm(values));
};

export const sortedDatasourcesHandler = (
  datasources: Record<string, any>,
  currentDatasourceId: string,
) => {
  // this function sorts the datasources list, with the current action's datasource first, followed by others.
  let sortedArr = [];

  sortedArr = datasources.filter(
    (d: { id: string }) => d?.id === currentDatasourceId,
  );

  sortedArr = [
    ...sortedArr,
    ...datasources.filter((d: { id: string }) => d?.id !== currentDatasourceId),
  ];

  return sortedArr;
};

export interface AutoGeneratedHeader {
  key: string;
  value: string;
  isInvalid: boolean;
}

const isKeyInArray = (arr: any[], key: any) => {
  return arr.some(
    (obj) => obj?.key.trim().toLowerCase() === key.trim().toLowerCase(),
  );
};

export const deriveAutoGeneratedHeaderState = (
  headers: any,
  autoGeneratedHeaders: AutoGeneratedHeader[],
) => {
  let newAutoGeneratedHeader = [];

  newAutoGeneratedHeader = autoGeneratedHeaders?.map(
    (autoGenHeader: AutoGeneratedHeader) => {
      if (isKeyInArray(headers, autoGenHeader?.key)) {
        if (!autoGenHeader?.isInvalid) {
          return {
            key: autoGenHeader?.key,
            value: autoGenHeader?.value,
            isInvalid: true,
          };
        }
      } else {
        if (autoGenHeader?.isInvalid) {
          return {
            key: autoGenHeader?.key,
            value: autoGenHeader?.value,
            isInvalid: false,
          };
        }
      }

      return autoGenHeader;
    },
  );

  return newAutoGeneratedHeader;
};
