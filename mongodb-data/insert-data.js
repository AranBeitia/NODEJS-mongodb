// insert authors
db.authors.insertMany([
	{
		name: 'Penny',
		lastName: 'Rimbaud',
		dateBirt: '8-6-1943',
		dateDeath: '',
		country: 'Great Britain',
	},
	{
		name: 'Umberto',
		lastName: 'Eco',
		datBirt: '5-1-1932',
		dateDeath: '19-2-2016',
		country: 'Italy',
	},
	{
		name: 'Hermann',
		lastName: 'Hesse',
		dateBirth: '2-7-1877',
		dateDeath: '9-8-1962',
		country: 'Germany',
	},
])

// insert books
db.books.insertMany([
	{
		title: 'El lobo estepario',
		releaseYear: '1927',
		category: 'bio-fantasy',
		authors: [
			{
				id: '61b9db502140b006d712c6c7',
				name: 'Herman',
				lastName: 'Hesse',
			},
		],
	},
	{
		title: 'Crass: tienen una bomba',
		releaseYear: '2008',
		category: 'arte-punk, politica',
		authors: [
			{
				id: '61b9da362140b006d712c6c5',
				name: 'Penny',
				lastName: 'Rimbaud',
			},
		],
	},
])
