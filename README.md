AggregationPipeline
===================

Zapytanie znajdujące ludzi powyżej 24-tego roku życia
```js
houx.aggregate
	(
 { $group: {_id: "$first_name", wiek: {$max: "$born_year"}} },
 { $match: {wiek: {$gte: 1990}} },
 {$limit: 10} 
	)

	Wynik: 
{ "_id" : "Jack", "wiek" : 1995 }
{ "_id" : "Jeffrey", "wiek" : 1990 }
{ "_id" : "Mary", "wiek" : 1998 }
{ "_id" : "John", "wiek" : 1993 }
{ "_id" : "Lillian", "wiek" : 1993 }
{ "_id" : "Ruth", "wiek" : 1997 }
{ "_id" : "Carolyn", "wiek" : 1995 }
{ "_id" : "Randy", "wiek" : 1991 }
{ "_id" : "Christine", "wiek" : 1997 }
{ "_id" : "Douglas", "wiek" : 1997 }
```
Zapytanie znajdujące 5 najlepiej zarabiających osób
```js

	houx.aggregate
	(
	{$group: {_id: "$first_name", cash: {$max: "$payment"}} }, 
	{$limit: 5}
	)

Wynik:

{ "_id" : "Frances", "hajs" : "$27693.63" }
{ "_id" : "Judy", "hajs" : "$39054.60" }
{ "_id" : "Jack", "hajs" : "$47890.61" }
{ "_id" : "Joan", "hajs" : "$41947.85" }
{ "_id" : "Jeffrey", "hajs" : "$41116.59" }
```
Zapytanie sortujące nazwiska alfabetycznie
```js
 houx.aggregate
	(
   
     { $project :  { surname : "$last_name" } },
     { $group : { _id : {surname:"$surname"}  } },
     { $sort : { "_id.surname" : 1 } },
     { $limit : 50}
   
 	)
Wynik:
	{ "_id" : { "surname" : "Adams" } }
{ "_id" : { "surname" : "Alexander" } }
{ "_id" : { "surname" : "Allen" } }
{ "_id" : { "surname" : "Alvarez" } }
{ "_id" : { "surname" : "Anderson" } }
{ "_id" : { "surname" : "Andrews" } }
{ "_id" : { "surname" : "Armstrong" } }
{ "_id" : { "surname" : "Arnold" } }
{ "_id" : { "surname" : "Austin" } }
{ "_id" : { "surname" : "Bailey" } }
{ "_id" : { "surname" : "Baker" } }
{ "_id" : { "surname" : "Banks" } }
{ "_id" : { "surname" : "Barnes" } }

```
Zapytanie znajdujące polaków
```js
houx.aggregate
	(
	 [ { $match : { country : "Poland" } }]
	)

Wynik
{ "_id" : ObjectId("54aaa9a1ceb45d4a0d6fd187"), "id" : 17, "first_name" : "Gregory", "last_name" : "Garza", "payment" : "$29794.89", "country" : "Poland", "born_year" : 1978 }
{ "_id" : ObjectId("54aaa9a1ceb45d4a0d6fd1b0"), "id" : 58, "first_name" : "Gloria", "last_name" : "Reynolds", "payment" : "$2381.11", "country" : "Poland", "born_year" : 1955 }
{ "_id" : ObjectId("54aaa9a1ceb45d4a0d6fd1ca"), "id" : 84, "first_name" : "Janet", "last_name" : "Dunn", "payment" : "$24643.33", "country" : "Poland", "born_year" : 1989 }
{ "_id" : ObjectId("54aaa9a1ceb45d4a0d6fd1cd"), "id" : 87, "first_name" : "Emily", "last_name" : "Sullivan", "payment" : "$23461.55", "country" : "Poland", "born_year" : 1949 }
{ "_id" : ObjectId("54aaa9a1ceb45d4a0d6fd1fb"), "id" : 133, "first_name" : "Bonnie", "last_name" : "Russell", "payment" : "$11822.85", "country" : "Poland", "born_year" : 1998 }
{ "_id" : ObjectId("54aaa9a1ceb45d4a0d6fd219"), "id" : 163, "first_name" : "Virginia", "last_name" : "Hicks", "payment" : "$48041.92", "country" : "Poland", "born_year" : 1964 }
```
