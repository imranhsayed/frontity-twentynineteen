/**
 * Calls the given function after the given interval.
 *
 * @param {Object} func Function name.
 * @param {number} wait Time in milliseconds.
 *
 * @return {Function} Debounced function.
 */
export const debounce = ( func, wait ) => {

	let timeout;

	/**
	 * Debounce function.
	 */
	return function() {

		const context = this,
		      args = arguments;

		/**
		 * Later function.
		 */
		const later = function() {
			timeout = null;
			func.apply( context, args );
		};

		clearTimeout( timeout );

		timeout = setTimeout( later, wait );
	};

};
