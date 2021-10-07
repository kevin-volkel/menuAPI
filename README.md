# menuAPI
## All Items
`GET   http://localhost:3000/`

## Search Specific Id
`GET  http://localhost:3000/api/id/:id`

## Query
`GET http://localhost:3000/api/query?...`

| **Parameter**   | **Description** | Type |
|:-------------------------|:---------------------|:-------------|
| category | Filter Based on: <ul> <li> breakfast </li><li> lunch  </li><li> shakes </li> </ul> | String |
| dir | Sorts thelist based on price: <ul> <li> asc (ascending) </li> <li> dec (descending) </li> </ul> | String |