class Config {
  constructor(config) {
    this.config = config;
  }

  when(matcher) {
    return new ConfigWithMatcher(
      [...this.config],
      matcher
    );
  }

  build() {
    return selector => {
      const fn = this.config.find(
        matcher => matcher.matches(selector)
      );
      return fn();
    };
  }
}

class ConfigWithMatcher {
  constructor(config, matcher) {
    this.config = config;
    this.matcher = matcher;
  }

  then(fn) {
    return new Config([
      ...this.config,
      {matcher: this.matcher, fn},
    ]);
  }
}

module.exports = new Config([]);
