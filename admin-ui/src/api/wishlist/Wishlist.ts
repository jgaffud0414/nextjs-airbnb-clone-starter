import { Listings } from "../listings/Listings";
import { User } from "../user/User";

export type Wishlist = {
  createdAt: Date;
  id: string;
  listing?: Listings | null;
  updatedAt: Date;
  user?: User;
};
