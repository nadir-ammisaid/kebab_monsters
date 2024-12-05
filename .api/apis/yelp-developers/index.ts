import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'yelp-developers/1.0 (api/6.1.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * This endpoint returns up to 240 businesses with some basic information based on the
   * provided search criteria.
   *
   * Try our new AI API to create conversational search <a
   * href="https://docs.developer.yelp.com/reference/v3_post_natural_language_search"
   * target="_blank">here</a>, you can also test it directly in our <a
   * href="https://www.yelp.com/developers/yelp-ai/chat" target="_blank">UI Playground</a>.
   *
   * **Note:** The API does not return businesses without any reviews.
   *
   *
   * @summary Search
   * @throws FetchError<400, types.V3BusinessSearchResponse400> Bad Request. Message varies depending on failure scenario
   * @throws FetchError<401, types.V3BusinessSearchResponse401> The API key has either expired or doesn't have the required scopes to query this
   * endpoint.
   *
   * | code  | description |
   * | ------------- | ------------- |
   * | UNAUTHORIZED_API_KEY  | The API key provided is not currently able to query this
   * endpoint.  |
   * | TOKEN_INVALID  | Invalid API key or authorization header.  |
   *
   * @throws FetchError<403, types.V3BusinessSearchResponse403> The API key provided is not currently able to query this endpoint.
   * @throws FetchError<404, types.V3BusinessSearchResponse404> Resource Not Found
   * @throws FetchError<413, types.V3BusinessSearchResponse413> The length of the request exceeded the maximum allowed
   * @throws FetchError<429, types.V3BusinessSearchResponse429> You have either exceeded your daily quota, or have exceeded the queries-per-second
   * limit for this endpoint. Try reducing the rate at which you make queries.
   * @throws FetchError<500, types.V3BusinessSearchResponse500> Internal Server Error
   * @throws FetchError<503, types.V3BusinessSearchResponse503> Service Unavailable
   */
  v3_business_search(metadata?: types.V3BusinessSearchMetadataParam): Promise<FetchResponse<200, types.V3BusinessSearchResponse200>> {
    return this.core.fetch('/v3/businesses/search', 'get', metadata);
  }

  /**
   * This endpoint returns a list of businesses based on the provided phone number. It is
   * possible for more than one business to have the same phone number (for example, chain
   * stores with the same +1 800 phone number).
   *
   * Note: at this time, the API does not return businesses without any reviews.
   *
   *
   * @summary Phone Search
   * @throws FetchError<400, types.V3BusinessPhoneSearchResponse400> Bad Request. Message varies depending on failure scenario
   * @throws FetchError<401, types.V3BusinessPhoneSearchResponse401> The API key has either expired or doesn't have the required scopes to query this
   * endpoint.
   *
   * | code  | description |
   * | ------------- | ------------- |
   * | UNAUTHORIZED_API_KEY  | The API key provided is not currently able to query this
   * endpoint.  |
   * | TOKEN_INVALID  | Invalid API key or authorization header.  |
   *
   * @throws FetchError<403, types.V3BusinessPhoneSearchResponse403> The API key provided is not currently able to query this endpoint.
   * @throws FetchError<404, types.V3BusinessPhoneSearchResponse404> Resource Not Found
   * @throws FetchError<413, types.V3BusinessPhoneSearchResponse413> The length of the request exceeded the maximum allowed
   * @throws FetchError<429, types.V3BusinessPhoneSearchResponse429> You have either exceeded your daily quota, or have exceeded the queries-per-second
   * limit for this endpoint. Try reducing the rate at which you make queries.
   * @throws FetchError<500, types.V3BusinessPhoneSearchResponse500> Internal Server Error
   * @throws FetchError<503, types.V3BusinessPhoneSearchResponse503> Service Unavailable
   */
  v3_business_phone_search(metadata: types.V3BusinessPhoneSearchMetadataParam): Promise<FetchResponse<200, types.V3BusinessPhoneSearchResponse200>> {
    return this.core.fetch('/v3/businesses/search/phone', 'get', metadata);
  }

  /**
   * This endpoint lets you match business data from other sources against businesses on
   * Yelp, based on provided business information.
   * For example, if you know a business's exact address and name, and you want to find that
   * business only on Yelp.
   *
   * <span style="color:red;font-weight:bold">When should you use the Business Match
   * endpoint?</span>
   * We have several endpoints that will return information on Yelp businesses. You should
   * pick the endpoint to use based on how specific your input information is.
   *
   * * [Business Match endpoint](https://docs.developer.yelp.com/reference/v3_business_match)
   * when you have precise info like name & address
   * * [Business Search
   * endpoint](https://docs.developer.yelp.com/reference/v3_business_search) when you have
   * general info on the biz like name & location but don't know the address
   * * [Phone Search
   * endpoint](https://docs.developer.yelp.com/reference/v3_business_phone_search) when you
   * only have the phone number or less confident about other matching criteria
   *
   * All of these endpoints return the same information about each business.
   *
   * **Note:** at this time, the API does not return businesses without any reviews.
   *
   *
   * @summary Business Match
   * @throws FetchError<400, types.V3BusinessMatchResponse400> Bad Request. Message varies depending on failure scenario
   * @throws FetchError<401, types.V3BusinessMatchResponse401> The API key has either expired or doesn't have the required scopes to query this
   * endpoint.
   *
   * | code  | description |
   * | ------------- | ------------- |
   * | UNAUTHORIZED_API_KEY  | The API key provided is not currently able to query this
   * endpoint.  |
   * | TOKEN_INVALID  | Invalid API key or authorization header.  |
   *
   * @throws FetchError<403, types.V3BusinessMatchResponse403> The API key provided is not currently able to query this endpoint.
   * @throws FetchError<404, types.V3BusinessMatchResponse404> Resource Not Found
   * @throws FetchError<413, types.V3BusinessMatchResponse413> The length of the request exceeded the maximum allowed
   * @throws FetchError<429, types.V3BusinessMatchResponse429> You have either exceeded your daily quota, or have exceeded the queries-per-second
   * limit for this endpoint. Try reducing the rate at which you make queries.
   * @throws FetchError<500, types.V3BusinessMatchResponse500> Internal Server Error
   * @throws FetchError<503, types.V3BusinessMatchResponse503> Service Unavailable
   */
  v3_business_match(metadata: types.V3BusinessMatchMetadataParam): Promise<FetchResponse<200, types.V3BusinessMatchResponse200>> {
    return this.core.fetch('/v3/businesses/matches', 'get', metadata);
  }

  /**
   * This endpoint returns detailed business content.
   * Normally, you would get the Business ID from
   * [/v3/businesses/search](https://docs.developer.yelp.com/reference/v3_business_search),
   * [/v3/businesses/search/phone](https://docs.developer.yelp.com/reference/v3_business_phone_search),
   * [/v3/transactions/{transaction_type}/search](https://docs.developer.yelp.com/reference/v3_transaction_search)
   * or [/v3/autocomplete](https://docs.developer.yelp.com/reference/v3_autocomplete).
   * To retrieve review excerpts for a business, please refer to our Reviews endpoint
   * ([/v3/businesses/{id}/reviews](https://docs.developer.yelp.com/reference/v3_business_reviews))
   *
   * **Note:** at this time, the API does not return businesses without any reviews.
   *
   *
   * @summary Business Details
   * @throws FetchError<400, types.V3BusinessInfoResponse400> Bad Request. Message varies depending on failure scenario
   * @throws FetchError<401, types.V3BusinessInfoResponse401> The API key has either expired or doesn't have the required scopes to query this
   * endpoint.
   *
   * | code  | description |
   * | ------------- | ------------- |
   * | UNAUTHORIZED_API_KEY  | The API key provided is not currently able to query this
   * endpoint.  |
   * | TOKEN_INVALID  | Invalid API key or authorization header.  |
   *
   * @throws FetchError<403, types.V3BusinessInfoResponse403> The API key provided is not currently able to query this endpoint.
   * @throws FetchError<404, types.V3BusinessInfoResponse404> Resource Not Found
   * @throws FetchError<413, types.V3BusinessInfoResponse413> The length of the request exceeded the maximum allowed
   * @throws FetchError<429, types.V3BusinessInfoResponse429> You have either exceeded your daily quota, or have exceeded the queries-per-second
   * limit for this endpoint. Try reducing the rate at which you make queries.
   * @throws FetchError<500, types.V3BusinessInfoResponse500> Internal Server Error
   * @throws FetchError<503, types.V3BusinessInfoResponse503> Service Unavailable
   */
  v3_business_info(metadata: types.V3BusinessInfoMetadataParam): Promise<FetchResponse<200, types.V3BusinessInfoResponse200>> {
    return this.core.fetch('/v3/businesses/{business_id_or_alias}', 'get', metadata);
  }

  /**
   * This endpoint returns a list of businesses which support requested transaction type.
   *
   * **Note:**
   * * At this time, the API does not return businesses without any reviews.
   * * Currently, this endpoint only supports food delivery in the US.
   *
   *
   * @summary Food Delivery Search
   * @throws FetchError<400, types.V3TransactionSearchResponse400> Bad Request. Message varies depending on failure scenario
   * @throws FetchError<401, types.V3TransactionSearchResponse401> The API key has either expired or doesn't have the required scopes to query this
   * endpoint.
   *
   * | code  | description |
   * | ------------- | ------------- |
   * | UNAUTHORIZED_API_KEY  | The API key provided is not currently able to query this
   * endpoint.  |
   * | TOKEN_INVALID  | Invalid API key or authorization header.  |
   *
   * @throws FetchError<403, types.V3TransactionSearchResponse403> The API key provided is not currently able to query this endpoint.
   * @throws FetchError<404, types.V3TransactionSearchResponse404> Resource Not Found
   * @throws FetchError<413, types.V3TransactionSearchResponse413> The length of the request exceeded the maximum allowed
   * @throws FetchError<429, types.V3TransactionSearchResponse429> You have either exceeded your daily quota, or have exceeded the queries-per-second
   * limit for this endpoint. Try reducing the rate at which you make queries.
   * @throws FetchError<500, types.V3TransactionSearchResponse500> Internal Server Error
   * @throws FetchError<503, types.V3TransactionSearchResponse503> Service Unavailable
   */
  v3_transaction_search(metadata: types.V3TransactionSearchMetadataParam): Promise<FetchResponse<200, types.V3TransactionSearchResponse200>> {
    return this.core.fetch('/v3/transactions/{transaction_type}/search', 'get', metadata);
  }

  /**
   * Returns engagement metrics information for the provided businesses.
   * <blockquote class="callout callout_warn">
   *   This endpoint requires special permissions to be enabled for your Yelp Fusion API Key.
   * </blockquote>
   *
   *
   * @summary Engagement Metrics
   * @throws FetchError<400, types.V3GetBusinessesEngagementResponse400> Bad Request. Message varies depending on failure scenario
   * @throws FetchError<401, types.V3GetBusinessesEngagementResponse401> The API key has either expired or doesn't have the required scopes to query this
   * endpoint.
   *
   * | code  | description |
   * | ------------- | ------------- |
   * | UNAUTHORIZED_API_KEY  | The API key provided is not currently able to query this
   * endpoint.  |
   * | TOKEN_INVALID  | Invalid API key or authorization header.  |
   *
   * @throws FetchError<403, types.V3GetBusinessesEngagementResponse403> The API key provided is not currently able to query this endpoint.
   * @throws FetchError<404, types.V3GetBusinessesEngagementResponse404> Resource Not Found
   * @throws FetchError<413, types.V3GetBusinessesEngagementResponse413> The length of the request exceeded the maximum allowed
   * @throws FetchError<429, types.V3GetBusinessesEngagementResponse429> You have either exceeded your daily quota, or have exceeded the queries-per-second
   * limit for this endpoint. Try reducing the rate at which you make queries.
   * @throws FetchError<500, types.V3GetBusinessesEngagementResponse500> Internal Server Error
   * @throws FetchError<503, types.V3GetBusinessesEngagementResponse503> Service Unavailable
   */
  v3_get_businesses_engagement(metadata: types.V3GetBusinessesEngagementMetadataParam): Promise<FetchResponse<200, types.V3GetBusinessesEngagementResponse200>> {
    return this.core.fetch('/v3/businesses/engagement', 'get', metadata);
  }

  /**
   * Returns active and eligible service offerings for a business.
   * <blockquote class="callout callout_warn">
   *   This endpoint requires special permissions to be enabled for your Yelp Fusion API Key.
   * </blockquote>
   *
   *
   * @summary Service Offerings
   * @throws FetchError<400, types.V3BusinessServiceOfferingsResponse400> Bad Request. Message varies depending on failure scenario
   * @throws FetchError<401, types.V3BusinessServiceOfferingsResponse401> The API key has either expired or doesn't have the required scopes to query this
   * endpoint.
   *
   * | code  | description |
   * | ------------- | ------------- |
   * | UNAUTHORIZED_API_KEY  | The API key provided is not currently able to query this
   * endpoint.  |
   * | TOKEN_INVALID  | Invalid API key or authorization header.  |
   *
   * @throws FetchError<403, types.V3BusinessServiceOfferingsResponse403> The API key provided is not currently able to query this endpoint.
   * @throws FetchError<404, types.V3BusinessServiceOfferingsResponse404> Resource Not Found
   * @throws FetchError<413, types.V3BusinessServiceOfferingsResponse413> The length of the request exceeded the maximum allowed
   * @throws FetchError<429, types.V3BusinessServiceOfferingsResponse429> You have either exceeded your daily quota, or have exceeded the queries-per-second
   * limit for this endpoint. Try reducing the rate at which you make queries.
   * @throws FetchError<500, types.V3BusinessServiceOfferingsResponse500> Internal Server Error
   * @throws FetchError<503, types.V3BusinessServiceOfferingsResponse503> Service Unavailable
   */
  v3_business_service_offerings(metadata: types.V3BusinessServiceOfferingsMetadataParam): Promise<FetchResponse<200, types.V3BusinessServiceOfferingsResponse200>> {
    return this.core.fetch('/v3/businesses/{business_id_or_alias}/service_offerings', 'get', metadata);
  }

  /**
   * This endpoint lets you enable or disable Request a Phone Call for a particular business.
   * Check whether the business is eligible using the [Get business by
   * ID](https://docs.developer.yelp.com/reference/v3_business_info) endpoint and inspecting
   * the *rapc* object.
   *
   * *Example*:
   * To enable Request a Phone call for a Business with ID "loPSlzp6M628rzyCRPqrv3tC", send
   * an [authenticated](https://docs.developer.yelp.com/docs/authorization-code-workflow)
   * POST request to the URL:
   * https://api.yelp.com/v3/businesses/loPSlzp6M628rzyCRPqrv3tC/rapc_enabledness with the
   * following request body:
   *
   * ```json
   * {
   *     "is_enabled": true,
   * }
   * ```
   *
   * For the above request, a successful POST call will return a 202 accepted response.
   *
   *
   * @summary Enable/Disable Request a Phone Call
   * @throws FetchError<400, types.V3BusinessRapcEnablednessResponse400> Bad Request. Message varies depending on failure scenario
   * @throws FetchError<401, types.V3BusinessRapcEnablednessResponse401> The API key has either expired or doesn't have the required scopes to query this
   * endpoint.
   *
   * | code  | description |
   * | ------------- | ------------- |
   * | UNAUTHORIZED_API_KEY  | The API key provided is not currently able to query this
   * endpoint.  |
   * | TOKEN_INVALID  | Invalid API key or authorization header.  |
   *
   * @throws FetchError<403, types.V3BusinessRapcEnablednessResponse403> Authorization Error
   * @throws FetchError<404, types.V3BusinessRapcEnablednessResponse404> Resource Not Found
   * @throws FetchError<413, types.V3BusinessRapcEnablednessResponse413> The length of the request exceeded the maximum allowed
   * @throws FetchError<429, types.V3BusinessRapcEnablednessResponse429> You have either exceeded your daily quota, or have exceeded the queries-per-second
   * limit for this endpoint. Try reducing the rate at which you make queries.
   * @throws FetchError<500, types.V3BusinessRapcEnablednessResponse500> Internal Server Error
   * @throws FetchError<503, types.V3BusinessRapcEnablednessResponse503> Service Unavailable
   */
  v3_business_rapc_enabledness(body: types.V3BusinessRapcEnablednessBodyParam, metadata: types.V3BusinessRapcEnablednessMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/v3/businesses/{business_id_or_alias}/rapc_enabledness', 'post', body, metadata);
  }

  /**
   * Returns Business Insights information for the provided businesses.
   * This endpoint is part of Yelp Knowledge, visit <a
   * href="https://knowledge.yelp.com/get-started" target="_blank">Yelp Knowledge</a> to
   * learn more.
   *
   *
   * @summary Business Insights
   * @throws FetchError<400, types.V3BusinessesInsightsResponse400> Bad Request. Message varies depending on failure scenario
   * @throws FetchError<401, types.V3BusinessesInsightsResponse401> The API key has either expired or doesn't have the required scopes to query this
   * endpoint.
   *
   * | code  | description |
   * | ------------- | ------------- |
   * | UNAUTHORIZED_API_KEY  | The API key provided is not currently able to query this
   * endpoint.  |
   * | TOKEN_INVALID  | Invalid API key or authorization header.  |
   *
   * @throws FetchError<403, types.V3BusinessesInsightsResponse403> The API key provided is not currently able to query this endpoint.
   * @throws FetchError<404, types.V3BusinessesInsightsResponse404> Resource Not Found
   * @throws FetchError<413, types.V3BusinessesInsightsResponse413> The length of the request exceeded the maximum allowed
   * @throws FetchError<429, types.V3BusinessesInsightsResponse429> You have either exceeded your daily quota, or have exceeded the queries-per-second
   * limit for this endpoint. Try reducing the rate at which you make queries.
   * @throws FetchError<500, types.V3BusinessesInsightsResponse500> Internal Server Error
   * @throws FetchError<503, types.V3BusinessesInsightsResponse503> Service Unavailable
   */
  v3_businesses_insights(metadata: types.V3BusinessesInsightsMetadataParam): Promise<FetchResponse<200, types.V3BusinessesInsightsResponse200>> {
    return this.core.fetch('/v3/businesses/insights', 'get', metadata);
  }

  /**
   * This endpoint returns the list of food & drinks offered at the business, including what
   * is trending and the raw food ingredients needed.
   * This endpoint is part of Yelp Knowledge, visit <a
   * href="https://knowledge.yelp.com/get-started" target="_blank">Yelp Knowledge</a> to
   * learn more.
   *
   *
   * @summary Food & Drinks Insights
   * @throws FetchError<400, types.V3GetBusinessFoodAndDrinksInsightsResponse400> Bad Request. Message varies depending on failure scenario
   * @throws FetchError<401, types.V3GetBusinessFoodAndDrinksInsightsResponse401> The API key has either expired or doesn't have the required scopes to query this
   * endpoint.
   *
   * | code  | description |
   * | ------------- | ------------- |
   * | UNAUTHORIZED_API_KEY  | The API key provided is not currently able to query this
   * endpoint.  |
   * | TOKEN_INVALID  | Invalid API key or authorization header.  |
   *
   * @throws FetchError<403, types.V3GetBusinessFoodAndDrinksInsightsResponse403> The API key provided is not currently able to query this endpoint.
   * @throws FetchError<404, types.V3GetBusinessFoodAndDrinksInsightsResponse404> Resource Not Found
   * @throws FetchError<413, types.V3GetBusinessFoodAndDrinksInsightsResponse413> The length of the request exceeded the maximum allowed
   * @throws FetchError<429, types.V3GetBusinessFoodAndDrinksInsightsResponse429> You have either exceeded your daily quota, or have exceeded the queries-per-second
   * limit for this endpoint. Try reducing the rate at which you make queries.
   * @throws FetchError<500, types.V3GetBusinessFoodAndDrinksInsightsResponse500> Internal Server Error
   * @throws FetchError<503, types.V3GetBusinessFoodAndDrinksInsightsResponse503> Service Unavailable
   */
  v3_get_business_food_and_drinks_insights(metadata: types.V3GetBusinessFoodAndDrinksInsightsMetadataParam): Promise<FetchResponse<200, types.V3GetBusinessFoodAndDrinksInsightsResponse200>> {
    return this.core.fetch('/v3/businesses/{business_id_or_alias}/insights/food_and_drinks', 'get', metadata);
  }

  /**
   * Intake natural language queries and retrieve relevant businesses with review snippets
   * and photos. Offers a powerful yet intuitive search experience.
   *
   *
   * @summary Natural language search
   * @throws FetchError<400, types.V3PostNaturalLanguageSearchResponse400> Bad Request. Message varies depending on failure scenario
   * @throws FetchError<401, types.V3PostNaturalLanguageSearchResponse401> The API key has either expired or doesn't have the required scopes to query this
   * endpoint.
   *
   * | code  | description |
   * | ------------- | ------------- |
   * | UNAUTHORIZED_API_KEY  | The API key provided is not currently able to query this
   * endpoint.  |
   * | TOKEN_INVALID  | Invalid API key or authorization header.  |
   *
   * @throws FetchError<403, types.V3PostNaturalLanguageSearchResponse403> The API key provided is not currently able to query this endpoint.
   * @throws FetchError<404, types.V3PostNaturalLanguageSearchResponse404> Resource Not Found
   * @throws FetchError<413, types.V3PostNaturalLanguageSearchResponse413> The length of the request exceeded the maximum allowed
   * @throws FetchError<429, types.V3PostNaturalLanguageSearchResponse429> You have either exceeded your daily quota, or have exceeded the queries-per-second
   * limit for this endpoint. Try reducing the rate at which you make queries.
   * @throws FetchError<500, types.V3PostNaturalLanguageSearchResponse500> Internal Server Error
   * @throws FetchError<503, types.V3PostNaturalLanguageSearchResponse503> Service Unavailable
   */
  v3_post_natural_language_search(body: types.V3PostNaturalLanguageSearchBodyParam): Promise<FetchResponse<200, types.V3PostNaturalLanguageSearchResponse200>> {
    return this.core.fetch('/v3/businesses/natural_language_search', 'post', body);
  }

  /**
   * This endpoint accepts user queries, categorizes them into business questions or search
   * requests, and returns relevant results with review snippets, photos, and much more.
   *
   * Users must perform a search before asking questions about businesses.
   *
   *
   * @summary Fusion AI (Beta)
   * @throws FetchError<400, types.V1AiChatResponse400> Bad Request. Message varies depending on failure scenario
   * @throws FetchError<401, types.V1AiChatResponse401> The API key has either expired or doesn't have the required scopes to query this
   * endpoint.
   *
   * | code  | description |
   * | ------------- | ------------- |
   * | UNAUTHORIZED_API_KEY  | The API key provided is not currently able to query this
   * endpoint.  |
   * | TOKEN_INVALID  | Invalid API key or authorization header.  |
   *
   * @throws FetchError<403, types.V1AiChatResponse403> The API key provided is not currently able to query this endpoint.
   * @throws FetchError<404, types.V1AiChatResponse404> Resource Not Found
   * @throws FetchError<413, types.V1AiChatResponse413> The length of the request exceeded the maximum allowed
   * @throws FetchError<429, types.V1AiChatResponse429> You have either exceeded your daily quota, or have exceeded the queries-per-second
   * limit for this endpoint. Try reducing the rate at which you make queries.
   * @throws FetchError<500, types.V1AiChatResponse500> Internal Server Error
   * @throws FetchError<503, types.V1AiChatResponse503> Service Unavailable
   */
  v1_ai_chat(body: types.V1AiChatBodyParam): Promise<FetchResponse<200, types.V1AiChatResponse200>> {
    return this.core.fetch('/ai/chat/v1', 'post', body);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { V1AiChatBodyParam, V1AiChatResponse200, V1AiChatResponse400, V1AiChatResponse401, V1AiChatResponse403, V1AiChatResponse404, V1AiChatResponse413, V1AiChatResponse429, V1AiChatResponse500, V1AiChatResponse503, V3BusinessInfoMetadataParam, V3BusinessInfoResponse200, V3BusinessInfoResponse400, V3BusinessInfoResponse401, V3BusinessInfoResponse403, V3BusinessInfoResponse404, V3BusinessInfoResponse413, V3BusinessInfoResponse429, V3BusinessInfoResponse500, V3BusinessInfoResponse503, V3BusinessMatchMetadataParam, V3BusinessMatchResponse200, V3BusinessMatchResponse400, V3BusinessMatchResponse401, V3BusinessMatchResponse403, V3BusinessMatchResponse404, V3BusinessMatchResponse413, V3BusinessMatchResponse429, V3BusinessMatchResponse500, V3BusinessMatchResponse503, V3BusinessPhoneSearchMetadataParam, V3BusinessPhoneSearchResponse200, V3BusinessPhoneSearchResponse400, V3BusinessPhoneSearchResponse401, V3BusinessPhoneSearchResponse403, V3BusinessPhoneSearchResponse404, V3BusinessPhoneSearchResponse413, V3BusinessPhoneSearchResponse429, V3BusinessPhoneSearchResponse500, V3BusinessPhoneSearchResponse503, V3BusinessRapcEnablednessBodyParam, V3BusinessRapcEnablednessMetadataParam, V3BusinessRapcEnablednessResponse400, V3BusinessRapcEnablednessResponse401, V3BusinessRapcEnablednessResponse403, V3BusinessRapcEnablednessResponse404, V3BusinessRapcEnablednessResponse413, V3BusinessRapcEnablednessResponse429, V3BusinessRapcEnablednessResponse500, V3BusinessRapcEnablednessResponse503, V3BusinessSearchMetadataParam, V3BusinessSearchResponse200, V3BusinessSearchResponse400, V3BusinessSearchResponse401, V3BusinessSearchResponse403, V3BusinessSearchResponse404, V3BusinessSearchResponse413, V3BusinessSearchResponse429, V3BusinessSearchResponse500, V3BusinessSearchResponse503, V3BusinessServiceOfferingsMetadataParam, V3BusinessServiceOfferingsResponse200, V3BusinessServiceOfferingsResponse400, V3BusinessServiceOfferingsResponse401, V3BusinessServiceOfferingsResponse403, V3BusinessServiceOfferingsResponse404, V3BusinessServiceOfferingsResponse413, V3BusinessServiceOfferingsResponse429, V3BusinessServiceOfferingsResponse500, V3BusinessServiceOfferingsResponse503, V3BusinessesInsightsMetadataParam, V3BusinessesInsightsResponse200, V3BusinessesInsightsResponse400, V3BusinessesInsightsResponse401, V3BusinessesInsightsResponse403, V3BusinessesInsightsResponse404, V3BusinessesInsightsResponse413, V3BusinessesInsightsResponse429, V3BusinessesInsightsResponse500, V3BusinessesInsightsResponse503, V3GetBusinessFoodAndDrinksInsightsMetadataParam, V3GetBusinessFoodAndDrinksInsightsResponse200, V3GetBusinessFoodAndDrinksInsightsResponse400, V3GetBusinessFoodAndDrinksInsightsResponse401, V3GetBusinessFoodAndDrinksInsightsResponse403, V3GetBusinessFoodAndDrinksInsightsResponse404, V3GetBusinessFoodAndDrinksInsightsResponse413, V3GetBusinessFoodAndDrinksInsightsResponse429, V3GetBusinessFoodAndDrinksInsightsResponse500, V3GetBusinessFoodAndDrinksInsightsResponse503, V3GetBusinessesEngagementMetadataParam, V3GetBusinessesEngagementResponse200, V3GetBusinessesEngagementResponse400, V3GetBusinessesEngagementResponse401, V3GetBusinessesEngagementResponse403, V3GetBusinessesEngagementResponse404, V3GetBusinessesEngagementResponse413, V3GetBusinessesEngagementResponse429, V3GetBusinessesEngagementResponse500, V3GetBusinessesEngagementResponse503, V3PostNaturalLanguageSearchBodyParam, V3PostNaturalLanguageSearchResponse200, V3PostNaturalLanguageSearchResponse400, V3PostNaturalLanguageSearchResponse401, V3PostNaturalLanguageSearchResponse403, V3PostNaturalLanguageSearchResponse404, V3PostNaturalLanguageSearchResponse413, V3PostNaturalLanguageSearchResponse429, V3PostNaturalLanguageSearchResponse500, V3PostNaturalLanguageSearchResponse503, V3TransactionSearchMetadataParam, V3TransactionSearchResponse200, V3TransactionSearchResponse400, V3TransactionSearchResponse401, V3TransactionSearchResponse403, V3TransactionSearchResponse404, V3TransactionSearchResponse413, V3TransactionSearchResponse429, V3TransactionSearchResponse500, V3TransactionSearchResponse503 } from './types';
