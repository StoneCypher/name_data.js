
/*
converted from `Nevermind` 's C# code, [here](http://programmers.stackexchange.com/a/150642/79690).

surprisingly even generation.

```javascript
function seq(upto) { return new Array(upto).fill(true).map( (_,i) => i); }
function histo(e) { return e.sort().reduce( (old, cur) => ((old[cur] = (old[cur] || 0) + 1), old), {}); }

> histo(seq(7000000).map(_ => random_from({a:4,b:2,c:1})));
Object {a: 3999219, b: 1999596, c: 1001185}
```
*/

function random_from(enumerable) {

    var totalWeight = 0,
        selected;


    Object.keys(enumerable).map( (k,i) => {

        var weight = enumerable[k],
            rnd    = Math.random() * (totalWeight + weight);

        if (rnd >= totalWeight) {
            selected = k;
        }

        totalWeight += weight; // increase weight sum

    });


    return selected; // when iterations end, selected is some element of sequence.

}











export {

    random_from

/*
	mens_first_name_data,
	random_mens_first_name,

    womens_first_name_data,
    random_womens_first_name,

    random_first_name,

	last_name_data,
	random_last_name,

	random_name
*/
};
