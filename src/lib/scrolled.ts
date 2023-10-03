export function scrolled(node: HTMLElement, callback: () => void) {
	const offset = 256;

	function onScroll() {
		const bBox = node.getBoundingClientRect();
		const compared = window.scrollY + offset;
		if (bBox.bottom > compared && bBox.top < compared) {
			callback();
		}
	}

	window.addEventListener('scroll', onScroll);
	return {
		destroy() {
			window.addEventListener('scroll', onScroll);
		}
	};
}
