package handlers

import (
	"sync"
	"net/http"
	"os"
	"html/template"
)

var once = sync.Once{}
var temp = template.Must(template.ParseFiles("./app/templates/index.html"))
var assetsRootPath string

func RootHandler(w http.ResponseWriter, r *http.Request) {
	once.Do(func() {
		if os.Getenv("GO_ENV") == "production" {
			assetsRootPath = "assets"
		} else {
			assetsRootPath = "http://localhost:1234"
		}
	})

	temp.Execute(w, struct {
		AssetsRootPath string
	}{
		assetsRootPath,
	})
}
