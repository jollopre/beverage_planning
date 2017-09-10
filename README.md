# Beverage Planning

## Set up

This JavaScript prototype uses npm to handle dependencies needed to run the interface. Please, type:

```
	npm install
```

## Run

This interface runs on port 3000 (localhost). In order to see the functional prototype, please type:

```
	npm start
```

## Test

There is a set of unit tests, specifically to verify that correct actions are dispatched to the different reducers
that add/modify/delete data in the single store. Please, type:

```
	npm test
```

## API requirements

Currently the interface is fed with data from a seed file (e.g. src/utils/seed.js) but ideally the interface should talk to the following routes on a server:

| HTTP verb | Path | Used for |
| --------- | ---- | -------- |
| GET | /api/bars | gets a list of bar objects |
| GET | /api/products_prices/:bar_id | gets a list of product objects (e.g. id, name, image_url) together with their current_price for a given bar id |
| GET | /api/rounds/:id | gets a round object (e.g. id, bar_id, ordered_at) |
| GET | /api/rounds/?bar_id= | gets a list of round objects for today |
| GET | /api/ordered_beverages/:id | gets an orderedBeverage object (e.g. id, round_id, product_id, actual_price) |
| GET | /api/ordered_beverages/?round_id= | gets a list of orderedBeverage objects |
| POST | /api/rounds | creates a new round object (e.g. bar_id, ordered_at) and returns a location header where the resource is allocated (e.g. /api/rounds/:id) |
| POST | /api/ordered_beverage | creates a new orderedBeverage object (e.g. round_id, product_id, actual_price) and returns a location header where the resource is allocated (e.g. /api/ordered_beverages/:id) |
| PUT | /api/ordered_beverage/:id | modifies actual_price for a given orderedBeverage id (e.g. adding or removing a unit for a product) |
| DELETE | /api/ordered_beverage/:id | deletes a specific orderedBeverage |
