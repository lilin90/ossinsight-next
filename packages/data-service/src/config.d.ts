/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface EndpointConfig {
  /**
   * Endpoint name, default is generated base on the file path.
   */
  name?: string;
  /**
   * Indicating if the endpoint is public.
   */
  public?: boolean;
  /**
   * Indicating if the endpoint is deprecated
   */
  deprecated?: boolean;
  /**
   * The description of endpoint.
   */
  description?: string;
  /**
   * The parameters of endpoint.
   */
  params: Params[];
}
export interface Params {
  /**
   * URL Search param name for the query.
   */
  name: string;
  /**
   * Param description for documentation. If undefined, value in param-descriptions.json would be taken as default
   */
  description?: string;
  /**
   * Define the parameter type.
   */
  type?: "array" | "string" | "number" | "boolean" | "integer";
  /**
   * Define the array item type.
   */
  itemType?: "string" | "number" | "boolean" | "integer";
  /**
   * Define the max array length.
   */
  maxArrayLength?: number;
  /**
   * Default input value.
   */
  default?: string | number;
  /**
   * Enums for prefetching and validating, default is no prefetching and validating.
   */
  enums?: string | string[];
  /**
   * Regular expression for validating parameter value.
   */
  pattern?: string;
}