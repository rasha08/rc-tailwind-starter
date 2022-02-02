import { extractQueryParams } from "../../../common/utils/extractQueryParams";
import { SearchParamName } from "../../../common/enums/SearchParamName";

export const isRememberedUser = (search?: string) =>
  !!extractQueryParams<Record<SearchParamName.Remembered, boolean>>(search)
    ?.remembered;
