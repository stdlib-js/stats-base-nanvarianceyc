/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import AccessorArray = require( '@stdlib/array-base-accessor' );
import nanvarianceyc = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanvarianceyc( x.length, 1.0, new AccessorArray( x ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvarianceyc( '10', 1.0, x, 1 ); // $ExpectError
	nanvarianceyc( true, 1.0, x, 1 ); // $ExpectError
	nanvarianceyc( false, 1.0, x, 1 ); // $ExpectError
	nanvarianceyc( null, 1.0, x, 1 ); // $ExpectError
	nanvarianceyc( undefined, 1.0, x, 1 ); // $ExpectError
	nanvarianceyc( [], 1.0, x, 1 ); // $ExpectError
	nanvarianceyc( {}, 1.0, x, 1 ); // $ExpectError
	nanvarianceyc( ( x: number ): number => x, 1.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvarianceyc( x.length, '10', x, 1 ); // $ExpectError
	nanvarianceyc( x.length, true, x, 1 ); // $ExpectError
	nanvarianceyc( x.length, false, x, 1 ); // $ExpectError
	nanvarianceyc( x.length, null, x, 1 ); // $ExpectError
	nanvarianceyc( x.length, undefined, x, 1 ); // $ExpectError
	nanvarianceyc( x.length, [], x, 1 ); // $ExpectError
	nanvarianceyc( x.length, {}, x, 1 ); // $ExpectError
	nanvarianceyc( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	nanvarianceyc( x.length, 1.0, 10, 1 ); // $ExpectError
	nanvarianceyc( x.length, 1.0, '10', 1 ); // $ExpectError
	nanvarianceyc( x.length, 1.0, true, 1 ); // $ExpectError
	nanvarianceyc( x.length, 1.0, false, 1 ); // $ExpectError
	nanvarianceyc( x.length, 1.0, null, 1 ); // $ExpectError
	nanvarianceyc( x.length, 1.0, undefined, 1 ); // $ExpectError
	nanvarianceyc( x.length, 1.0, [ '1' ], 1 ); // $ExpectError
	nanvarianceyc( x.length, 1.0, {}, 1 ); // $ExpectError
	nanvarianceyc( x.length, 1.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvarianceyc( x.length, 1.0, x, '10' ); // $ExpectError
	nanvarianceyc( x.length, 1.0, x, true ); // $ExpectError
	nanvarianceyc( x.length, 1.0, x, false ); // $ExpectError
	nanvarianceyc( x.length, 1.0, x, null ); // $ExpectError
	nanvarianceyc( x.length, 1.0, x, undefined ); // $ExpectError
	nanvarianceyc( x.length, 1.0, x, [] ); // $ExpectError
	nanvarianceyc( x.length, 1.0, x, {} ); // $ExpectError
	nanvarianceyc( x.length, 1.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanvarianceyc(); // $ExpectError
	nanvarianceyc( x.length ); // $ExpectError
	nanvarianceyc( x.length, 1.0 ); // $ExpectError
	nanvarianceyc( x.length, 1.0, x ); // $ExpectError
	nanvarianceyc( x.length, 1.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	nanvarianceyc.ndarray( x.length, 1, new AccessorArray( x ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvarianceyc.ndarray( '10', 1.0, x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( true, 1.0, x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( false, 1.0, x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( null, 1.0, x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( undefined, 1.0, x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( [], 1.0, x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( {}, 1.0, x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( ( x: number ): number => x, 1.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvarianceyc.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	nanvarianceyc.ndarray( x.length, 1.0, 10, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, '10', 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, true, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, false, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, null, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, undefined, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, [ '1' ], 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, {}, 1, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvarianceyc.ndarray( x.length, 1.0, x, '10', 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, true, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, false, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, null, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, undefined, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, [], 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, {}, 0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvarianceyc.ndarray( x.length, 1.0, x, 1, '10' ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, 1, true ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, 1, false ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, 1, null ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, 1, undefined ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, 1, [] ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, 1, {} ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanvarianceyc.ndarray(); // $ExpectError
	nanvarianceyc.ndarray( x.length ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, 1 ); // $ExpectError
	nanvarianceyc.ndarray( x.length, 1.0, x, 1, 0, 10 ); // $ExpectError
}
