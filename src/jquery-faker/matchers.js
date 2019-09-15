class Exact {
  constructor(selector) {
		this.selector = selector;
	}

	matches(selector) {
		return this.selector === selector;
	}
}

class StartsWith {
	constructor(beginning) {
		this.beginning = beginning;
	}

	matches(selector) {
		return selector.startsWith(this.beginning);
	}
}

module.exports = {Exact, StartsWith};
