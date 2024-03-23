/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CustomerInvoicesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Import an invoice
     * This endpoint allows you to create a invoice based on a specific payload and pdf.
     * @param requestBody
     * @returns any Invoice has been imported successfully
     * @throws ApiError
     */
    public customerInvoicesImport(
        requestBody?: {
            /**
             * Do you wish to create a new customer ? If false, you need to specify a valid customer source_id
             */
            create_customer: boolean;
            /**
             * A link to retrieve the invoice pdf. The file will be imported asynchronously. Two invoices must have different file_urls.
             */
            file_url?: string;
            /**
             * The content encoded in base64 of the file if an url is not provided.
             */
            file?: string;
            invoice: {
                /**
                 * Invoice date
                 */
                date: string;
                /**
                 * Invoice payment deadline
                 */
                deadline: string;
                /**
                 * An id you can use to refer to the invoice from outside of Pennylane
                 */
                external_id?: string | null;
                /**
                 * Invoice number
                 */
                invoice_number?: string;
                /**
                 * Invoice Currency (ISO 4217). Default is EUR.
                 */
                currency?: string;
                /**
                 * This will set the invoice to Incomplete status
                 */
                customer_validation_needed?: boolean;
                /**
                 * By adding this field you can automatically reconciliate the newly created (or imported) invoice with a transaction using transactions payment reference (Currently only stripe and invoice_number matching is supported)
                 */
                transactions_reference?: {
                    /**
                     * The banking provider for the transaction
                     */
                    banking_provider: string | null;
                    /**
                     * Name of the field that you want to match
                     */
                    provider_field_name: string | null;
                    /**
                     * Value that you want to match
                     */
                    provider_field_value: string | null;
                };
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
                    plan_item?: {
                        label?: string;
                        enabled?: boolean;
                        vat_rate?: string;
                        country_alpha2?: string;
                        description?: string;
                    };
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
                    plan_item?: {
                        label?: string;
                        enabled?: boolean;
                        vat_rate?: string;
                        country_alpha2?: string;
                        description?: string;
                    };
                });
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
                         * The source_id of an exiting product
                         */
                        source_id: string;
                        /**
                         * Product unit
                         */
                        unit: string;
                        /**
                         * Product price including taxes
                         */
                        price: number;
                        /**
                         * Product VAT rate. A 20% VAT in France is FR_200.
                         */
                        vat_rate: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
                        /**
                         * Product label
                         * @deprecated
                         */
                        label?: string;
                        /**
                         * Product price before taxes
                         * @deprecated
                         */
                        price_before_tax?: number;
                        /**
                         * Product description
                         * @deprecated
                         */
                        description?: string;
                        /**
                         * Product currency
                         * @deprecated
                         */
                        currency?: string;
                        /**
                         * Product reference
                         * @deprecated
                         */
                        reference?: string | null;
                        /**
                         * Product substance. Can be services or goods.
                         * @deprecated
                         */
                        substance?: 'goods' | 'services' | null;
                    } | {
                        /**
                         * Existing product identifier (source_id)
                         */
                        source_id: string;
                    });
                })>;
                categories?: Array<{
                    /**
                     * Category identifier (is unique)
                     */
                    source_id: string;
                    /**
                     * Category weight (0.8 means 80%)
                     */
                    weight?: number | null;
                    /**
                     * You can use this property to specify the proportion of the tag in amount of currency instead of percentages. If the currency is EUR, 180 means 180 EUR.
                     */
                    amount?: number | null;
                }>;
                imputation_dates?: {
                    /**
                     * Start date of the imputation period (ISO 8601)
                     */
                    start_date: string;
                    /**
                     * End date of the imputation period (ISO 8601)
                     */
                    end_date: string;
                } | null;
            };
        },
    ): CancelablePromise<{
        invoice?: {
            /**
             * Invoice identifier
             */
            id?: string;
            label?: string | null;
            invoice_number?: string | null;
            /**
             * Two invoices having the same quote_group_uuid are linked together
             */
            quote_group_uuid?: string;
            /**
             * Invoice draft status (set to True if the invoice is a draft)
             */
            is_draft?: boolean;
            /**
             * Invoice estimate status (set to True if the document is an estimate, False if it's an invoice)
             */
            is_estimate?: boolean;
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
            exchange_rate?: number;
            /**
             * Invoice issue date (ISO 8601)
             */
            date?: string | null;
            /**
             * Invoice payment deadline (ISO 8601)
             */
            deadline?: string | null;
            /**
             * Invoice taxable amount (in invoice currency)
             */
            currency_tax?: string;
            /**
             * Language of the invoice. The locale region is separated by an underscore like in "fr_FR".
             */
            language?: 'fr_FR' | 'en_GB';
            /**
             * Invoice paid status (set to True if the invoice is paid)
             */
            paid?: boolean;
            /**
             * Invoice payment date
             */
            fully_paid_at?: string | null;
            /**
             * Invoice status
             */
            status?: string | null;
            /**
             * Invoice discount (which is a percentage if the discount_type is "relative", or an amount if the discount_type is "absolute")
             */
            discount?: string;
            /**
             * Invoice discount Type (relative if it is a percentage of the total or absolute if it is an amount)
             */
            discount_type?: string;
            /**
             * Public url of the invoice
             */
            public_url?: string;
            /**
             * If there's a file attached to the invoice, this is the link of the file
             */
            file_url?: string | null;
            /**
             * Name of the file attached to the invoice
             */
            filename?: any;
            /**
             * The remaining amount to pay for the invoice to be considered paid
             */
            remaining_amount?: string;
            /**
             * Where the invoice is coming from, here are the different values:
             * - quotes: Created directly from the editor
             * - stripe: Imported from Stripe
             * - other: Other cases
             *
             */
            source?: string;
            /**
             * Additional details
             */
            special_mention?: string | null;
            /**
             * This will set the invoice to Incomplete status
             */
            customer_validation_needed?: boolean;
            /**
             * The last time the invoice has been updated
             */
            updated_at?: string;
            imputation_dates: {
                /**
                 * Start date of the imputation period (ISO 8601)
                 */
                start_date: string;
                /**
                 * End date of the imputation period (ISO 8601)
                 */
                end_date: string;
            } | null;
            customer?: ({
                /**
                 * Company name
                 */
                name: string;
                /**
                 * Type of the customer. Must be company
                 */
                customer_type: 'company';
                /**
                 * Customer registration number (SIREN)
                 */
                reg_no?: string;
                billing_address: {
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
                delivery_address: {
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
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            } | {
                /**
                 * Type of the customer. Must be individual
                 */
                customer_type: 'individual';
                /**
                 * Customer full name
                 */
                name: string;
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
                gender: 'mister' | 'madam';
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
                /**
                 * You can use your own id when creating the customer. If not provided, Pennylane will pick one for you. Id must be unique
                 */
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            });
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
                 * Line item discount Type (relative if it is a percentage of the total or absolute if it is an amount)
                 */
                discount_type?: string;
            }>;
            categories?: Array<{
                /**
                 * Category identifier (is unique)
                 */
                source_id: string;
                /**
                 * Category weight (0.8 means 80%)
                 */
                weight: string;
                /**
                 * Category name (is unique per group of categories)
                 */
                label: string;
                direction: 'cash_in' | 'cash_out' | null;
                /**
                 * Category created date
                 */
                created_at: string;
                /**
                 * Category created date
                 */
                updated_at: string;
            }>;
            /**
             * By adding this field you can automatically reconciliate the newly created (or imported) invoice with a transaction using transactions payment reference (Currently only stripe and invoice_number matching is supported)
             */
            transactions_reference?: {
                /**
                 * The banking provider for the transaction
                 */
                banking_provider: string | null;
                /**
                 * Name of the field that you want to match
                 */
                provider_field_name: string | null;
                /**
                 * Value that you want to match
                 */
                provider_field_value: string | null;
            } | null;
            payments?: Array<{
                /**
                 * Payment label
                 */
                label?: string;
                /**
                 * Payment created date
                 */
                created_at?: string;
                /**
                 * Payment amount
                 */
                currency_amount?: string;
            }> | null;
            matched_transactions?: Array<{
                /**
                 * Transaction Label
                 */
                label?: string | null;
                amount?: string | null;
                group_uuid?: string;
                date?: string | null;
                fee?: string | null;
                currency?: string;
            }> | null;
            pdf_invoice_free_text?: string;
            pdf_invoice_subject?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/external/v1/customer_invoices/import',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Access token is missing or invalid`,
                403: `Forbidden`,
                422: `The invoice could not be processed`,
            },
        });
    }
    /**
     * Create an invoice
     * This endpoint allows you to create a invoice based on a specific payload. Pennylane will generate a pdf for you.
     *
     * How the create and update flags are working together:
     * - create_customer: true, update_customer: true => create the customer or update the customer
     * - create_customer: true, update_customer: false => create the customer or raise an error
     * The api will check that all the customer attributes given are the same in this case
     * - create_customer: false, update_customer: false => find the existing customer or raise an error
     * - create_customer: false, update_customer: true => find the existing customer and update it
     *
     * @param requestBody
     * @returns any Invoice has been created successfully
     * @throws ApiError
     */
    public customerInvoicesPost(
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
            invoice: {
                /**
                 * Invoice date
                 */
                date: string;
                /**
                 * Invoice payment deadline
                 */
                deadline: string;
                /**
                 * An id you can use to refer to the invoice from outside of Pennylane
                 */
                external_id?: string | null;
                /**
                 * For example, the contact details of the person to contact
                 */
                pdf_invoice_free_text?: string | null;
                /**
                 * Invoice title
                 */
                pdf_invoice_subject?: string | null;
                /**
                 * Do you wish to create a draft invoice (otherwise it is a finalized invoice) ? Reminder, once created, a finalized invoice cannot be edited !
                 */
                draft: boolean;
                /**
                 * Invoice Currency (ISO 4217). Default is EUR.
                 */
                currency?: string;
                /**
                 * Additional details
                 */
                special_mention?: string | null;
                /**
                 * Invoice discount (in percent)
                 */
                discount?: number;
                /**
                 * invoice pdf language (defaults to fr_FR)
                 */
                language?: 'fr_FR' | 'en_GB';
                /**
                 * By adding this field you can automatically reconciliate the newly created (or imported) invoice with a transaction using transactions payment reference (Currently only stripe and invoice_number matching is supported)
                 */
                transactions_reference?: {
                    /**
                     * The banking provider for the transaction
                     */
                    banking_provider: string | null;
                    /**
                     * Name of the field that you want to match
                     */
                    provider_field_name: string | null;
                    /**
                     * Value that you want to match
                     */
                    provider_field_value: string | null;
                };
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
                    plan_item?: {
                        label?: string;
                        enabled?: boolean;
                        vat_rate?: string;
                        country_alpha2?: string;
                        description?: string;
                    };
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
                    plan_item?: {
                        label?: string;
                        enabled?: boolean;
                        vat_rate?: string;
                        country_alpha2?: string;
                        description?: string;
                    };
                });
                line_items_sections_attributes?: Array<any>;
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
                     * Line item currency amount, including taxes (in invoice currency).
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
                    /**
                     * Line item discount (in percent)
                     */
                    discount?: number;
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
                     * Has to correspond to the rank number of a line items section in which the line item should be
                     */
                    section_rank?: number;
                    /**
                     * Line item currency amount, excluding taxes (in invoice currency).
                     */
                    currency_amount_before_tax: number;
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
                        /**
                         * Product price including taxes
                         */
                        price?: number;
                        /**
                         * Product VAT rate. A 20% VAT in France is FR_200.
                         */
                        vat_rate?: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
                        /**
                         * Product unit
                         */
                        unit?: string;
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
                    };
                })>;
                categories?: Array<{
                    /**
                     * Category identifier (is unique)
                     */
                    source_id: string;
                    /**
                     * Category weight (0.8 means 80%)
                     */
                    weight?: number | null;
                    /**
                     * You can use this property to specify the proportion of the tag in amount of currency instead of percentages. If the currency is EUR, 180 means 180 EUR.
                     */
                    amount?: number | null;
                }>;
                imputation_dates?: {
                    /**
                     * Start date of the imputation period (ISO 8601)
                     */
                    start_date: string;
                    /**
                     * End date of the imputation period (ISO 8601)
                     */
                    end_date: string;
                } | null;
            };
        },
    ): CancelablePromise<{
        invoice?: {
            /**
             * Invoice identifier
             */
            id?: string;
            label?: string | null;
            invoice_number?: string | null;
            /**
             * Two invoices having the same quote_group_uuid are linked together
             */
            quote_group_uuid?: string;
            /**
             * Invoice draft status (set to True if the invoice is a draft)
             */
            is_draft?: boolean;
            /**
             * Invoice estimate status (set to True if the document is an estimate, False if it's an invoice)
             */
            is_estimate?: boolean;
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
            exchange_rate?: number;
            /**
             * Invoice issue date (ISO 8601)
             */
            date?: string | null;
            /**
             * Invoice payment deadline (ISO 8601)
             */
            deadline?: string | null;
            /**
             * Invoice taxable amount (in invoice currency)
             */
            currency_tax?: string;
            /**
             * Language of the invoice. The locale region is separated by an underscore like in "fr_FR".
             */
            language?: 'fr_FR' | 'en_GB';
            /**
             * Invoice paid status (set to True if the invoice is paid)
             */
            paid?: boolean;
            /**
             * Invoice payment date
             */
            fully_paid_at?: string | null;
            /**
             * Invoice status
             */
            status?: string | null;
            /**
             * Invoice discount (which is a percentage if the discount_type is "relative", or an amount if the discount_type is "absolute")
             */
            discount?: string;
            /**
             * Invoice discount Type (relative if it is a percentage of the total or absolute if it is an amount)
             */
            discount_type?: string;
            /**
             * Public url of the invoice
             */
            public_url?: string;
            /**
             * If there's a file attached to the invoice, this is the link of the file
             */
            file_url?: string | null;
            /**
             * Name of the file attached to the invoice
             */
            filename?: any;
            /**
             * The remaining amount to pay for the invoice to be considered paid
             */
            remaining_amount?: string;
            /**
             * Where the invoice is coming from, here are the different values:
             * - quotes: Created directly from the editor
             * - stripe: Imported from Stripe
             * - other: Other cases
             *
             */
            source?: string;
            /**
             * Additional details
             */
            special_mention?: string | null;
            /**
             * This will set the invoice to Incomplete status
             */
            customer_validation_needed?: boolean;
            /**
             * The last time the invoice has been updated
             */
            updated_at?: string;
            imputation_dates: {
                /**
                 * Start date of the imputation period (ISO 8601)
                 */
                start_date: string;
                /**
                 * End date of the imputation period (ISO 8601)
                 */
                end_date: string;
            } | null;
            customer?: ({
                /**
                 * Company name
                 */
                name: string;
                /**
                 * Type of the customer. Must be company
                 */
                customer_type: 'company';
                /**
                 * Customer registration number (SIREN)
                 */
                reg_no?: string;
                billing_address: {
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
                delivery_address: {
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
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            } | {
                /**
                 * Type of the customer. Must be individual
                 */
                customer_type: 'individual';
                /**
                 * Customer full name
                 */
                name: string;
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
                gender: 'mister' | 'madam';
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
                /**
                 * You can use your own id when creating the customer. If not provided, Pennylane will pick one for you. Id must be unique
                 */
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            });
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
                vat_rate?: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
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
                 * Line items discount (which is a percentage if the discount_type is "relative", or an amount if the discount_type is "absolute")
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
            categories?: Array<{
                /**
                 * Category identifier (is unique)
                 */
                source_id: string;
                /**
                 * Category weight (0.8 means 80%)
                 */
                weight: string;
                /**
                 * Category name (is unique per group of categories)
                 */
                label: string;
                direction: 'cash_in' | 'cash_out' | null;
                /**
                 * Category created date
                 */
                created_at: string;
                /**
                 * Category created date
                 */
                updated_at: string;
            }>;
            /**
             * By adding this field you can automatically reconciliate the newly created (or imported) invoice with a transaction using transactions payment reference (Currently only stripe and invoice_number matching is supported)
             */
            transactions_reference?: {
                /**
                 * The banking provider for the transaction
                 */
                banking_provider: string | null;
                /**
                 * Name of the field that you want to match
                 */
                provider_field_name: string | null;
                /**
                 * Value that you want to match
                 */
                provider_field_value: string | null;
            } | null;
            payments?: Array<{
                /**
                 * Payment label
                 */
                label?: string;
                /**
                 * Payment created date
                 */
                created_at?: string;
                /**
                 * Payment amount
                 */
                currency_amount?: string;
            }> | null;
            matched_transactions?: Array<{
                /**
                 * Transaction Label
                 */
                label?: string | null;
                amount?: string | null;
                group_uuid?: string;
                date?: string | null;
                fee?: string | null;
                currency?: string;
            }> | null;
            pdf_invoice_free_text?: string;
            pdf_invoice_subject?: string;
            billing_subscription?: {
                id?: number;
            } | null;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/external/v1/customer_invoices',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Access token is missing or invalid`,
                403: `Forbidden`,
                422: `The invoice could not be processed`,
            },
        });
    }
    /**
     * List all invoices
     * This endpoint returns a list of invoices corresponding to the filter provided.Please refer to [the filters page](https://pennylane.readme.io/reference/invoice-filtering) to learn how to correctly build the `filter` parameter.
     * @param page Invoices are paginated, this is the current page which will be returned. The page index is starting at 1.
     * @param perPage Invoices are paginated. By default, you get 20 invoices by page. You can specify another number of invoices by page.
     * @param filter You can choose to filter invoices on a specific attributes (status, date, deadline, amount, etc).
     *
     * Please refer to [the filters page](https://pennylane.readme.io/reference/invoice-filtering) to learn how to correctly build the `filter` parameter.
     *
     * For instance, you can select the invoices that have the `status` `late_status` by using the following filter: `[{"field": "status", "operator": "scope", "value": "late_status"}]`.
     *
     * @returns any Returns a list of invoices
     * @throws ApiError
     */
    public customerInvoicesGet(
        page?: number,
        perPage?: number,
        filter?: string,
    ): CancelablePromise<{
        /**
         * The total number of pages available
         */
        total_pages?: number;
        /**
         * The current page returned
         */
        current_page?: number;
        /**
         * The total number of invoices
         */
        total_invoices?: number;
        /**
         * The list of invoices
         */
        invoices?: Array<{
            /**
             * Invoice identifier
             */
            id?: string;
            label?: string | null;
            invoice_number?: string | null;
            /**
             * Two invoices having the same quote_group_uuid are linked together
             */
            quote_group_uuid?: string;
            /**
             * Invoice draft status (set to True if the invoice is a draft)
             */
            is_draft?: boolean;
            /**
             * Invoice estimate status (set to True if the document is an estimate, False if it's an invoice)
             */
            is_estimate?: boolean;
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
            exchange_rate?: number;
            /**
             * Invoice issue date (ISO 8601)
             */
            date?: string | null;
            /**
             * Invoice payment deadline (ISO 8601)
             */
            deadline?: string | null;
            /**
             * Invoice taxable amount (in invoice currency)
             */
            currency_tax?: string;
            /**
             * Language of the invoice. The locale region is separated by an underscore like in "fr_FR".
             */
            language?: 'fr_FR' | 'en_GB';
            /**
             * Invoice paid status (set to True if the invoice is paid)
             */
            paid?: boolean;
            /**
             * Invoice status
             */
            status?: string | null;
            /**
             * Invoice discount (which is a percentage if the discount_type is "relative", or an amount if the discount_type is "absolute")
             */
            discount?: string;
            /**
             * Invoice discount Type (relative if it is a percentage of the total or absolute if it is an amount)
             */
            discount_type?: string;
            /**
             * Public url of the invoice
             */
            public_url?: string;
            /**
             * If there's a file attached to the invoice, this is the link of the file
             */
            file_url?: string | null;
            /**
             * Name of the file attached to the invoice
             */
            filename?: any;
            /**
             * The remaining amount to pay for the invoice to be considered paid
             */
            remaining_amount?: string;
            /**
             * Where the invoice is coming from, here are the different values:
             * - quotes: Created directly from the editor
             * - stripe: Imported from Stripe
             * - other: Other cases
             *
             */
            source?: string;
            /**
             * Additional details
             */
            special_mention?: string | null;
            /**
             * The last time the invoice has been updated
             */
            updated_at?: string;
            imputation_dates: {
                /**
                 * Start date of the imputation period (ISO 8601)
                 */
                start_date: string;
                /**
                 * End date of the imputation period (ISO 8601)
                 */
                end_date: string;
            } | null;
            customer?: ({
                /**
                 * Company name
                 */
                name: string;
                /**
                 * Type of the customer. Must be company
                 */
                customer_type: 'company';
                /**
                 * Customer registration number (SIREN)
                 */
                reg_no?: string;
                billing_address: {
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
                delivery_address: {
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
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            } | {
                /**
                 * Type of the customer. Must be individual
                 */
                customer_type: 'individual';
                /**
                 * Customer full name
                 */
                name: string;
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
                gender: 'mister' | 'madam';
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
                /**
                 * You can use your own id when creating the customer. If not provided, Pennylane will pick one for you. Id must be unique
                 */
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            });
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
                vat_rate?: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
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
                 * Line item discount Type (relative if it is a percentage of the total or absolute if it is an amount)
                 */
                discount_type?: string;
                /**
                 * Defines the order in which line items will be displayed on the invoice. Each line item has to have a different rank, starting from 1 and incrementing next values by 1
                 */
                section_rank?: number | null;
            }>;
            categories?: Array<{
                /**
                 * Category identifier (is unique)
                 */
                source_id: string;
                /**
                 * Category weight (0.8 means 80%)
                 */
                weight: string;
                /**
                 * Category name (is unique per group of categories)
                 */
                label: string;
                direction: 'cash_in' | 'cash_out' | null;
                /**
                 * Category created date
                 */
                created_at: string;
                /**
                 * Category created date
                 */
                updated_at: string;
            }>;
            /**
             * By adding this field you can automatically reconciliate the newly created (or imported) invoice with a transaction using transactions payment reference (Currently only stripe and invoice_number matching is supported)
             */
            transactions_reference?: {
                /**
                 * The banking provider for the transaction
                 */
                banking_provider: string | null;
                /**
                 * Name of the field that you want to match
                 */
                provider_field_name: string | null;
                /**
                 * Value that you want to match
                 */
                provider_field_value: string | null;
            } | null;
            payments?: Array<{
                /**
                 * Payment label
                 */
                label?: string;
                /**
                 * Payment created date
                 */
                created_at?: string;
                /**
                 * Payment amount
                 */
                currency_amount?: string;
            }> | null;
            matched_transactions?: Array<{
                /**
                 * Transaction Label
                 */
                label?: string | null;
                amount?: string | null;
                group_uuid?: string;
                date?: string | null;
                fee?: string | null;
                currency?: string;
            }> | null;
            pdf_invoice_free_text?: string;
            pdf_invoice_subject?: string;
            billing_subscription?: {
                id?: number;
            } | null;
            credit_notes?: Array<{
                /**
                 * An id you can use to refer to the credit note from outside of pennylane
                 */
                id: string;
                /**
                 * Credit note amount (total value of the credit note in euros. If the currency is euro, Currency Amount and credit note Amount are identical)
                 */
                amount: string;
                /**
                 * Credit note taxable amount (in euros. If the currency is euro, Credit note taxable amount and credit note amount are identical)
                 */
                tax: string;
                /**
                 * Invoice currency code (ISO 4217)
                 */
                currency: string;
                /**
                 * Credit note currency amount (total value of the credit note in the currency of the invoice)
                 */
                currency_amount: string;
                /**
                 * Credit note taxable amount (in invoice currency)
                 */
                currency_tax: string;
                /**
                 * Credit note currency amount before tax (total value before tax of the invoice in the currency of the invoice)
                 */
                currency_price_before_tax: string;
                invoice_number: string | null;
                /**
                 * Credit note draft status (set to True if the credit note is a draft)
                 */
                draft: boolean;
            }> | null;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/external/v1/customer_invoices',
            query: {
                'page': page,
                'per_page': perPage,
                'filter': filter,
            },
            errors: {
                400: `Bad Request`,
                401: `Access token is missing or invalid`,
                403: `Forbidden`,
                422: `Unprocessable Entity`,
            },
        });
    }
    /**
     * Retrieve an invoice
     * This endpoint returns a specific invoice.
     * @param id Existing invoice identifier (id)
     * @returns any Returns an invoice
     * @throws ApiError
     */
    public customerInvoicesIdGet(
        id: string,
    ): CancelablePromise<{
        invoice?: {
            /**
             * Invoice identifier
             */
            id?: string;
            label?: string | null;
            invoice_number?: string | null;
            /**
             * Two invoices having the same quote_group_uuid are linked together
             */
            quote_group_uuid?: string;
            /**
             * Invoice draft status (set to True if the invoice is a draft)
             */
            is_draft?: boolean;
            /**
             * Invoice estimate status (set to True if the document is an estimate, False if it's an invoice)
             */
            is_estimate?: boolean;
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
            exchange_rate?: number;
            /**
             * Invoice issue date (ISO 8601)
             */
            date?: string | null;
            /**
             * Invoice payment deadline (ISO 8601)
             */
            deadline?: string | null;
            /**
             * Invoice taxable amount (in invoice currency)
             */
            currency_tax?: string;
            /**
             * Language of the invoice. The locale region is separated by an underscore like in "fr_FR".
             */
            language?: 'fr_FR' | 'en_GB';
            /**
             * Invoice paid status (set to True if the invoice is paid)
             */
            paid?: boolean;
            /**
             * Invoice payment date
             */
            fully_paid_at?: string | null;
            /**
             * Invoice status
             */
            status?: string | null;
            /**
             * Invoice discount (which is a percentage if the discount_type is "relative", or an amount if the discount_type is "absolute")
             */
            discount?: string;
            /**
             * Invoice discount Type (relative if it is a percentage of the total or absolute if it is an amount)
             */
            discount_type?: string;
            /**
             * Public url of the invoice
             */
            public_url?: string;
            /**
             * If there's a file attached to the invoice, this is the link of the file
             */
            file_url?: string | null;
            /**
             * Name of the file attached to the invoice
             */
            filename?: any;
            /**
             * The remaining amount to pay for the invoice to be considered paid
             */
            remaining_amount?: string;
            /**
             * Where the invoice is coming from, here are the different values:
             * - quotes: Created directly from the editor
             * - stripe: Imported from Stripe
             * - other: Other cases
             *
             */
            source?: string;
            /**
             * Additional details
             */
            special_mention?: string | null;
            /**
             * The last time the invoice has been updated
             */
            updated_at?: string;
            imputation_dates: {
                /**
                 * Start date of the imputation period (ISO 8601)
                 */
                start_date: string;
                /**
                 * End date of the imputation period (ISO 8601)
                 */
                end_date: string;
            } | null;
            customer?: ({
                /**
                 * Company name
                 */
                name: string;
                /**
                 * Type of the customer. Must be company
                 */
                customer_type: 'company';
                /**
                 * Customer registration number (SIREN)
                 */
                reg_no?: string;
                billing_address: {
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
                delivery_address: {
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
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            } | {
                /**
                 * Type of the customer. Must be individual
                 */
                customer_type: 'individual';
                /**
                 * Customer full name
                 */
                name: string;
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
                gender: 'mister' | 'madam';
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
                /**
                 * You can use your own id when creating the customer. If not provided, Pennylane will pick one for you. Id must be unique
                 */
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            });
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
                vat_rate?: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
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
                 * Line item discount Type (relative if it is a percentage of the total or absolute if it is an amount)
                 */
                discount_type?: string;
                /**
                 * Defines the order in which line items will be displayed on the invoice. Each line item has to have a different rank, starting from 1 and incrementing next values by 1
                 */
                section_rank?: number | null;
            }>;
            categories?: Array<{
                /**
                 * Category identifier (is unique)
                 */
                source_id: string;
                /**
                 * Category weight (0.8 means 80%)
                 */
                weight: string;
                /**
                 * Category name (is unique per group of categories)
                 */
                label: string;
                direction: 'cash_in' | 'cash_out' | null;
                /**
                 * Category created date
                 */
                created_at: string;
                /**
                 * Category created date
                 */
                updated_at: string;
            }>;
            /**
             * By adding this field you can automatically reconciliate the newly created (or imported) invoice with a transaction using transactions payment reference (Currently only stripe and invoice_number matching is supported)
             */
            transactions_reference?: {
                /**
                 * The banking provider for the transaction
                 */
                banking_provider: string | null;
                /**
                 * Name of the field that you want to match
                 */
                provider_field_name: string | null;
                /**
                 * Value that you want to match
                 */
                provider_field_value: string | null;
            } | null;
            payments?: Array<{
                /**
                 * Payment label
                 */
                label?: string;
                /**
                 * Payment created date
                 */
                created_at?: string;
                /**
                 * Payment amount
                 */
                currency_amount?: string;
            }> | null;
            matched_transactions?: Array<{
                /**
                 * Transaction Label
                 */
                label?: string | null;
                amount?: string | null;
                group_uuid?: string;
                date?: string | null;
                fee?: string | null;
                currency?: string;
            }> | null;
            pdf_invoice_free_text?: string;
            pdf_invoice_subject?: string;
            billing_subscription?: {
                id?: number;
            } | null;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/external/v1/customer_invoices/{id}',
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
     * Update an invoice
     * This endpoint update the transaction reference and categories linked to an invoice.
     * @param id
     * @param requestBody
     * @returns any Returns the updated invoice
     * @throws ApiError
     */
    public putExternalApiV1CustomerInvoices(
        id: string,
        requestBody?: {
            invoice: {
                transactions_reference?: {
                    banking_provider: string;
                    provider_field_name: string;
                    provider_field_value: string;
                };
                categories?: Array<{
                    /**
                     * Category identifier (is unique)
                     */
                    source_id: string;
                    /**
                     * Share assigned to category (45 as example for 45% of total amount)
                     */
                    weight?: number;
                    /**
                     * Value assigned to category (25 as example for €25)
                     */
                    amount?: number;
                }>;
                line_items?: Array<({
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
        invoice: {
            /**
             * Invoice identifier
             */
            id?: string;
            label?: string | null;
            invoice_number?: string | null;
            /**
             * Two invoices having the same quote_group_uuid are linked together
             */
            quote_group_uuid?: string;
            /**
             * Invoice draft status (set to True if the invoice is a draft)
             */
            is_draft?: boolean;
            /**
             * Invoice estimate status (set to True if the document is an estimate, False if it's an invoice)
             */
            is_estimate?: boolean;
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
            exchange_rate?: number;
            /**
             * Invoice issue date (ISO 8601)
             */
            date?: string | null;
            /**
             * Invoice payment deadline (ISO 8601)
             */
            deadline?: string | null;
            /**
             * Invoice taxable amount (in invoice currency)
             */
            currency_tax?: string;
            /**
             * Language of the invoice. The locale region is separated by an underscore like in "fr_FR".
             */
            language?: 'fr_FR' | 'en_GB';
            /**
             * Invoice paid status (set to True if the invoice is paid)
             */
            paid?: boolean;
            /**
             * Invoice payment date
             */
            fully_paid_at?: string | null;
            /**
             * Invoice status
             */
            status?: string | null;
            /**
             * Invoice discount (which is a percentage if the discount_type is "relative", or an amount if the discount_type is "absolute")
             */
            discount?: string;
            /**
             * Invoice discount Type (relative if it is a percentage of the total or absolute if it is an amount)
             */
            discount_type?: string;
            /**
             * Public url of the invoice
             */
            public_url?: string;
            /**
             * If there's a file attached to the invoice, this is the link of the file
             */
            file_url?: string | null;
            /**
             * Name of the file attached to the invoice
             */
            filename?: any;
            /**
             * The remaining amount to pay for the invoice to be considered paid
             */
            remaining_amount?: string;
            /**
             * Where the invoice is coming from, here are the different values:
             * - quotes: Created directly from the editor
             * - stripe: Imported from Stripe
             * - other: Other cases
             *
             */
            source?: string;
            /**
             * Additional details
             */
            special_mention?: string | null;
            /**
             * The last time the invoice has been updated
             */
            updated_at?: string;
            imputation_dates: {
                /**
                 * Start date of the imputation period (ISO 8601)
                 */
                start_date: string;
                /**
                 * End date of the imputation period (ISO 8601)
                 */
                end_date: string;
            } | null;
            customer?: ({
                /**
                 * Company name
                 */
                name: string;
                /**
                 * Type of the customer. Must be company
                 */
                customer_type: 'company';
                /**
                 * Customer registration number (SIREN)
                 */
                reg_no?: string;
                billing_address: {
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
                delivery_address: {
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
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            } | {
                /**
                 * Type of the customer. Must be individual
                 */
                customer_type: 'individual';
                /**
                 * Customer full name
                 */
                name: string;
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
                gender: 'mister' | 'madam';
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
                /**
                 * You can use your own id when creating the customer. If not provided, Pennylane will pick one for you. Id must be unique
                 */
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            });
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
                 * Line item discount Type (relative if it is a percentage of the total or absolute if it is an amount)
                 */
                discount_type?: string;
            }>;
            categories?: Array<{
                /**
                 * Category identifier (is unique)
                 */
                source_id: string;
                /**
                 * Category weight (0.8 means 80%)
                 */
                weight: string;
                /**
                 * Category name (is unique per group of categories)
                 */
                label: string;
                direction: 'cash_in' | 'cash_out' | null;
                /**
                 * Category created date
                 */
                created_at: string;
                /**
                 * Category created date
                 */
                updated_at: string;
            }>;
            /**
             * By adding this field you can automatically reconciliate the newly created (or imported) invoice with a transaction using transactions payment reference (Currently only stripe and invoice_number matching is supported)
             */
            transactions_reference?: {
                /**
                 * The banking provider for the transaction
                 */
                banking_provider: string | null;
                /**
                 * Name of the field that you want to match
                 */
                provider_field_name: string | null;
                /**
                 * Value that you want to match
                 */
                provider_field_value: string | null;
            } | null;
            payments?: Array<{
                /**
                 * Payment label
                 */
                label?: string;
                /**
                 * Payment created date
                 */
                created_at?: string;
                /**
                 * Payment amount
                 */
                currency_amount?: string;
            }> | null;
            matched_transactions?: Array<{
                /**
                 * Transaction Label
                 */
                label?: string | null;
                amount?: string | null;
                group_uuid?: string;
                date?: string | null;
                fee?: string | null;
                currency?: string;
            }> | null;
            pdf_invoice_free_text?: string;
            pdf_invoice_subject?: string;
            billing_subscription?: {
                id?: number;
            } | null;
        };
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/external/v1/customer_invoices/{id}',
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
    /**
     * Update Invoice Lines
     * Update (create, update and delete) invoice lines for a given invoice.
     * @param id
     * @param requestBody
     * @returns any Returns the updated invoice
     * @throws ApiError
     */
    public putExternalApiV1CustomerInvoicesUpdateInvoiceLines(
        id: string,
        requestBody?: {
            invoice_lines?: {
                create?: Array<({
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
                     * Line item currency amount, including taxes (in invoice currency).
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
                    /**
                     * Line item discount (in percent)
                     */
                    discount?: number;
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
                     * Has to correspond to the rank number of a line items section in which the line item should be
                     */
                    section_rank?: number;
                    /**
                     * Line item currency amount, excluding taxes (in invoice currency).
                     */
                    currency_amount_before_tax: number;
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
                        /**
                         * Product price including taxes
                         */
                        price?: number;
                        /**
                         * Product VAT rate. A 20% VAT in France is FR_200.
                         */
                        vat_rate?: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
                        /**
                         * Product unit
                         */
                        unit?: string;
                    };
                })>;
                /**
                 * It is not yet possible to update the product of an invoice line. In order to update the product, you must delete the line and recreate it.
                 */
                update?: Array<({
                    /**
                     * ID of the entry line to delete
                     */
                    id: number;
                    /**
                     * Line item label
                     */
                    label?: string;
                    /**
                     * Line item quantity (number of items)
                     */
                    quantity?: number;
                    /**
                     * Has to correspond to the rank number of a line items section in which the line item should be
                     */
                    section_rank?: number;
                    /**
                     * Line item currency amount, including taxes (in invoice currency).
                     */
                    currency_amount?: number;
                    /**
                     * The accounting plan item for the invoice line
                     */
                    plan_item_number?: string;
                    /**
                     * Line item unit (type of unit)
                     */
                    unit?: string;
                    /**
                     * Product VAT rate. A 20% VAT in France is FR_200.
                     */
                    vat_rate?: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
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
                     * ID of the entry line to delete
                     */
                    id: number;
                    /**
                     * Line item label
                     */
                    label?: string;
                    /**
                     * Line item quantity (number of items)
                     */
                    quantity?: number;
                    /**
                     * Has to correspond to the rank number of a line items section in which the line item should be
                     */
                    section_rank?: number;
                    /**
                     * Line item currency amount, excluding taxes (in invoice currency).
                     */
                    currency_amount_before_tax?: number;
                    /**
                     * The accounting plan item for the invoice line
                     */
                    plan_item_number?: string;
                    /**
                     * Line item unit (type of unit)
                     */
                    unit?: string;
                    /**
                     * Product VAT rate. A 20% VAT in France is FR_200.
                     */
                    vat_rate?: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
                    /**
                     * The description of the invoice line
                     */
                    description?: string | null;
                    /**
                     * Line item discount (in percent)
                     */
                    discount?: number;
                })>;
                delete?: Array<{
                    /**
                     * ID of the entry line to delete
                     */
                    id: number;
                }>;
            };
        },
    ): CancelablePromise<{
        invoice?: {
            /**
             * Invoice identifier
             */
            id?: string;
            label?: string | null;
            invoice_number?: string | null;
            /**
             * Two invoices having the same quote_group_uuid are linked together
             */
            quote_group_uuid?: string;
            /**
             * Invoice draft status (set to True if the invoice is a draft)
             */
            is_draft?: boolean;
            /**
             * Invoice estimate status (set to True if the document is an estimate, False if it's an invoice)
             */
            is_estimate?: boolean;
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
            exchange_rate?: number;
            /**
             * Invoice issue date (ISO 8601)
             */
            date?: string | null;
            /**
             * Invoice payment deadline (ISO 8601)
             */
            deadline?: string | null;
            /**
             * Invoice taxable amount (in invoice currency)
             */
            currency_tax?: string;
            /**
             * Language of the invoice. The locale region is separated by an underscore like in "fr_FR".
             */
            language?: 'fr_FR' | 'en_GB';
            /**
             * Invoice paid status (set to True if the invoice is paid)
             */
            paid?: boolean;
            /**
             * Invoice payment date
             */
            fully_paid_at?: string | null;
            /**
             * Invoice status
             */
            status?: string | null;
            /**
             * Invoice discount (which is a percentage if the discount_type is "relative", or an amount if the discount_type is "absolute")
             */
            discount?: string;
            /**
             * Invoice discount Type (relative if it is a percentage of the total or absolute if it is an amount)
             */
            discount_type?: string;
            /**
             * Public url of the invoice
             */
            public_url?: string;
            /**
             * If there's a file attached to the invoice, this is the link of the file
             */
            file_url?: string | null;
            /**
             * Name of the file attached to the invoice
             */
            filename?: any;
            /**
             * The remaining amount to pay for the invoice to be considered paid
             */
            remaining_amount?: string;
            /**
             * Where the invoice is coming from, here are the different values:
             * - quotes: Created directly from the editor
             * - stripe: Imported from Stripe
             * - other: Other cases
             *
             */
            source?: string;
            /**
             * Additional details
             */
            special_mention?: string | null;
            /**
             * The last time the invoice has been updated
             */
            updated_at?: string;
            imputation_dates: {
                /**
                 * Start date of the imputation period (ISO 8601)
                 */
                start_date: string;
                /**
                 * End date of the imputation period (ISO 8601)
                 */
                end_date: string;
            } | null;
            customer?: ({
                /**
                 * Company name
                 */
                name: string;
                /**
                 * Type of the customer. Must be company
                 */
                customer_type: 'company';
                /**
                 * Customer registration number (SIREN)
                 */
                reg_no?: string;
                billing_address: {
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
                delivery_address: {
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
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            } | {
                /**
                 * Type of the customer. Must be individual
                 */
                customer_type: 'individual';
                /**
                 * Customer full name
                 */
                name: string;
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
                gender: 'mister' | 'madam';
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
                /**
                 * You can use your own id when creating the customer. If not provided, Pennylane will pick one for you. Id must be unique
                 */
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            });
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
                vat_rate?: 'FR_09' | 'FR_21' | 'FR_55' | 'FR_85' | 'FR_100' | 'FR_130' | 'FR_200' | 'AT_100' | 'AT_130' | 'AT_200' | 'BE_60' | 'BE_120' | 'BE_210' | 'BG_90' | 'BG_200' | 'CH_25' | 'CH_37' | 'CH_77' | 'CY_50' | 'CY_90' | 'CY_190' | 'CZ_100' | 'CZ_150' | 'CZ_210' | 'DE_70' | 'DE_190' | 'DK_250' | 'EE_90' | 'EE_200' | 'ES_40' | 'ES_100' | 'ES_210' | 'FI_100' | 'FI_140' | 'FI_240' | 'GB_50' | 'GB_200' | 'GR_60' | 'GR_130' | 'GR_240' | 'HR_50' | 'HR_130' | 'HR_250' | 'HU_50' | 'HU_180' | 'HU_270' | 'IE_48' | 'IE_90' | 'IE_135' | 'IE_210' | 'IE_230' | 'IT_40' | 'IT_50' | 'IT_100' | 'IT_220' | 'LT_50' | 'LT_90' | 'LT_210' | 'LU_30' | 'LU_70' | 'LU_80' | 'LU_130' | 'LU_140' | 'LU_160' | 'LU_170' | 'LV_50' | 'LV_120' | 'LV_210' | 'MC_09' | 'MC_21' | 'MC_55' | 'MC_85' | 'MC_100' | 'MC_200' | 'MT_50' | 'MT_70' | 'MT_180' | 'NL_90' | 'NL_210' | 'PL_50' | 'PL_80' | 'PL_230' | 'PT_60' | 'PT_130' | 'PT_230' | 'RO_50' | 'RO_90' | 'RO_190' | 'SE_60' | 'SE_120' | 'SE_250' | 'SI_50' | 'SI_95' | 'SI_220' | 'SK_100' | 'SK_200' | 'exempt' | 'crossborder' | 'extracom' | 'FR_100_construction' | 'FR_200_construction';
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
                 * Line item discount Type (relative if it is a percentage of the total or absolute if it is an amount)
                 */
                discount_type?: string;
                /**
                 * Defines the order in which line items will be displayed on the invoice. Each line item has to have a different rank, starting from 1 and incrementing next values by 1
                 */
                section_rank?: number | null;
            }>;
            categories?: Array<{
                /**
                 * Category identifier (is unique)
                 */
                source_id: string;
                /**
                 * Category weight (0.8 means 80%)
                 */
                weight: string;
                /**
                 * Category name (is unique per group of categories)
                 */
                label: string;
                direction: 'cash_in' | 'cash_out' | null;
                /**
                 * Category created date
                 */
                created_at: string;
                /**
                 * Category created date
                 */
                updated_at: string;
            }>;
            /**
             * By adding this field you can automatically reconciliate the newly created (or imported) invoice with a transaction using transactions payment reference (Currently only stripe and invoice_number matching is supported)
             */
            transactions_reference?: {
                /**
                 * The banking provider for the transaction
                 */
                banking_provider: string | null;
                /**
                 * Name of the field that you want to match
                 */
                provider_field_name: string | null;
                /**
                 * Value that you want to match
                 */
                provider_field_value: string | null;
            } | null;
            payments?: Array<{
                /**
                 * Payment label
                 */
                label?: string;
                /**
                 * Payment created date
                 */
                created_at?: string;
                /**
                 * Payment amount
                 */
                currency_amount?: string;
            }> | null;
            matched_transactions?: Array<{
                /**
                 * Transaction Label
                 */
                label?: string | null;
                amount?: string | null;
                group_uuid?: string;
                date?: string | null;
                fee?: string | null;
                currency?: string;
            }> | null;
            pdf_invoice_free_text?: string;
            pdf_invoice_subject?: string;
            billing_subscription?: {
                id?: number;
            } | null;
        };
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/external/v1/customer_invoices/{id}/update_invoice_lines',
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
    /**
     * Links an invoice with a credit note
     * This endpoint allows you to link together a credit note with an invoice, only two items supported.
     * @param requestBody
     * @returns any Invoices linked successfully
     * @throws ApiError
     */
    public customerInvoicesLinks(
        requestBody?: {
            /**
             * A list of the quote_group_uuids to link together. This endpoint takes the two invoices with these quote_group_uuids and assigns a new quote_group_uuids, this makes them linked together.
             */
            quote_group_uuids: Array<string>;
        },
    ): CancelablePromise<{
        /**
         * The new quote_group_uuids assigned to the credit note and the invoice
         */
        quote_group_uuid?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/external/v1/customer_invoices/links',
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
     * Send an invoice or an estimate by email
     * This endpoint allows you to send a finalized invoice or an estimate by email to your customer. This requires that the PDF file for that document has been generated (this process can take a few minutes), so if you just created the invoice / estimate in our system, we may return a 409 error. You should retry the request in a few minutes - if you receive a 204 response, that means that the email is on its way. For more information about email sending, please read [this guide](https://pennylane.readme.io/reference/emails).
     * @param id Existing invoice or estimate identifier (id). This id is returned in the response body of the invoice creation / invoice import / estimate creation API calls.
     * @returns void
     * @throws ApiError
     */
    public customerInvoicesSendByEmail(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/external/v1/customer_invoices/{id}/send_by_email',
            path: {
                'id': id,
            },
            errors: {
                401: `Access token is missing or invalid`,
                403: `Forbidden`,
                404: `Not found`,
                409: `Conflict - PDF has not been generated yet. Please retry in a few minutes.`,
                422: `Unprocessable Entity`,
            },
        });
    }
    /**
     * Mark the invoice as paid. No accounting entries created.
     * This endpoint allows you to mark an invoice as paid
     * @param id Existing invoice or estimate identifier (id). This id is returned in the response body of the invoice creation / invoice import / estimate creation API calls.
     * @returns any Returns the updated invoice
     * @throws ApiError
     */
    public customerInvoicesMarkAsPaid(
        id: string,
    ): CancelablePromise<{
        invoice: {
            /**
             * Invoice identifier
             */
            id?: string;
            label?: string | null;
            invoice_number?: string | null;
            /**
             * Two invoices having the same quote_group_uuid are linked together
             */
            quote_group_uuid?: string;
            /**
             * Invoice draft status (set to True if the invoice is a draft)
             */
            is_draft?: boolean;
            /**
             * Invoice estimate status (set to True if the document is an estimate, False if it's an invoice)
             */
            is_estimate?: boolean;
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
            exchange_rate?: number;
            /**
             * Invoice issue date (ISO 8601)
             */
            date?: string | null;
            /**
             * Invoice payment deadline (ISO 8601)
             */
            deadline?: string | null;
            /**
             * Invoice taxable amount (in invoice currency)
             */
            currency_tax?: string;
            /**
             * Language of the invoice. The locale region is separated by an underscore like in "fr_FR".
             */
            language?: 'fr_FR' | 'en_GB';
            /**
             * Invoice paid status (set to True if the invoice is paid)
             */
            paid?: boolean;
            /**
             * Invoice payment date
             */
            fully_paid_at?: string | null;
            /**
             * Invoice status
             */
            status?: string | null;
            /**
             * Invoice discount (which is a percentage if the discount_type is "relative", or an amount if the discount_type is "absolute")
             */
            discount?: string;
            /**
             * Invoice discount Type (relative if it is a percentage of the total or absolute if it is an amount)
             */
            discount_type?: string;
            /**
             * Public url of the invoice
             */
            public_url?: string;
            /**
             * If there's a file attached to the invoice, this is the link of the file
             */
            file_url?: string | null;
            /**
             * Name of the file attached to the invoice
             */
            filename?: any;
            /**
             * The remaining amount to pay for the invoice to be considered paid
             */
            remaining_amount?: string;
            /**
             * Where the invoice is coming from, here are the different values:
             * - quotes: Created directly from the editor
             * - stripe: Imported from Stripe
             * - other: Other cases
             *
             */
            source?: string;
            /**
             * Additional details
             */
            special_mention?: string | null;
            /**
             * The last time the invoice has been updated
             */
            updated_at?: string;
            customer?: ({
                /**
                 * Company name
                 */
                name: string;
                /**
                 * Type of the customer. Must be company
                 */
                customer_type: 'company';
                /**
                 * Customer registration number (SIREN)
                 */
                reg_no?: string;
                billing_address: {
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
                delivery_address: {
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
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            } | {
                /**
                 * Type of the customer. Must be individual
                 */
                customer_type: 'individual';
                /**
                 * Customer full name
                 */
                name: string;
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
                gender: 'mister' | 'madam';
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
                /**
                 * You can use your own id when creating the customer. If not provided, Pennylane will pick one for you. Id must be unique
                 */
                source_id: string;
                emails?: Array<string>;
                /**
                 * The billing IBAN of the customer. This is the iban on which you wish to receive payment from this customer.
                 */
                billing_iban?: string | null;
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
                notes?: string | null;
                plan_item?: {
                    label?: string;
                    enabled?: boolean;
                    vat_rate?: string;
                    country_alpha2?: string;
                    description?: string;
                } | null;
            });
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
                 * Line item discount Type (relative if it is a percentage of the total or absolute if it is an amount)
                 */
                discount_type?: string;
            }>;
            categories?: Array<{
                /**
                 * Category identifier (is unique)
                 */
                source_id: string;
                /**
                 * Category weight (0.8 means 80%)
                 */
                weight: string;
                /**
                 * Category name (is unique per group of categories)
                 */
                label: string;
                direction: 'cash_in' | 'cash_out' | null;
                /**
                 * Category created date
                 */
                created_at: string;
                /**
                 * Category created date
                 */
                updated_at: string;
            }>;
            /**
             * By adding this field you can automatically reconciliate the newly created (or imported) invoice with a transaction using transactions payment reference (Currently only stripe and invoice_number matching is supported)
             */
            transactions_reference?: {
                /**
                 * The banking provider for the transaction
                 */
                banking_provider: string | null;
                /**
                 * Name of the field that you want to match
                 */
                provider_field_name: string | null;
                /**
                 * Value that you want to match
                 */
                provider_field_value: string | null;
            } | null;
            payments?: Array<{
                /**
                 * Payment label
                 */
                label?: string;
                /**
                 * Payment created date
                 */
                created_at?: string;
                /**
                 * Payment amount
                 */
                currency_amount?: string;
            }> | null;
            matched_transactions?: Array<{
                /**
                 * Transaction Label
                 */
                label?: string | null;
                amount?: string | null;
                group_uuid?: string;
                date?: string | null;
                fee?: string | null;
                currency?: string;
            }> | null;
            pdf_invoice_free_text?: string;
            pdf_invoice_subject?: string;
            billing_subscription?: {
                id?: number;
            } | null;
        };
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/external/v1/customer_invoices/{id}/mark_as_paid',
            path: {
                'id': id,
            },
            errors: {
                401: `Access token is missing or invalid`,
                403: `Forbidden`,
                404: `Not found`,
                422: `Unprocessable Entity`,
            },
        });
    }
    /**
     * Finalize an invoice
     * This endpoint allows you to finalize an invoice.
     * @param id Existing invoice identifier (id). This id is returned in the response body of the invoice creation / invoice import API calls.
     * @returns void
     * @throws ApiError
     */
    public customerInvoicesFinalize(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/external/v1/customer_invoices/{id}/finalize',
            path: {
                'id': id,
            },
            errors: {
                401: `Access token is missing or invalid`,
                403: `Forbidden`,
                404: `Not found`,
                422: `Unprocessable Entity`,
            },
        });
    }
    /**
     * Update plan items numbers
     * Update the plan items numbers associated to a customer invoice
     * @param customerInvoiceId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public planItemBatchUpdatingsPost(
        customerInvoiceId: string,
        requestBody?: {
            invoice: {
                line_items: Array<{
                    /**
                     * The invoice line identifier
                     */
                    id: number;
                    /**
                     * The accounting plan item for the invoice line
                     */
                    plan_item_number: string;
                }>;
            };
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/external/v1/customer_invoices/{customer_invoice_id}/plan_item_batch_updatings',
            path: {
                'customer_invoice_id': customerInvoiceId,
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
