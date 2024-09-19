/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetEdgeConfigItemRequest = {
  edgeConfigId: string;
  edgeConfigItemKey: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

/** @internal */
export const GetEdgeConfigItemRequest$inboundSchema: z.ZodType<
  GetEdgeConfigItemRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  edgeConfigId: z.string(),
  edgeConfigItemKey: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type GetEdgeConfigItemRequest$Outbound = {
  edgeConfigId: string;
  edgeConfigItemKey: string;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const GetEdgeConfigItemRequest$outboundSchema: z.ZodType<
  GetEdgeConfigItemRequest$Outbound,
  z.ZodTypeDef,
  GetEdgeConfigItemRequest
> = z.object({
  edgeConfigId: z.string(),
  edgeConfigItemKey: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEdgeConfigItemRequest$ {
  /** @deprecated use `GetEdgeConfigItemRequest$inboundSchema` instead. */
  export const inboundSchema = GetEdgeConfigItemRequest$inboundSchema;
  /** @deprecated use `GetEdgeConfigItemRequest$outboundSchema` instead. */
  export const outboundSchema = GetEdgeConfigItemRequest$outboundSchema;
  /** @deprecated use `GetEdgeConfigItemRequest$Outbound` instead. */
  export type Outbound = GetEdgeConfigItemRequest$Outbound;
}