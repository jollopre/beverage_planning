/**
 * GenerateId module
 * @module utils/generateId
 */

export const GenerateId = () => {
	let id = 0;
	return () => {
		return ++id;
	}
}