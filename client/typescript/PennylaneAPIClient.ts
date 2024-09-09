/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { BillingSubscriptionsService } from './services/BillingSubscriptionsService';
import { CustomerInvoicesService } from './services/CustomerInvoicesService';
import { EstimatesService } from './services/EstimatesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class PennylaneAPIClient {
    public readonly billingSubscriptions: BillingSubscriptionsService;
    public readonly customerInvoices: CustomerInvoicesService;
    public readonly estimates: EstimatesService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://app.pennylane.com',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.billingSubscriptions = new BillingSubscriptionsService(this.request);
        this.customerInvoices = new CustomerInvoicesService(this.request);
        this.estimates = new EstimatesService(this.request);
    }
}

