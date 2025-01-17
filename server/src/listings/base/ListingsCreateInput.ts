/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutListingsItemsInput } from "./TripCreateNestedManyWithoutListingsItemsInput";
import { Type } from "class-transformer";
import { WishlistWhereUniqueInput } from "../../wishlist/base/WishlistWhereUniqueInput";

@InputType()
class ListingsCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  listingCreatedBy?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  locationData?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  locationType!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  mapData!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  photos!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  placeSpace!: InputJsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  placeType!: InputJsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  price!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: false,
    type: () => TripCreateNestedManyWithoutListingsItemsInput,
  })
  @ValidateNested()
  @Type(() => TripCreateNestedManyWithoutListingsItemsInput)
  @IsOptional()
  @Field(() => TripCreateNestedManyWithoutListingsItemsInput, {
    nullable: true,
  })
  trips?: TripCreateNestedManyWithoutListingsItemsInput;

  @ApiProperty({
    required: false,
    type: () => WishlistWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WishlistWhereUniqueInput)
  @IsOptional()
  @Field(() => WishlistWhereUniqueInput, {
    nullable: true,
  })
  wishlist?: WishlistWhereUniqueInput | null;
}

export { ListingsCreateInput as ListingsCreateInput };
