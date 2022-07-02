# thegraphtest


1. Создай thegraph который будет собирать ивенты о транзакциях в Wintermute pool и отображать
2. Отобрази список транзакций этого пула используя SeveltKit, выше созданный thegraph с хостингом на Vercel
Создай данное чудо в своей ребе в гитхабе


(working for windows)
```
npm install -g @graphprotocol/graph-cli
``` 

```
graph init --from-example drug_z/winter

```

```
cd winter
graph auth --product hosted-service <ACCESS_TOKEN>
graph deploy --product hosted-service drug_z/winter
graph auth --studio d2fa7bffe412c6092b927fb9b8987a49
graph codegen && graph build
graph deploy --studio winter
```

subgraph endpoint: https://api.studio.thegraph.com/query/30342/winter/v0.0.1 


```
cd web
npm init svelte@next
yarn add --dev @graphprotocol/graph-ts
```

Wintermute pool: https://etherscan.io/address/0xCb288b6d30738db7E3998159d192615769794B5b#events