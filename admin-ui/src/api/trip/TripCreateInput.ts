import { ListingsWhereUniqueInput } from "../listings/ListingsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripCreateInput = {
  listings: ListingsWhereUniqueInput;
  user: UserWhereUniqueInput;
};
