# pagination-js-component

[![Dependency Status](https://david-dm.org/plantain-00/pagination-js-component.svg)](https://david-dm.org/plantain-00/pagination-js-component)
[![devDependency Status](https://david-dm.org/plantain-00/pagination-js-component/dev-status.svg)](https://david-dm.org/plantain-00/pagination-js-component#info=devDependencies)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/pagination-js-component?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/pagination-js-component/branch/master)
![Github CI](https://github.com/plantain-00/pagination-js-component/workflows/Github%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/pagination-js-component.svg)](https://badge.fury.io/js/pagination-js-component)
[![Downloads](https://img.shields.io/npm/dm/pagination-js-component.svg)](https://www.npmjs.com/package/pagination-js-component)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fplantain-00%2Fpagination-js-component%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/pagination-js-component)

A vuejs and reactjs pagination component

## features

+ vuejs component
+ reactjs component
+ previous/next page
+ home/end page

## link css

```html
<link rel="stylesheet" href="./node_modules/pagination-js-component/dist/pagination.min.css" />
```

## vuejs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/pagination-vue-component?compression=gzip)](https://unpkg.com/pagination-vue-component)

`npm pagination-vue-component`

```ts
import { Pagination } from "pagination-vue-component";
app.component('pagination', Pagination)
```

or

```html
<script src="./node_modules/vue/dist/vue.min.js"></script>
<script src="./node_modules/pagination-vue-component/dist/pagination-vue-component.min.js"></script>
```

```html
<pagination :total="total"
    :current="current"
    :count="count"
    @jump="jump($event)"></pagination>
```

the online demo: <https://plantain-00.github.io/pagination-js-component/packages/vue/demo>

## reactjs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/pagination-react-component?compression=gzip)](https://unpkg.com/pagination-react-component)

`npm pagination-react-component`

```ts
import { Pagination } from "pagination-react-component";
```

or

```html
<script src="./node_modules/react/umd/react.production.min.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.production.min.js"></script>
<script src="./node_modules/pagination-react-component/dist/pagination-react-component.min.js"></script>
```

```html
<Pagination total={this.total}
    current={this.current}
    count={this.count}
    jump={page => this.jump(page)}></Pagination>
```

the online demo: <https://plantain-00.github.io/pagination-js-component/packages/react/demo>

## properties and events of the component

name | type | description
--- | --- | ---
total | number | total page count
current | number | current page
count | number | page count around current page, eg, if `current` is 5, `count` is 2, then `3 4 5 6 7` will be displayed
jump | (page: number) => void | triggered when click a page
mode | number? | mode

## change logs

```ts
// v4 vue 2
import 'pagination-vue-component'

// v5 vue 3
import { Pagination } from "pagination-vue-component"
app.component('pagination', Pagination)
```

```bash
# v3
npm i pagination-js-component

# v4
npm i pagination-vue-component
npm i pagination-react-component
npm i pagination-angular-component
```

```ts
// v3
import "pagination-js-component/vue";
import { Pagination } from "pagination-js-component/react";
import { PaginationModule } from "pagination-js-component/angular";

// v4
import "pagination-vue-component";
import { Pagination } from "pagination-react-component";
import { PaginationModule } from "pagination-angular-component";
```

```html
// v3
<link rel="stylesheet" href="./node_modules/pagination-js-component/pagination.min.css" />

// v4
<link rel="stylesheet" href="./node_modules/pagination-js-component/dist/pagination.min.css" />
```

```ts
// v2 angular AOT:
import { PaginationModule } from "pagination-js-component/angular";

// v3 angular AOT:
import { PaginationModule } from "pagination-js-component/aot/angular";
```

```ts
// v2
import "pagination-js-component/vue";

// v1
import "pagination-js-component/dist/vue";
```
