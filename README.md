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

kabali(new Thalaivar()).getPrototypeChain.result();
// => [Thalaivar.prototype, Object.prototype]

kabali(new Pandaram()).getPrototypeChain.result();
// => [Pandaram.prototype, Thalaivar.prototype, Object.prototype]
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
