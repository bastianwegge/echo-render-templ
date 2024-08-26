.PHONY: templ-watch
templ-watch:
	templ generate -watch -path ./web/components

.PHONY: air
air:
	air

.PHONY: css-watch
css-watch:
	npm run build:watch

.PHONY: dev
dev: css-watch templ-watch air