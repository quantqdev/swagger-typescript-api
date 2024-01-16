/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Pet {
  /** @format int64 */
  id: number;
  name: string;
  tag?: string;
  multiple?: string | number;
}

/**
 * @title Swagger Petstore
 * @version 1.0.0
 * @license MIT
 * @termsOfService http://swagger.io/terms/
 * @baseUrl http://petstore.swagger.io/api
 * @contact Swagger API Team
 *
 * A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification
 */
import { HttpClient, RequestParams } from "./http-client";
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;
  baseUrl: string;

  constructor(http: HttpClient<SecurityDataType>, baseUrl = "") {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  pets = {
    /**
     * @description Returns all pets from the system that the user has access to
     *
     * @name PetsList
     * @request GET:/pets
     */
    petsList: (params: RequestParams = {}) =>
      this.http.request<Pet[], any>({
        path: `${this.baseUrl}/pets`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
