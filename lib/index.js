/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Negative binomial distribution expected value.
*
* @module @stdlib/stats-base-dists-negative-binomial-mean
*
* @example
* var mean = require( '@stdlib/stats-base-dists-negative-binomial-mean' );
*
* var v = mean( 100, 0.2 );
* // returns 400
*
* v = mean( 20, 0.5 );
* // returns 20
*/

// MODULES //

var mean = require( './main.js' );


// EXPORTS //

module.exports = mean;
