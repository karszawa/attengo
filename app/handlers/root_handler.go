package handlers

import (
	"net/http"
	"html/template"
	"github.com/siquare/attengo/env"
)

var temp = template.Must(template.ParseFiles("./app/templates/index.html"))

func RootHandler(w http.ResponseWriter, _ *http.Request) {
	temp.Execute(w, struct {
		AssetsRootPath string
	}{
		env.GetSpecification().Assets.RootPath,
	})
}
