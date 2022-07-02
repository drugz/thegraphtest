<script context="module" lang="ts">
	// import { dataSource } from '@graphprotocol/graph-ts';
	import { KQL_Gravatar } from '$lib/graphql/_kitql/graphqlStores';
	export async function load({ fetch }) {
		await KQL_Gravatar.queryLoad({ fetch }); // Filling the store

		console.log(fetch);
		return {};
	}
	// dataSource.network();
	// dataSource.address();

	let contract = '0x0000006daea1723962647b7e189d311d757Fb793';
</script>

<script lang="ts">
	console.log($KQL_Gravatar);
</script>

<div
	class="bg-base-100 rounded-box col-span-3 row-span-3 mx-2 flex flex-shrink-0 flex-col justify-center gap-4 p-4 shadow-xl"
>
	<h1>Welcome to Wintermute pool</h1>
	<h2>Test with Gravatar over ETH</h2>
	{#each $KQL_Gravatar.data.gravatars as item}
		<div class="card card-side bg-base-100  shadow-xl bg-indigo-900">
			<figure>
				<div class="w-24 h-24 avatar m-4">
					<div class="w-24 h-24 rounded-xl">
						<img src={item.imageUrl} />
					</div>
				</div>
			</figure>
			<div class="card-body">
				<h3 class="card-title">
					{item.displayName}
				</h3>
				<p>owner: {item.owner}</p>
			</div>
		</div>
	{/each}
</div>
