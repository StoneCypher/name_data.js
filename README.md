# name_data.js
Name data in JSON for Javascript

Selection and generation of names, for fake name data.

Parsed JSON of [male](http://names.mongabay.com/male_names_alpha.htm) and
[female](http://names.mongabay.com/female_names_alpha.htm) first name data, as well as gender neutral
[last name](http://names.mongabay.com/most_common_surnames.htm) data, ostensibly taken from the 1990 US census.
Contains 1219 male names, 4275 female names, and 18,840 last names, as well as estimated (rough) commonality.

## Usage
Pretty straightforward stuff, rly.

```javascript
> const nd = require('name_data');
undefined

> nd.mens_first_name_data;
{ aaron: 350151,
  abdul: 10213,
...
  zackary: 5836,
  zane: 10213 }

> Object.keys(nd.mens_first_name_data).length;
1219

> nd.random_womens_first_name();
'helen'

> nd.random_mens_first_name();
'john'

> [1,1,1,1,1,1].map(_ => nd.random_first_name() );
[ 'seth', 'lauren', 'jill', 'kathy', 'marshall', 'loretta' ]

> nd.random_last_name();
'lopez'

> nd.random_name();
'dawn knight'

> [1,1,1,1,1,1].map(_ => nd.random_name() );
[ 'maria burns',
  'jennette howell',
  'vanessa carnes',
  'richard robertson',
  'amanda reiley',
  'jason carroll' ]
```





Polemic :neckbeard:
-------------------

`name_data.js` is MIT licensed, because viral licenses and newspeak language
modification are evil.  Free is ***only*** free when it's free for everyone.
