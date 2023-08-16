import { StringFilter } from "../../util/StringFilter";
import { ListingsWhereUniqueInput } from "../listings/ListingsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistWhereInput = {
  id?: StringFilter;
  listing?: ListingsWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
