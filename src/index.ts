let reLetters = /[A-Z][^A-Z]/g;
let reLetters2 = /[A-Z]{2,}/g;
let reWord = /[a-z]+[0-9]*/gi;

let cache = Object.create(null);

export function snakeCase(str: any, useCache?: boolean): string {
	str = String(str);

	let value: string;

	return (
		(useCache && cache[str]) ||
		((value = (
			(str as string)
				.replace(reLetters, word => '-' + word)
				.replace(reLetters2, word => '-' + word)
				.match(reWord) || []
		)
			.join('_')
			.toLowerCase()),
		useCache ? (cache[str] = value) : value)
	);
}
