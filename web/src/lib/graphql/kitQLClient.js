import { KitQLClient } from '@kitql/client';

export const kitQLClient = new KitQLClient({
	url: `https://api.studio.thegraph.com/query/30342/winter/v0.0.1`, // Your GraphQL server URL
	headersContentType: 'application/json',
	logType: ['client', 'server', 'operationAndvariables']
});
