import { ListingsWhereUniqueInput } from "../listings/ListingsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripUpdateInput = {
  listings?: ListingsWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
