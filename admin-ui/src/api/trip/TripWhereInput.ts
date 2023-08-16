import { StringFilter } from "../../util/StringFilter";
import { ListingsWhereUniqueInput } from "../listings/ListingsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripWhereInput = {
  id?: StringFilter;
  listings?: ListingsWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
