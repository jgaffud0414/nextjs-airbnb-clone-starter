import { ListingsWhereUniqueInput } from "../listings/ListingsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistCreateInput = {
  listing: ListingsWhereUniqueInput | null;
  user: UserWhereUniqueInput;
};
