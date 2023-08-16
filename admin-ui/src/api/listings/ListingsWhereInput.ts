import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type ListingsWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingCreatedBy?: StringNullableFilter;
  locationData?: StringNullableFilter;
  locationType?: StringFilter;
  mapData?: StringFilter;
  photos?: StringFilter;
  placeSpace?: JsonFilter;
  placeType?: JsonFilter;
  price?: JsonFilter;
  title?: StringFilter;
  trips?: TripListRelationFilter;
  wishlist?: WishlistWhereUniqueInput;
};
