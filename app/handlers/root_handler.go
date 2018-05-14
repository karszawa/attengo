package handlers

import (
	"net/http"
	"html/template"
	"github.com/siquare/attengo/env"
	"github.com/gin-gonic/gin/json"
	"log"
)

var temp = template.Must(template.ParseFiles("./app/templates/index.html"))

func RootHandler(w http.ResponseWriter, _ *http.Request) {
	firebase := env.GetSpecification().Firebase
	bytes, err := json.Marshal(firebase)

	if err != nil {
		w.WriteHeader(500)
		log.Fatal(err)
	}

	temp.Execute(w, struct {
		AssetsRootPath string
		FirebaseConfig template.HTML
	}{
		env.GetSpecification().Assets.RootPath,
		template.HTML(string(bytes)),
	})
}
