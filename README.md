# kabali.js
## Everything on objects

## API Reference
### `.kabali([data])`
- Initializes the data.

Example:

```
kabali([{"vinoth":"Thalaivar"},{"prashanth": "Kamal"}]);
```

### `.getPrototypeChain()`
Finds the prototype chain.

Example:

```
// Prototype Inheritance

function Thalaivar() {}

function Pandaram() {
  Thalaivar.call(this)
}

Pandaram.prototype = Object.create(Thalaivar.prototype)

kabali(new Thalaivar()).getPrototypeChain().result();
// => ['Thalaivar', 'Object']

kabali(new Pandaram()).getPrototypeChain().result();
// => ['Pandaram', 'Thalaivar', 'Object']

kabali(0).getPrototypeChain().result();
// => [ 'Number', 'Object' ]

kabali('0').getPrototypeChain().result();
// => [ 'String', 'Object' ]
```

### `.after([int|string|object])`
Returns the remaining items after the input item in an array.

Example:

```
kabali([6,7,1,3,6,2]).after(3).result();
// => [6,2];

kabali([6,7,1,3,6,2]).after(2).result();
// => [];

kabali([6,7,1,3,6,2]).after(6).result();
// => [7,1,3,6,2];
```

### `.findValue([int|string])`
returns you the values in the dataset by equalling with passed value

Example:

```
var output = kabali([6,7,1,3,6,2]).findValue(2).result();
console.log(output);
//returns [2];
```

### `.findMultipleValues(string,string,string)[int|string]`
returns you the values in the dataset by equalling with passed values

Example:

```
var output = kabali([2,1,3,6,2,9]).findByValues(9,1,2).result();
console.log(output);
//returns [2,2,1,9];
```

### `.findKey([string])`
returns you the key by travesing the dataset

Example:

```
var data = [{"vinoth":"hero"},{"vijay": "villain"}];

var output = kabali(data).findKey("vinoth").result();
console.log(output);
//returns [
  { "vinoth": "hero" }
];
```

### `.findMultipleKeys(string, string, string)[string]`
returns you the keys by travesing the dataset

Example:

```
var data = [{"vinoth":"hero"},{"vijay": "villain"}];

var output = kabali(data).findKey("vinoth").result();
console.log(output);
//returns [
  { "vinoth": "hero" },
  { "vijay": "villain" }
];
```
