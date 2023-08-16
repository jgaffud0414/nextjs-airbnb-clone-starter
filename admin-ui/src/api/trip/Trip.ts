import { Listings } from "../listings/Listings";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  id: string;
  listings?: Listings;
  updatedAt: Date;
  user?: User;
};
