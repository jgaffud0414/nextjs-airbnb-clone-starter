import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutListingsItemsInput } from "./TripCreateNestedManyWithoutListingsItemsInput";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type ListingsCreateInput = {
  description: string;
  listingCreatedBy?: string | null;
  locationData?: string | null;
  locationType: string;
  mapData: string;
  photos: string;
  placeSpace: InputJsonValue;
  placeType: InputJsonValue;
  price: InputJsonValue;
  title: string;
  trips?: TripCreateNestedManyWithoutListingsItemsInput;
  wishlist?: WishlistWhereUniqueInput | null;
};
