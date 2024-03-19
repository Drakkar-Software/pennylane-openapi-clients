import { PennylaneAPIClient } from "../../client/typescript/index";

async function fetchInvoices() {
  const client = new PennylaneAPIClient({
    HEADERS: { "Authorization": `Bearer ${process.env.PENNYLANE_API_KEY}` } // https://pennylane.readme.io/reference/company-api-key
  });

  const invoices = await client.customerInvoices.customerInvoicesGet();
  console.log(invoices);
}

fetchInvoices();
