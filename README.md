# Pennylane OpenApi clients

## Global configuration

```
export PENNYLANE_API_KEY=YOUR_PENNYLANE_API_KEY
```

## Typescript [![NPM](https://img.shields.io/npm/v/pennylane-openapi-client)](https://www.npmjs.com/package/pennylane-openapi-client)

### Install

```
npm i pennylane-openapi-client
yarn add pennylane-openapi-client
pnpm install pennylane-openapi-client
```

### Setup

```
pnpm install
pnpm build
```

### Usage

```
pnpm start
```

## Developers

### Regenerate client

Download the customer invoicing schema:

```
wget https://pennylane.readme.io/openapi/6346dc5b089f12000f474e75 -O schema.json
```

Other schema can be found at https://pennylane.readme.io/openapi.

#### Typescript

```
pnpx openapi-typescript-codegen --input schema.json --output client/typescript --name PennylaneAPIClient
```
