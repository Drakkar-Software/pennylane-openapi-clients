/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EstimatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all estimates
     * This endpoint returns a list of estimates corresponding to the filter provided.
     * @param page Estimates are paginated, this is the current page returned
     * @param filter You can choose to filter estimates on a specific attributes (status, date, deadline, amount, etc).
     *
     * For instance, estimates can be filtered by status using the syntax : `[{"field": "status", "operator": "scope", "value": "estimate_pending_status"}]`.
     *
     * Available statuses:
     * - estimate_pending_status: an estimate waiting to be denied or accepted
     * - estimate_accepted_status: an estimate that has been accepted
     * - estimate_denied_status: an estimate that has been denied
     *
     * @returns any Returns a list of estimates
     * @throws ApiError
     */
    public customerEstimatesGet(
        page?: number,
        filter?: string,
    ): CancelablePromise<{
        total_pages?: number;
        current_page?: number;
        estimates?: Array<{
            /**
             * Estimate identifier
             */
            id?: string;
            label?: string | null;
            /**
             * Estimate currency code (ISO 4217)
             */
            currency?: string;
            /**
             * Estimate amount (total value of the estimate in euros. If the currency is euro, Currency Amount and Estimate Amount are identical)
             */
            amount?: string;
            /**
             * Estimate currency amount (total value of the estimate in the currency of the estimate)
             */
            currency_amount?: string;
            /**
             * Estimate currency amount before tax (total value before tax of the estimate in the currency of the estimate)
             */
            currency_amount_before_tax?: string;
            /**
             * Invoice number
             */
            estimate_number?: string;
            estimate_type?: 'invoice' | 'proforma' | 'estimate' | 'shipping_order' | 'purchasing_order' | 'purchase_request';
            /**
             * Estimate exchange rate (used to convert the estimate to euros. If the estimate currency is euro it will be 1.0)
             */
            exchange_rate?: number;
            /**
             * Estimate issue date
             */
            date?: string | null;
            /**
             * Estimate expiration date
             */
            deadline?: string | null;
            /**
             * Estimate taxable amount (in estimate currency)
             */
            currency_tax?: string;
            /**
             * Estimate Language
             */
            language?: string;
            /**
             * Estimate discount Amount (total discounted amount on the estimate. Set to 0.0 if the estimate does not have any discount. If the discount is relative, set as a percentage value between 0 and 1)
             */
            discount?: string;
            /**
             * Estimate discount Type (relative if it is a percentage of the total or absolute if it is an amount)
             */
            discount_type?: string;
            /**
             * This is the link of the file attached to the estimate
             */
            file_url?: string;
            /**
             * The last time the estimate has been updated
             */
            updated_at?: string;
            /**
             * Where the estimate is coming from. The only possible value is 'quotes' for now.
             * - quotes: Created directly from the editor
             *
             */
            source?: string;
            /**
             * Invoice title
             */
            pdf_invoice_subject?: string;
            /**
             * For example, the contact details of the person to contact
             */
            pdf_invoice_free_text?: string;
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
            } | null;
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
                vat_rate?: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
                /**
                 * Price before tax in currency
                 */
                currency_price_before_tax?: string;
                /**
                 * Tax amount in currency
                 */
                currency_tax?: string;
                /**
                 * Unit price (excluding tax)
                 */
                raw_currency_unit_price?: string;
            }>;
            /**
             * The status of the estimate
             */
            status?: 'pending' | 'accepted' | 'denied' | 'invoiced';
            related_invoices?: Array<{
                /**
                 * Invoice identifier
                 */
                id?: string;
                label?: string | null;
                /**
                 * Two invoices having the same quote_group_uuid are linked together
                 */
                quote_group_uuid?: string;
                /**
                 * Invoice currency code (ISO 4217)
                 */
                currency?: string;
                /**
                 * Invoice currency amount (total value of the invoice in the currency of the invoice)
                 */
                currency_amount?: string;
                /**
                 * Invoice amount (total value of the invoice in euros. If the currency is euro, Currency Amount and Invoice Amount are identical)
                 */
                amount?: string;
                /**
                 * Invoice paid status (set to True if the invoice is paid)
                 */
                paid?: boolean;
            }>;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/external/v1/customer_estimates',
            query: {
                'page': page,
                'filter': filter,
            },
            errors: {
                400: `Bad Request`,
                401: `Access token is missing or invalid`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Create an estimate
     * This endpoint allows you to create an estimate based on a specific payload. Pennylane will generate a pdf for you.
     *
     * How the create and update flags are working together:
     * - create_customer: true, update_customer: true => create the customer or update the customer
     * - create_customer: true, update_customer: false => create the customer or raise an error
     * The api will check that all the customer attributes given are the same in this case
     * - create_customer: false, update_customer: false => find the existing customer or raise an error
     * - create_customer: false, update_customer: true => find the existing customer and update it
     *
     * @param requestBody
     * @returns any Estimate has been created successfully
     * @throws ApiError
     */
    public customerEstimatesPost(
        requestBody?: {
            /**
             * Do you wish to create a new customer? If false, you need to specify a valid customer source_id
             */
            create_customer: boolean;
            /**
             * Update the customer data if the customer is found with the source_id
             */
            update_customer?: boolean;
            /**
             * Do you wish to create new products? If false and you pass the product key in the invoice_lines object, all the lines must specify a valid product source_id.
             */
            create_products: boolean;
            estimate: {
                /**
                 * Estimate issue date
                 */
                date: string;
                /**
                 * Estimate expiration date
                 */
                deadline: string;
                /**
                 * For example, the contact details of the person to contact
                 */
                pdf_invoice_free_text?: string | null;
                /**
                 * Invoice title
                 */
                pdf_invoice_subject?: string | null;
                /**
                 * Additional details
                 */
                special_mention?: string;
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
                line_items_sections_attributes?: Array<{
                    /**
                     * Title of the line items section
                     */
                    title?: string;
                    /**
                     * Description of the line items section
                     */
                    description?: string;
                    /**
                     * Defines the order in which sections will be displayed on the invoice. Each section has to have a different rank, starting from 1 and incrementing next values by 1
                     */
                    rank: number;
                }>;
                line_items: Array<({
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
                    vat_rate: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
                    /**
                     * The description of the invoice line
                     */
                    description?: string | null;
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
                     * The accounting plan item for the invoice line (default is using the product plan item)
                     */
                    plan_item_number?: string;
                    product: ({
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
                        vat_rate: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
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
                    } | {
                        /**
                         * Existing product identifier (source_id)
                         */
                        source_id: string;
                    });
                })>;
            };
        },
    ): CancelablePromise<{
        estimate?: {
            /**
             * Estimate identifier
             */
            id?: string;
            label?: string | null;
            /**
             * Estimate currency code (ISO 4217)
             */
            currency?: string;
            /**
             * Estimate amount (total value of the estimate in euros. If the currency is euro, Currency Amount and Estimate Amount are identical)
             */
            amount?: string;
            /**
             * Estimate currency amount (total value of the estimate in the currency of the estimate)
             */
            currency_amount?: string;
            /**
             * Estimate currency amount before tax (total value before tax of the estimate in the currency of the estimate)
             */
            currency_amount_before_tax?: string;
            /**
             * Invoice number
             */
            estimate_number?: string;
            estimate_type?: 'invoice' | 'proforma' | 'estimate' | 'shipping_order' | 'purchasing_order' | 'purchase_request';
            /**
             * Estimate exchange rate (used to convert the estimate to euros. If the estimate currency is euro it will be 1.0)
             */
            exchange_rate?: number;
            /**
             * Estimate issue date
             */
            date?: string | null;
            /**
             * Estimate expiration date
             */
            deadline?: string | null;
            /**
             * Estimate taxable amount (in estimate currency)
             */
            currency_tax?: string;
            /**
             * Estimate Language
             */
            language?: string;
            /**
             * Estimate discount Amount (total discounted amount on the estimate. Set to 0.0 if the estimate does not have any discount. If the discount is relative, set as a percentage value between 0 and 1)
             */
            discount?: string;
            /**
             * Estimate discount Type (relative if it is a percentage of the total or absolute if it is an amount)
             */
            discount_type?: string;
            /**
             * This is the link of the file attached to the estimate
             */
            file_url?: string;
            /**
             * The last time the estimate has been updated
             */
            updated_at?: string;
            /**
             * Where the estimate is coming from. The only possible value is 'quotes' for now.
             * - quotes: Created directly from the editor
             *
             */
            source?: string;
            /**
             * Invoice title
             */
            pdf_invoice_subject?: string;
            /**
             * For example, the contact details of the person to contact
             */
            pdf_invoice_free_text?: string;
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
            } | null;
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
                vat_rate?: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
                /**
                 * Price before tax in currency
                 */
                currency_price_before_tax?: string;
                /**
                 * Tax amount in currency
                 */
                currency_tax?: string;
                /**
                 * Unit price (excluding tax)
                 */
                raw_currency_unit_price?: string;
            }>;
            /**
             * The status of the estimate
             */
            status?: 'pending' | 'accepted' | 'denied' | 'invoiced';
            related_invoices?: Array<{
                /**
                 * Invoice identifier
                 */
                id?: string;
                label?: string | null;
                /**
                 * Two invoices having the same quote_group_uuid are linked together
                 */
                quote_group_uuid?: string;
                /**
                 * Invoice currency code (ISO 4217)
                 */
                currency?: string;
                /**
                 * Invoice currency amount (total value of the invoice in the currency of the invoice)
                 */
                currency_amount?: string;
                /**
                 * Invoice amount (total value of the invoice in euros. If the currency is euro, Currency Amount and Invoice Amount are identical)
                 */
                amount?: string;
                /**
                 * Invoice paid status (set to True if the invoice is paid)
                 */
                paid?: boolean;
            }>;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/external/v1/customer_estimates',
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
     * Retrieve an estimate
     * This endpoint returns a specific estimate.
     * @param id Existing estimate identifier (id)
     * @returns any Returns an estimate
     * @throws ApiError
     */
    public customerEstimatesIdGet(
        id: string,
    ): CancelablePromise<{
        estimate?: {
            /**
             * Estimate identifier
             */
            id?: string;
            label?: string | null;
            /**
             * Estimate currency code (ISO 4217)
             */
            currency?: string;
            /**
             * Estimate amount (total value of the estimate in euros. If the currency is euro, Currency Amount and Estimate Amount are identical)
             */
            amount?: string;
            /**
             * Estimate currency amount (total value of the estimate in the currency of the estimate)
             */
            currency_amount?: string;
            /**
             * Estimate currency amount before tax (total value before tax of the estimate in the currency of the estimate)
             */
            currency_amount_before_tax?: string;
            /**
             * Invoice number
             */
            estimate_number?: string;
            estimate_type?: 'invoice' | 'proforma' | 'estimate' | 'shipping_order' | 'purchasing_order' | 'purchase_request';
            /**
             * Estimate exchange rate (used to convert the estimate to euros. If the estimate currency is euro it will be 1.0)
             */
            exchange_rate?: number;
            /**
             * Estimate issue date
             */
            date?: string | null;
            /**
             * Estimate expiration date
             */
            deadline?: string | null;
            /**
             * Estimate taxable amount (in estimate currency)
             */
            currency_tax?: string;
            /**
             * Estimate Language
             */
            language?: string;
            /**
             * Estimate discount Amount (total discounted amount on the estimate. Set to 0.0 if the estimate does not have any discount. If the discount is relative, set as a percentage value between 0 and 1)
             */
            discount?: string;
            /**
             * Estimate discount Type (relative if it is a percentage of the total or absolute if it is an amount)
             */
            discount_type?: string;
            /**
             * This is the link of the file attached to the estimate
             */
            file_url?: string;
            /**
             * The last time the estimate has been updated
             */
            updated_at?: string;
            /**
             * Where the estimate is coming from. The only possible value is 'quotes' for now.
             * - quotes: Created directly from the editor
             *
             */
            source?: string;
            /**
             * Invoice title
             */
            pdf_invoice_subject?: string;
            /**
             * For example, the contact details of the person to contact
             */
            pdf_invoice_free_text?: string;
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
                recipient?: string;
                billing_address?: {
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
            } | null;
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
                vat_rate?: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
                /**
                 * Price before tax in currency
                 */
                currency_price_before_tax?: string;
                /**
                 * Tax amount in currency
                 */
                currency_tax?: string;
                /**
                 * Unit price (excluding tax)
                 */
                raw_currency_unit_price?: string;
            }>;
            /**
             * The status of the estimate
             */
            status?: 'pending' | 'accepted' | 'denied' | 'invoiced';
            related_invoices?: Array<{
                /**
                 * Invoice identifier
                 */
                id?: string;
                label?: string | null;
                /**
                 * Two invoices having the same quote_group_uuid are linked together
                 */
                quote_group_uuid?: string;
                /**
                 * Invoice currency code (ISO 4217)
                 */
                currency?: string;
                /**
                 * Invoice currency amount (total value of the invoice in the currency of the invoice)
                 */
                currency_amount?: string;
                /**
                 * Invoice amount (total value of the invoice in euros. If the currency is euro, Currency Amount and Invoice Amount are identical)
                 */
                amount?: string;
                /**
                 * Invoice paid status (set to True if the invoice is paid)
                 */
                paid?: boolean;
            }>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/external/v1/customer_estimates/{id}',
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
     * Update an estimate status
     * This endpoint updates a specific estimate.
     * @param id Estimate identifier
     * @param requestBody
     * @returns any Estimate has been updated successfully
     * @throws ApiError
     */
    public customerEstimatesIdPut(
        id: string,
        requestBody?: {
            invoice: {
                estimate_status?: 'pending' | 'accepted' | 'denied' | 'invoiced';
            };
        },
    ): CancelablePromise<{
        estimate?: {
            /**
             * Estimate identifier
             */
            id?: string;
            label?: string | null;
            /**
             * Estimate currency code (ISO 4217)
             */
            currency?: string;
            /**
             * Estimate amount (total value of the estimate in euros. If the currency is euro, Currency Amount and Estimate Amount are identical)
             */
            amount?: string;
            /**
             * Estimate currency amount (total value of the estimate in the currency of the estimate)
             */
            currency_amount?: string;
            /**
             * Estimate currency amount before tax (total value before tax of the estimate in the currency of the estimate)
             */
            currency_amount_before_tax?: string;
            /**
             * Invoice number
             */
            estimate_number?: string;
            estimate_type?: 'invoice' | 'proforma' | 'estimate' | 'shipping_order' | 'purchasing_order' | 'purchase_request';
            /**
             * Estimate exchange rate (used to convert the estimate to euros. If the estimate currency is euro it will be 1.0)
             */
            exchange_rate?: number;
            /**
             * Estimate issue date
             */
            date?: string | null;
            /**
             * Estimate expiration date
             */
            deadline?: string | null;
            /**
             * Estimate taxable amount (in estimate currency)
             */
            currency_tax?: string;
            /**
             * Estimate Language
             */
            language?: string;
            /**
             * Estimate discount Amount (total discounted amount on the estimate. Set to 0.0 if the estimate does not have any discount. If the discount is relative, set as a percentage value between 0 and 1)
             */
            discount?: string;
            /**
             * Estimate discount Type (relative if it is a percentage of the total or absolute if it is an amount)
             */
            discount_type?: string;
            /**
             * This is the link of the file attached to the estimate
             */
            file_url?: string;
            /**
             * The last time the estimate has been updated
             */
            updated_at?: string;
            /**
             * Where the estimate is coming from. The only possible value is 'quotes' for now.
             * - quotes: Created directly from the editor
             *
             */
            source?: string;
            /**
             * Invoice title
             */
            pdf_invoice_subject?: string;
            /**
             * For example, the contact details of the person to contact
             */
            pdf_invoice_free_text?: string;
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
            } | null;
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
                vat_rate?: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
                /**
                 * Price before tax in currency
                 */
                currency_price_before_tax?: string;
                /**
                 * Tax amount in currency
                 */
                currency_tax?: string;
                /**
                 * Unit price (excluding tax)
                 */
                raw_currency_unit_price?: string;
            }>;
            /**
             * The status of the estimate
             */
            status?: 'pending' | 'accepted' | 'denied' | 'invoiced';
            related_invoices?: Array<{
                /**
                 * Invoice identifier
                 */
                id?: string;
                label?: string | null;
                /**
                 * Two invoices having the same quote_group_uuid are linked together
                 */
                quote_group_uuid?: string;
                /**
                 * Invoice currency code (ISO 4217)
                 */
                currency?: string;
                /**
                 * Invoice currency amount (total value of the invoice in the currency of the invoice)
                 */
                currency_amount?: string;
                /**
                 * Invoice amount (total value of the invoice in euros. If the currency is euro, Currency Amount and Invoice Amount are identical)
                 */
                amount?: string;
                /**
                 * Invoice paid status (set to True if the invoice is paid)
                 */
                paid?: boolean;
            }>;
        };
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/external/v1/customer_estimates/{id}',
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
