/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BillingSubscriptionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all Billing Subscriptions
     * This endpoint returns a list of subscriptions.
     * @param page Invoices are paginated, this is the current page which will be returned. The page index is starting at 1.
     * @param filter You can choose to filter billing_subscriptions on a specific attributes (status, customer_id, start, etc).
     *
     * Please refer to [the filters page](https://pennylane.readme.io/reference/billing-subscriptions-filtering) to learn how to correctly build the `filter` parameter.
     *
     * For instance, you can select the invoices that have the `status` `draft` by using the following filter: `[{"field": "status", "operator": "scope", "value": "draft"}]`.
     *
     * @returns any Get all the billing subscriptions
     * @throws ApiError
     */
    public billingSubscriptionsGet(
        page?: number,
        filter?: string,
    ): CancelablePromise<{
        /**
         * The total number of pages available
         */
        totalPages?: number;
        /**
         * The current page returned
         */
        currentPage?: number;
        /**
         * List of billing subscriptions
         */
        billing_subscriptions?: Array<{
            id?: number;
            next_occurrence?: string;
            prev_occurrence?: string | null;
            stopped_at?: string | null;
            start?: string;
            finish?: any;
            status?: string;
            mode?: string;
            email_settings?: any;
            activated_at?: string | null;
            payment_method?: string;
            recurring_rule?: {
                day_of_month: Array<number> | null;
                week_start: number | null;
                day: Array<number> | null;
                rule_type: string;
                interval: number | null;
                /**
                 * Number of occurrences of the recurring rule
                 */
                count: number | null;
                until: string | null;
            };
            customer?: {
                /**
                 * Customer first name (present only when type is individual)
                 */
                first_name?: string;
                /**
                 * Customer last name (present only when type is individual)
                 */
                last_name?: string;
                /**
                 * Customer gender (present only when type is individual)
                 */
                gender?: 'mister' | 'madam';
                /**
                 * Company name (present only when type is company)
                 */
                name?: string;
                /**
                 * Customer registration number (SIREN - present only when type is company)
                 */
                reg_no?: string;
                /**
                 * Customer's VAT number
                 */
                vat_number?: string;
                /**
                 * The last time the customer has been updated
                 */
                updated_at?: string;
                /**
                 * Customer identifier (is unique)
                 */
                source_id?: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
                /**
                 * Type of the customer (company or individual)
                 */
                customer_type?: 'company' | 'individual';
                /**
                 * Customer address (billing address)
                 */
                address?: string;
                /**
                 * Postal code (billing address)
                 */
                postal_code?: string;
                /**
                 * City (billing address)
                 */
                city?: string;
                /**
                 * Country alpha code (billing address)
                 */
                country_alpha2?: string;
                recipient?: string;
                billing_address?: {
                    address?: string;
                    postal_code?: string;
                    city?: string;
                    country_alpha2?: string;
                };
                delivery_address?: {
                    /**
                     * The delivery address
                     */
                    address?: string;
                    /**
                     * The delivery postal code
                     */
                    postal_code?: string;
                    /**
                     * The delivery city
                     */
                    city?: string;
                    /**
                     * The delivery country code
                     */
                    country_alpha2?: string;
                };
                /**
                 * Customer payment conditions
                 */
                payment_conditions?: 'upon_receipt' | 'custom' | '15_days' | '30_days' | '45_days' | '60_days';
                /**
                 * Customer phone number
                 */
                phone?: string;
                /**
                 * This reference doesn't appear on the invoice
                 */
                reference?: string;
                /**
                 * Notes about the customer
                 */
                notes?: string;
            };
            invoice_template?: {
                label?: string | null;
                /**
                 * Invoice currency code (ISO 4217)
                 */
                currency?: string;
                /**
                 * Invoice amount (total value of the invoice in euros. If the currency is euro, Currency Amount and Invoice Amount are identical)
                 */
                amount?: string;
                /**
                 * Invoice currency amount (total value of the invoice in the currency of the invoice)
                 */
                currency_amount?: string;
                /**
                 * Invoice currency amount before tax (total value before tax of the invoice in the currency of the invoice)
                 */
                currency_amount_before_tax?: string;
                /**
                 * Invoice exchange rate (used to convert the invoice to euros. If the invoice currency is euro it will be 1.0)
                 */
                exchange_rate?: string;
                payment_condition?: string;
                /**
                 * Invoice taxable amount (in invoice currency)
                 */
                currency_tax?: string;
                /**
                 * Language of the invoice. The locale region is separated by an underscore like in "fr_FR".
                 */
                language?: string;
                /**
                 * Invoice discount (which is a percentage if the discount_type is "relative", or an amount if the discount_type is "absolute")
                 */
                discount?: string;
                /**
                 * Invoice discount Type (relative if it is a percentage of the total or absolute if it is an amount)
                 */
                discount_type?: string;
                /**
                 * Additional details
                 */
                special_mention?: string | null;
                /**
                 * The last time the invoice has been updated
                 */
                updated_at?: string;
                line_items_sections_attributes?: Array<{
                    /**
                     * Title of the line items section
                     */
                    title?: string | null;
                    /**
                     * Description of the line items section
                     */
                    description?: string | null;
                    /**
                     * Defines the order in which sections will be displayed on the invoice. Each section has to have a different rank, starting from 1 and incrementing next values by 1
                     */
                    rank?: number;
                }>;
                line_items?: Array<{
                    /**
                     * Line item id
                     */
                    id?: number;
                    /**
                     * Line item label
                     */
                    label?: string;
                    /**
                     * The kind of unit which applies to the amount
                     */
                    unit?: string | null;
                    /**
                     * Line item quantity (number of items)
                     */
                    quantity?: string;
                    /**
                     * The total amount of the document items in euros including taxes and deducting discounts
                     */
                    amount?: string;
                    /**
                     * The total amount of the document items in the document's currency including taxes and deducting discounts.
                     * If the currency is euro, amount and currencyAmount are identical.
                     *
                     */
                    currency_amount?: string;
                    /**
                     * Line item description
                     */
                    description?: string;
                    /**
                     * Line item product id
                     */
                    product_id?: string | null;
                    /**
                     * Product VAT rate. A 20% VAT in France is FR_200.
                     */
                    vat_rate?: 'FR_1_05' | 'FR_1_75' | 'FR_09' | 'FR_21' | 'FR_40' | 'FR_55' | 'FR_60' | 'FR_65' | 'FR_85' | 'FR_92' | 'FR_100' | 'FR_130' | 'FR_15_385' | 'FR_196' | 'FR_200' | 'AD_10' | 'AD_45' | 'AD_95' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_26' | 'CH_37' | 'CH_38' | 'CH_77' | 'CH_81' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_120' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'EE_220' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'MU_150' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'extracom' | 'intracom_21' | 'intracom_55' | 'intracom_85' | 'intracom_100' | 'crossborder' | 'FR_100_construction' | 'FR_200_construction';
                    /**
                     * Total amount before tax in currency
                     */
                    currency_price_before_tax?: string;
                    /**
                     * Total tax amount in currency
                     */
                    currency_tax?: string;
                    /**
                     * Line item discount (which is a percentage if the discount_type is "relative", or an amount if the discount_type is "absolute")
                     */
                    discount?: string;
                    /**
                     * Line item discount Type (relative if it is a percentage of the total or absolute if it is an amount)
                     */
                    discount_type?: string;
                    /**
                     * Defines the order in which line items will be displayed on the invoice. Each line item has to have a different rank, starting from 1 and incrementing next values by 1
                     */
                    section_rank?: number | null;
                }>;
            };
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/external/v1/billing_subscriptions',
            query: {
                'page': page,
                'filter': filter,
            },
            errors: {
                401: `Access token is missing or invalid`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Create a Billing Subscription
     * This endpoint allows you to create a subscription based on a specific payload. Pennylane will generate the invoice each month. You can also link the subscription to a GoCardless mandate.
     * @param requestBody
     * @returns any Returns the new billing subscription
     * @throws ApiError
     */
    public billingSubscriptionsPost(
        requestBody?: {
            create_customer: boolean;
            create_products: boolean;
            billing_subscription: {
                /**
                 * Invoice Currency (ISO 4217). Default is EUR.
                 */
                currency?: string;
                /**
                 * Mode in which the new invoices will be created
                 * "awaiting_validation" means draft invoices will be created.
                 * "finalized" means finalized invoices will be created.
                 * "email" means finalized invoices will be created and automatically sent to the client at each new occurrence.
                 *
                 */
                mode: 'awaiting_validation' | 'finalized' | 'email';
                /**
                 * Start date (ISO 8601)
                 */
                start: string;
                /**
                 * Customer payment conditions
                 */
                payment_conditions: 'upon_receipt' | '15_days' | '30_days' | '45_days' | '60_days';
                /**
                 * Payment method
                 * offline means the subscription is not linked to a payment method
                 * gocardless_direct-debit means at each new occurrence the client will be automatically debited thanks to GoCardless. To do so, you need a [GoCardless account and link it to your Pennylane account](https://help.pennylane.com/fr/articles/18730-gocardless-faq).
                 *
                 */
                payment_method: 'offline' | 'gocardless_direct_debit';
                /**
                 * Recurrence of the billing subscription
                 */
                recurring_rule: {
                    type: 'monthly' | 'weekly' | 'yearly';
                    day_of_month?: number;
                    day_of_week?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
                    interval?: number;
                    /**
                     * Number of occurrences of the recurring rule
                     */
                    count?: number;
                };
                /**
                 * Additional details
                 */
                special_mention?: string;
                /**
                 * Invoice discount (in percent)
                 */
                discount?: number;
                customer: ({
                    /**
                     * Existing customer identifier (source_id)
                     */
                    source_id: string;
                } | {
                    /**
                     * Type of the customer. Must be company
                     */
                    customer_type: 'company';
                    /**
                     * Company name
                     */
                    name: string;
                    /**
                     * Customer registration number (SIREN)
                     */
                    reg_no?: string;
                    /**
                     * Customer address (billing address)
                     */
                    address: string;
                    /**
                     * Postal code (billing address)
                     */
                    postal_code: string;
                    /**
                     * City (billing address)
                     */
                    city: string;
                    /**
                     * Country alpha code (billing address)
                     */
                    country_alpha2: string;
                    /**
                     * Recipient displayed in the invoice
                     */
                    recipient?: string;
                    /**
                     * Customer's VAT number
                     */
                    vat_number?: string;
                    /**
                     * You can use your own id when creating the customer. If not provided, Pennylane will pick one for you. Id must be unique
                     */
                    source_id?: string;
                    emails?: Array<string>;
                    /**
                     * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                     */
                    billing_iban?: string;
                    /**
                     * Address (shipping address)
                     */
                    delivery_address?: string;
                    /**
                     * Postal code (shipping address)
                     */
                    delivery_postal_code?: string;
                    /**
                     * City (shipping address)
                     */
                    delivery_city?: string;
                    /**
                     * Country alpha code (shipping address)
                     */
                    delivery_country_alpha2?: string;
                    /**
                     * Customer payment conditions
                     */
                    payment_conditions?: 'upon_receipt' | 'custom' | '15_days' | '30_days' | '45_days' | '60_days';
                    /**
                     * Customer phone number
                     */
                    phone?: string;
                    /**
                     * This reference doesn't appear on the invoice
                     */
                    reference?: string;
                    /**
                     * Notes about the customer
                     */
                    notes?: string;
                } | {
                    /**
                     * Type of the customer. Must be individual
                     */
                    customer_type: 'individual';
                    /**
                     * Customer first name
                     */
                    first_name: string;
                    /**
                     * Customer last name
                     */
                    last_name: string;
                    /**
                     * Customer gender
                     */
                    gender?: 'mister' | 'madam';
                    /**
                     * Customer address (billing address)
                     */
                    address?: string;
                    /**
                     * Postal code (billing address)
                     */
                    postal_code?: string;
                    /**
                     * City (billing address)
                     */
                    city?: string;
                    /**
                     * Country alpha code (billing address)
                     */
                    country_alpha2: string;
                    /**
                     * You can use your own id when creating the customer. If not provided, Pennylane will pick one for you. Id must be unique
                     */
                    source_id?: string;
                    emails?: Array<string>;
                    /**
                     * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                     */
                    billing_iban?: string;
                    /**
                     * Address (shipping address)
                     */
                    delivery_address?: string;
                    /**
                     * Postal code (shipping address)
                     */
                    delivery_postal_code?: string;
                    /**
                     * City (shipping address)
                     */
                    delivery_city?: string;
                    /**
                     * Country alpha code (shipping address)
                     */
                    delivery_country_alpha2?: string;
                    /**
                     * Customer payment conditions
                     */
                    payment_conditions?: 'upon_receipt' | 'custom' | '15_days' | '30_days' | '45_days' | '60_days';
                    /**
                     * Customer phone number
                     */
                    phone?: string;
                    /**
                     * This reference doesn't appear on the invoice
                     */
                    reference?: string;
                    /**
                     * Notes about the customer
                     */
                    notes?: string;
                });
                line_items_sections_attributes?: Array<any>;
                invoice_lines: Array<({
                    /**
                     * Line item label
                     */
                    label: string;
                    /**
                     * Line item quantity (number of items)
                     */
                    quantity: number;
                    /**
                     * Has to correspond to the rank number of a line items section in which the line item should be
                     */
                    section_rank?: number;
                    /**
                     * Line item currency amount, including taxes (in invoice currency)
                     */
                    currency_amount: number;
                    /**
                     * The accounting plan item for the invoice line
                     */
                    plan_item_number?: string;
                    /**
                     * Line item unit (type of unit)
                     */
                    unit: string;
                    /**
                     * Product VAT rate. A 20% VAT in France is FR_200.
                     */
                    vat_rate: 'FR_1_05' | 'FR_1_75' | 'FR_09' | 'FR_21' | 'FR_40' | 'FR_55' | 'FR_60' | 'FR_65' | 'FR_85' | 'FR_92' | 'FR_100' | 'FR_130' | 'FR_15_385' | 'FR_196' | 'FR_200' | 'AD_10' | 'AD_45' | 'AD_95' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_26' | 'CH_37' | 'CH_38' | 'CH_77' | 'CH_81' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_120' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'EE_220' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'MU_150' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'extracom' | 'intracom_21' | 'intracom_55' | 'intracom_85' | 'intracom_100' | 'crossborder' | 'FR_100_construction' | 'FR_200_construction';
                    /**
                     * The description of the invoice line
                     */
                    description?: string | null;
                    /**
                     * Line item discount (in percent)
                     */
                    discount?: number;
                } | {
                    /**
                     * Line item label (default is using the product label)
                     */
                    label?: string;
                    /**
                     * Line item quantity (number of items)
                     */
                    quantity: number;
                    /**
                     * Line item discount (in percent)
                     */
                    discount?: number;
                    /**
                     * Has to correspond to the rank number of a line items section in which the line item should be
                     */
                    section_rank?: number;
                    /**
                     * The accounting plan item for the invoice line (default is using the product plan item)
                     */
                    plan_item_number?: string;
                    product: {
                        /**
                         * Existing product identifier (source_id)
                         */
                        source_id: string;
                    };
                } | {
                    /**
                     * Line item label
                     */
                    label: string;
                    /**
                     * Line item quantity (number of items)
                     */
                    quantity: number;
                    /**
                     * Line item discount (in percent)
                     */
                    discount?: number;
                    /**
                     * Has to correspond to the rank number of a line items section in which the line item should be
                     */
                    section_rank?: number;
                    /**
                     * The accounting plan item for the invoice line (default is using the product plan item)
                     */
                    plan_item_number?: string;
                    product: {
                        /**
                         * You can use your own id when creating the product. If not provided, Pennylane will pick one for you. Id must be unique
                         */
                        source_id?: string;
                        /**
                         * Product label
                         */
                        label: string;
                        /**
                         * Product description
                         */
                        description?: string;
                        /**
                         * Product unit
                         */
                        unit: string;
                        /**
                         * Product price before taxes
                         */
                        price_before_tax?: number;
                        /**
                         * Product price including taxes
                         */
                        price: number;
                        /**
                         * Product VAT rate. A 20% VAT in France is FR_200.
                         */
                        vat_rate: 'FR_1_05' | 'FR_1_75' | 'FR_09' | 'FR_21' | 'FR_40' | 'FR_55' | 'FR_60' | 'FR_65' | 'FR_85' | 'FR_92' | 'FR_100' | 'FR_130' | 'FR_15_385' | 'FR_196' | 'FR_200' | 'AD_10' | 'AD_45' | 'AD_95' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_26' | 'CH_37' | 'CH_38' | 'CH_77' | 'CH_81' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_120' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'EE_220' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'MU_150' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'extracom' | 'intracom_21' | 'intracom_55' | 'intracom_85' | 'intracom_100' | 'crossborder' | 'FR_100_construction' | 'FR_200_construction';
                        /**
                         * Product currency
                         */
                        currency: string;
                        /**
                         * Product reference
                         */
                        reference?: string | null;
                        /**
                         * Product substance. Can be services or goods.
                         */
                        substance?: 'goods' | 'services' | null;
                    };
                })>;
            };
        },
    ): CancelablePromise<{
        billing_subscription?: {
            id?: number;
            next_occurrence?: string;
            prev_occurrence?: string | null;
            stopped_at?: string | null;
            start?: string | null;
            finish?: string | null;
            status?: string;
            mode?: string;
            email_settings?: any;
            activated_at?: string | null;
            payment_method?: string;
            recurring_rule?: {
                day_of_month: Array<number> | null;
                week_start: number | null;
                day: Array<number> | null;
                rule_type: string;
                interval: number | null;
                /**
                 * Number of occurrences of the recurring rule
                 */
                count: number | null;
                until: string | null;
            };
            customer?: {
                /**
                 * The last time the customer has been updated
                 */
                updated_at?: string;
                /**
                 * Customer identifier (is unique)
                 */
                source_id?: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
                /**
                 * Type of the customer (company or individual)
                 */
                customer_type?: 'company' | 'individual';
                /**
                 * Customer address (billing address)
                 */
                address?: string;
                /**
                 * Postal code (billing address)
                 */
                postal_code?: string;
                /**
                 * City (billing address)
                 */
                city?: string;
                /**
                 * Country alpha code (billing address)
                 */
                country_alpha2?: string;
                recipient?: string;
                billing_address?: {
                    address?: string;
                    postal_code?: string;
                    city?: string;
                    country_alpha2?: string;
                };
                delivery_address?: {
                    /**
                     * The delivery address
                     */
                    address?: string;
                    /**
                     * The delivery postal code
                     */
                    postal_code?: string;
                    /**
                     * The delivery city
                     */
                    city?: string;
                    /**
                     * The delivery country code
                     */
                    country_alpha2?: string;
                };
                /**
                 * Customer payment conditions
                 */
                payment_conditions?: 'upon_receipt' | 'custom' | '15_days' | '30_days' | '45_days' | '60_days';
                /**
                 * Customer phone number
                 */
                phone?: string;
                /**
                 * This reference doesn't appear on the invoice
                 */
                reference?: string;
                /**
                 * Notes about the customer
                 */
                notes?: string;
                /**
                 * Customer first name (present only when type is individual)
                 */
                first_name?: string;
                /**
                 * Customer last name (present only when type is individual)
                 */
                last_name?: string;
                /**
                 * Customer gender (present only when type is individual)
                 */
                gender?: 'mister' | 'madam';
                /**
                 * Company name (present only when type is company)
                 */
                name?: string;
                /**
                 * Customer registration number (SIREN - present only when type is company)
                 */
                reg_no?: string;
                /**
                 * Customer's VAT number
                 */
                vat_number?: string;
            };
            invoice_template?: {
                label?: string | null;
                /**
                 * Invoice currency code (ISO 4217)
                 */
                currency?: string;
                /**
                 * Invoice amount (total value of the invoice in euros. If the currency is euro, Currency Amount and Invoice Amount are identical)
                 */
                amount?: string;
                /**
                 * Invoice currency amount (total value of the invoice in the currency of the invoice)
                 */
                currency_amount?: string;
                /**
                 * Invoice currency amount before tax (total value before tax of the invoice in the currency of the invoice)
                 */
                currency_amount_before_tax?: string;
                /**
                 * Invoice exchange rate (used to convert the invoice to euros. If the invoice currency is euro it will be 1.0)
                 */
                exchange_rate?: string;
                payment_condition?: string;
                /**
                 * Invoice taxable amount (in invoice currency)
                 */
                currency_tax?: string;
                /**
                 * Language of the invoice. The locale region is separated by an underscore like in "fr_FR".
                 */
                language?: string;
                /**
                 * Invoice discount Amount (total discounted amount on the invoice. Set to 0.0 if the invoice does not have any discount. If the discount is relative, set as a percentage value between 0 and 1)
                 */
                discount?: string;
                /**
                 * Invoice discount Type (relative if it is a percentage of the total or absolute if it is an amount)
                 */
                discount_type?: string;
                /**
                 * Additional details
                 */
                special_mention?: string | null;
                /**
                 * The last time the invoice has been updated
                 */
                updated_at?: string;
                line_items_sections_attributes?: Array<{
                    /**
                     * Title of the line items section
                     */
                    title?: string | null;
                    /**
                     * Description of the line items section
                     */
                    description?: string | null;
                    /**
                     * Defines the order in which sections will be displayed on the invoice. Each section has to have a different rank, starting from 1 and incrementing next values by 1
                     */
                    rank?: number;
                }>;
                line_items?: Array<{
                    /**
                     * Line item id
                     */
                    id?: number;
                    /**
                     * Line item label
                     */
                    label?: string;
                    /**
                     * The kind of unit which applies to the amount
                     */
                    unit?: string | null;
                    /**
                     * Line item quantity (number of items)
                     */
                    quantity?: string;
                    /**
                     * The total amount of the document items in euros including taxes and deducting discounts
                     */
                    amount?: string;
                    /**
                     * The total amount of the document items in the document's currency including taxes and deducting discounts.
                     * If the currency is euro, amount and currencyAmount are identical.
                     *
                     */
                    currency_amount?: string;
                    /**
                     * Line item description
                     */
                    description?: string;
                    /**
                     * Line item product id
                     */
                    product_id?: string | null;
                    /**
                     * Product VAT rate. A 20% VAT in France is FR_200.
                     */
                    vat_rate?: 'FR_1_05' | 'FR_1_75' | 'FR_09' | 'FR_21' | 'FR_40' | 'FR_55' | 'FR_60' | 'FR_65' | 'FR_85' | 'FR_92' | 'FR_100' | 'FR_130' | 'FR_15_385' | 'FR_196' | 'FR_200' | 'AD_10' | 'AD_45' | 'AD_95' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_26' | 'CH_37' | 'CH_38' | 'CH_77' | 'CH_81' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_120' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'EE_220' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'MU_150' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'extracom' | 'intracom_21' | 'intracom_55' | 'intracom_85' | 'intracom_100' | 'crossborder' | 'FR_100_construction' | 'FR_200_construction';
                    /**
                     * Total amount before tax in currency
                     */
                    currency_price_before_tax?: string;
                    /**
                     * Total tax amount in currency
                     */
                    currency_tax?: string;
                    /**
                     * Unit price (excluding tax)
                     */
                    raw_currency_unit_price?: string;
                    /**
                     * Line item discount (which is a percentage if the discount_type is "relative", or an amount if the discount_type is "absolute")
                     */
                    discount?: string;
                    /**
                     * Line items Type (relative if it is a percentage of the total or absolute if it is an amount)
                     */
                    discount_type?: string;
                    /**
                     * Defines the order in which line items will be displayed on the invoice. Each line item has to have a different rank, starting from 1 and incrementing next values by 1
                     */
                    section_rank?: number | null;
                }>;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/external/v1/billing_subscriptions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Access token is missing or invalid`,
                403: `Forbidden`,
                422: `Unprocessable Entity`,
            },
        });
    }
    /**
     * Retrieve a Billing Subscription
     * This endpoint returns a specific subscription.
     * @param id Existing billing subscription identifier (id)
     * @returns any Returns the billing subscription
     * @throws ApiError
     */
    public billingSubscriptionIdGet(
        id: string,
    ): CancelablePromise<{
        billing_subscription?: {
            id?: number;
            next_occurrence?: string;
            prev_occurrence?: string | null;
            stopped_at?: string | null;
            start?: string;
            finish?: string;
            status?: string;
            mode?: string;
            email_settings?: any;
            activated_at?: string | null;
            payment_method?: string;
            recurring_rule?: {
                day_of_month: Array<number> | null;
                week_start: number | null;
                day: Array<number> | null;
                rule_type: string;
                interval: number | null;
                /**
                 * Number of occurrences of the recurring rule
                 */
                count: number | null;
                until: string | null;
            };
            customer?: {
                /**
                 * The last time the customer has been updated
                 */
                updated_at?: string;
                /**
                 * Customer identifier (is unique)
                 */
                source_id?: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
                /**
                 * Type of the customer (company or individual)
                 */
                customer_type?: 'company' | 'individual';
                /**
                 * Customer address (billing address)
                 */
                address?: string;
                /**
                 * Postal code (billing address)
                 */
                postal_code?: string;
                /**
                 * City (billing address)
                 */
                city?: string;
                /**
                 * Country alpha code (billing address)
                 */
                country_alpha2?: string;
                recipient?: string;
                billing_address?: {
                    address?: string;
                    postal_code?: string;
                    city?: string;
                    country_alpha2?: string;
                };
                delivery_address?: {
                    /**
                     * The delivery address
                     */
                    address?: string;
                    /**
                     * The delivery postal code
                     */
                    postal_code?: string;
                    /**
                     * The delivery city
                     */
                    city?: string;
                    /**
                     * The delivery country code
                     */
                    country_alpha2?: string;
                };
                /**
                 * Customer payment conditions
                 */
                payment_conditions?: 'upon_receipt' | 'custom' | '15_days' | '30_days' | '45_days' | '60_days';
                /**
                 * Customer phone number
                 */
                phone?: string;
                /**
                 * This reference doesn't appear on the invoice
                 */
                reference?: string;
                /**
                 * Notes about the customer
                 */
                notes?: string;
                /**
                 * Customer first name (present only when type is individual)
                 */
                first_name?: string;
                /**
                 * Customer last name (present only when type is individual)
                 */
                last_name?: string;
                /**
                 * Customer gender (present only when type is individual)
                 */
                gender?: 'mister' | 'madam';
                /**
                 * Company name (present only when type is company)
                 */
                name?: string;
                /**
                 * Customer registration number (SIREN - present only when type is company)
                 */
                reg_no?: string;
                /**
                 * Customer's VAT number
                 */
                vat_number?: string;
            };
            invoice_template?: {
                label?: string | null;
                /**
                 * Invoice currency code (ISO 4217)
                 */
                currency?: string;
                /**
                 * Invoice amount (total value of the invoice in euros. If the currency is euro, Currency Amount and Invoice Amount are identical)
                 */
                amount?: string;
                /**
                 * Invoice currency amount (total value of the invoice in the currency of the invoice)
                 */
                currency_amount?: string;
                /**
                 * Invoice currency amount before tax (total value before tax of the invoice in the currency of the invoice)
                 */
                currency_amount_before_tax?: string;
                /**
                 * Invoice exchange rate (used to convert the invoice to euros. If the invoice currency is euro it will be 1.0)
                 */
                exchange_rate?: string;
                payment_condition?: string;
                /**
                 * Invoice taxable amount (in invoice currency)
                 */
                currency_tax?: string;
                /**
                 * Language of the invoice. The locale region is separated by an underscore like in "fr_FR".
                 */
                language?: string;
                /**
                 * Invoice discount Amount (total discounted amount on the invoice. Set to 0.0 if the invoice does not have any discount. If the discount is relative, set as a percentage value between 0 and 1)
                 */
                discount?: string;
                /**
                 * Invoice discount Type (relative if it is a percentage of the total or absolute if it is an amount)
                 */
                discount_type?: string;
                /**
                 * Additional details
                 */
                special_mention?: string | null;
                /**
                 * The last time the invoice has been updated
                 */
                updated_at?: string;
                line_items_sections_attributes?: Array<{
                    /**
                     * Title of the line items section
                     */
                    title?: string | null;
                    /**
                     * Description of the line items section
                     */
                    description?: string | null;
                    /**
                     * Defines the order in which sections will be displayed on the invoice. Each section has to have a different rank, starting from 1 and incrementing next values by 1
                     */
                    rank?: number;
                }>;
                line_items?: Array<{
                    /**
                     * Line item id
                     */
                    id?: number;
                    /**
                     * Line item label
                     */
                    label?: string;
                    /**
                     * The kind of unit which applies to the amount
                     */
                    unit?: string | null;
                    /**
                     * Line item quantity (number of items)
                     */
                    quantity?: string;
                    /**
                     * The total amount of the document items in euros including taxes and deducting discounts
                     */
                    amount?: string;
                    /**
                     * The total amount of the document items in the document's currency including taxes and deducting discounts.
                     * If the currency is euro, amount and currencyAmount are identical.
                     *
                     */
                    currency_amount?: string;
                    /**
                     * Line item description
                     */
                    description?: string;
                    /**
                     * Line item product id
                     */
                    product_id?: string | null;
                    /**
                     * Product VAT rate. A 20% VAT in France is FR_200.
                     */
                    vat_rate?: 'FR_1_05' | 'FR_1_75' | 'FR_09' | 'FR_21' | 'FR_40' | 'FR_55' | 'FR_60' | 'FR_65' | 'FR_85' | 'FR_92' | 'FR_100' | 'FR_130' | 'FR_15_385' | 'FR_196' | 'FR_200' | 'AD_10' | 'AD_45' | 'AD_95' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_26' | 'CH_37' | 'CH_38' | 'CH_77' | 'CH_81' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_120' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'EE_220' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'MU_150' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'extracom' | 'intracom_21' | 'intracom_55' | 'intracom_85' | 'intracom_100' | 'crossborder' | 'FR_100_construction' | 'FR_200_construction';
                    /**
                     * Total amount before tax in currency
                     */
                    currency_price_before_tax?: string;
                    /**
                     * Total tax amount in currency
                     */
                    currency_tax?: string;
                    /**
                     * Line item discount (which is a percentage if the discount_type is "relative", or an amount if the discount_type is "absolute")
                     */
                    discount?: string;
                    /**
                     * Line item discount Type (relative if it is a percentage of the total or absolute if it is an amount)
                     */
                    discount_type?: string;
                    /**
                     * Defines the order in which line items will be displayed on the invoice. Each line item has to have a different rank, starting from 1 and incrementing next values by 1
                     */
                    section_rank?: number | null;
                }>;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/external/v1/billing_subscriptions/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Access token is missing or invalid`,
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Update a Billing Subscription
     * This endpoint allows you to update the parameters of an subscription as well as the list of products and amount of the upcoming invoices.
     * @param id Existing billing subscription identifier (id)
     * @param requestBody
     * @returns any Returns the updated billing subscription
     * @throws ApiError
     */
    public billingSubscriptionIdPut(
        id: string,
        requestBody?: {
            billing_subscription: {
                /**
                 * Invoice Currency (ISO 4217). Default is EUR.
                 */
                currency?: string;
                /**
                 * Mode in which the new invoices will be created
                 * "awaiting_validation" means draft invoices will be created.
                 * "finalized" means finalized invoices will be created.
                 *
                 */
                mode?: 'awaiting_validation' | 'finalized';
                /**
                 * Start date (ISO 8601)
                 */
                start?: string;
                /**
                 * Customer payment conditions
                 */
                payment_conditions?: 'upon_receipt' | '15_days' | '30_days' | '45_days' | '60_days';
                /**
                 * Payment method
                 * offline means the subscription is not linked to a payment method
                 * gocardless_direct-debit means at each new occurrence the client will be automatically debited thanks to GoCardless. To do so, you need a [GoCardless account and link it to your Pennylane account](https://help.pennylane.com/fr/articles/18730-gocardless-faq).
                 *
                 */
                payment_method?: 'offline' | 'gocardless_direct_debit';
                /**
                 * Recurrence of the billing subscription
                 */
                recurring_rule?: {
                    type?: 'monthly' | 'weekly' | 'yearly';
                    day_of_month?: number;
                    day_of_week?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
                    interval?: number;
                    /**
                     * Number of occurrences of the recurring rule
                     */
                    count?: number;
                };
                /**
                 * To stop an `in_progress` billing subscription use value `true`.
                 * To resume a `stopped` billing subscription use value `false`
                 *
                 */
                stop?: boolean;
                /**
                 * Additional details
                 */
                special_mention?: string;
                customer?: {
                    /**
                     * Existing customer identifier (source_id)
                     */
                    source_id: string;
                };
                invoice_lines?: Array<({
                    /**
                     * Line item label
                     */
                    label: string;
                    /**
                     * Line item quantity (number of items)
                     */
                    quantity: number;
                    /**
                     * Has to correspond to the rank number of a line items section in which the line item should be
                     */
                    section_rank?: number;
                    /**
                     * Line item currency amount, including taxes (in invoice currency)
                     */
                    currency_amount: number;
                    /**
                     * The accounting plan item for the invoice line
                     */
                    plan_item_number?: string;
                    /**
                     * Line item unit (type of unit)
                     */
                    unit: string;
                    /**
                     * Product VAT rate. A 20% VAT in France is FR_200.
                     */
                    vat_rate: 'FR_1_05' | 'FR_1_75' | 'FR_09' | 'FR_21' | 'FR_40' | 'FR_55' | 'FR_60' | 'FR_65' | 'FR_85' | 'FR_92' | 'FR_100' | 'FR_130' | 'FR_15_385' | 'FR_196' | 'FR_200' | 'AD_10' | 'AD_45' | 'AD_95' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_26' | 'CH_37' | 'CH_38' | 'CH_77' | 'CH_81' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_120' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'EE_220' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'MU_150' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'extracom' | 'intracom_21' | 'intracom_55' | 'intracom_85' | 'intracom_100' | 'crossborder' | 'FR_100_construction' | 'FR_200_construction';
                    /**
                     * The description of the invoice line
                     */
                    description?: string | null;
                } | {
                    /**
                     * Line item label (default is using the product label)
                     */
                    label?: string;
                    /**
                     * Line item quantity (number of items)
                     */
                    quantity: number;
                    /**
                     * Has to correspond to the rank number of a line items section in which the line item should be
                     */
                    section_rank?: number;
                    /**
                     * The accounting plan item for the invoice line (default is using the product plan item)
                     */
                    plan_item_number?: string;
                    product: {
                        /**
                         * Existing product identifier (source_id)
                         */
                        source_id: string;
                    };
                })>;
            };
        },
    ): CancelablePromise<{
        billing_subscription?: {
            id?: number;
            next_occurrence?: string | null;
            prev_occurrence?: string | null;
            stopped_at?: string | null;
            start?: string;
            finish?: string;
            status?: string;
            mode?: string;
            email_settings?: any;
            activated_at?: string | null;
            payment_method?: string;
            recurring_rule?: {
                day_of_month: Array<number> | null;
                week_start: number | null;
                day: Array<number> | null;
                rule_type: string;
                interval: number | null;
                /**
                 * Number of occurrences of the recurring rule
                 */
                count: number | null;
                until: string | null;
            };
            customer?: {
                /**
                 * Customer first name (present only when type is individual)
                 */
                first_name?: string;
                /**
                 * Customer last name (present only when type is individual)
                 */
                last_name?: string;
                /**
                 * Customer gender (present only when type is individual)
                 */
                gender?: 'mister' | 'madam';
                /**
                 * Company name (present only when type is company)
                 */
                name?: string;
                /**
                 * Customer registration number (SIREN - present only when type is company)
                 */
                reg_no?: string;
                /**
                 * Customer's VAT number
                 */
                vat_number?: string;
                /**
                 * The last time the customer has been updated
                 */
                updated_at?: string;
                /**
                 * Customer identifier (is unique)
                 */
                source_id?: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
                /**
                 * Type of the customer (company or individual)
                 */
                customer_type?: 'company' | 'individual';
                /**
                 * Customer address (billing address)
                 */
                address?: string;
                /**
                 * Postal code (billing address)
                 */
                postal_code?: string;
                /**
                 * City (billing address)
                 */
                city?: string;
                /**
                 * Country alpha code (billing address)
                 */
                country_alpha2?: string;
                recipient?: string;
                billing_address?: {
                    address?: string;
                    postal_code?: string;
                    city?: string;
                    country_alpha2?: string;
                };
                delivery_address?: {
                    /**
                     * The delivery address
                     */
                    address?: string;
                    /**
                     * The delivery postal code
                     */
                    postal_code?: string;
                    /**
                     * The delivery city
                     */
                    city?: string;
                    /**
                     * The delivery country code
                     */
                    country_alpha2?: string;
                };
                /**
                 * Customer payment conditions
                 */
                payment_conditions?: 'upon_receipt' | 'custom' | '15_days' | '30_days' | '45_days' | '60_days';
                /**
                 * Customer phone number
                 */
                phone?: string;
                /**
                 * This reference doesn't appear on the invoice
                 */
                reference?: string;
                /**
                 * Notes about the customer
                 */
                notes?: string;
            };
            invoice_template?: {
                label?: string | null;
                /**
                 * Invoice currency code (ISO 4217)
                 */
                currency?: string;
                /**
                 * Invoice amount (total value of the invoice in euros. If the currency is euro, Currency Amount and Invoice Amount are identical)
                 */
                amount?: string;
                /**
                 * Invoice currency amount (total value of the invoice in the currency of the invoice)
                 */
                currency_amount?: string;
                /**
                 * Invoice currency amount before tax (total value before tax of the invoice in the currency of the invoice)
                 */
                currency_amount_before_tax?: string;
                /**
                 * Invoice exchange rate (used to convert the invoice to euros. If the invoice currency is euro it will be 1.0)
                 */
                exchange_rate?: string;
                payment_condition?: string | null;
                /**
                 * Invoice taxable amount (in invoice currency)
                 */
                currency_tax?: string;
                /**
                 * Language of the invoice. The locale region is separated by an underscore like in "fr_FR".
                 */
                language?: string;
                /**
                 * Invoice discount Amount (total discounted amount on the invoice. Set to 0.0 if the invoice does not have any discount. If the discount is relative, set as a percentage value between 0 and 1)
                 */
                discount?: string;
                /**
                 * Invoice discount Type (relative if it is a percentage of the total or absolute if it is an amount)
                 */
                discount_type?: string;
                /**
                 * Additional details
                 */
                special_mention?: string | null;
                /**
                 * The last time the invoice has been updated
                 */
                updated_at?: string;
                line_items?: Array<{
                    /**
                     * Line item id
                     */
                    id?: number;
                    /**
                     * Line item label
                     */
                    label?: string;
                    /**
                     * The kind of unit which applies to the amount
                     */
                    unit?: string | null;
                    /**
                     * Line item quantity (number of items)
                     */
                    quantity?: string;
                    /**
                     * The total amount of the document items in euros including taxes and deducting discounts
                     */
                    amount?: string;
                    /**
                     * The total amount of the document items in the document's currency including taxes and deducting discounts.
                     * If the currency is euro, amount and currencyAmount are identical.
                     *
                     */
                    currency_amount?: string;
                    /**
                     * Line item description
                     */
                    description?: string;
                    /**
                     * Line item product id
                     */
                    product_id?: string | null;
                    /**
                     * Product VAT rate. A 20% VAT in France is FR_200.
                     */
                    vat_rate?: 'FR_1_05' | 'FR_1_75' | 'FR_09' | 'FR_21' | 'FR_40' | 'FR_55' | 'FR_60' | 'FR_65' | 'FR_85' | 'FR_92' | 'FR_100' | 'FR_130' | 'FR_15_385' | 'FR_196' | 'FR_200' | 'AD_10' | 'AD_45' | 'AD_95' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_26' | 'CH_37' | 'CH_38' | 'CH_77' | 'CH_81' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_120' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'EE_220' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'MU_150' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'extracom' | 'intracom_21' | 'intracom_55' | 'intracom_85' | 'intracom_100' | 'crossborder' | 'FR_100_construction' | 'FR_200_construction';
                    /**
                     * Total amount before tax in currency
                     */
                    currency_price_before_tax?: string;
                    /**
                     * Total tax amount in currency
                     */
                    currency_tax?: string;
                    /**
                     * Line item discount (which is a percentage if the discount_type is "relative", or an amount if the discount_type is "absolute")
                     */
                    discount?: string;
                    /**
                     * Line item discount Type (relative if it is a percentage of the total or absolute if it is an amount)
                     */
                    discount_type?: string;
                }>;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/external/v1/billing_subscriptions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Access token is missing or invalid`,
                403: `Forbidden`,
                404: `Not found`,
                422: `Unprocessable Entity`,
            },
        });
    }
}
