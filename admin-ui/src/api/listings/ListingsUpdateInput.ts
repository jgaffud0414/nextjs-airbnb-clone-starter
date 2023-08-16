import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutListingsItemsInput } from "./TripUpdateManyWithoutListingsItemsInput";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type ListingsUpdateInput = {
  description?: string;
  listingCreatedBy?: string | null;
  locationData?: string | null;
  locationType?: string;
  mapData?: string;
  photos?: string;
  placeSpace?: InputJsonValue;
  placeType?: InputJsonValue;
  price?: InputJsonValue;
  title?: string;
  trips?: TripUpdateManyWithoutListingsItemsInput;
  wishlist?: WishlistWhereUniqueInput | null;
};
