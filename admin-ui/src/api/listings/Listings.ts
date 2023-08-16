import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listings = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy: string | null;
  locationData: string | null;
  locationType: string;
  mapData: string;
  photos: string;
  placeSpace: JsonValue;
  placeType: JsonValue;
  price: JsonValue;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  wishlist?: Wishlist | null;
};
