package main

import (
	"echo-render-html/internal/renderer"
	"echo-render-html/web/components/views"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
)

func main() {
	e := echo.New()
	e.Static("/static", "web/assets")
	e.File("/favicon.ico", "web/favicon.ico")

	e.Use(middleware.GzipWithConfig(middleware.GzipConfig{}))

	e.GET("/", func(c echo.Context) error {
		return renderer.Render(c, http.StatusOK, views.Home())
	})

	e.Logger.Fatal(e.Start(":1323"))
}
