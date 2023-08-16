import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingsId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
