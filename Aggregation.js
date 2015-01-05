var houx = db.rec

houx.aggregate
	(
 { $group: {_id: "$first_name", wiek: {$max: "$born_year"}} },
 { $match: {wiek: {$gte: 1990}} },
 {$limit: 10} 
	)



houx.aggregate
	(
	{$group: {_id: "$first_name", cash: {$max: "$payment"}} }, 
	{$limit: 5}
	)



 houx.aggregate
	(
   
     { $project :  { surname : "$last_name" } },
     { $group : { _id : {surname:"$surname"}  } },
     { $sort : { "_id.surname" : 1 } },
     { $limit : 50}
   
 	)


houx.aggregate
	(
	 [ { $match : { country : "Poland" } }]
	)
