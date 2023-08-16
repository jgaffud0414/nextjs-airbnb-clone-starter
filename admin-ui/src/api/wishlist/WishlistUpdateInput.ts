import { ListingsWhereUniqueInput } from "../listings/ListingsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistUpdateInput = {
  listing?: ListingsWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
};
