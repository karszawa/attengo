package main

import (
	"os"
	"net/http"
	"fmt"
	"github.com/siquare/attengo/app/config"
	"log"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = config.GetConfiguration().DefaultPort
		log.Println("$PORT is not set, use ", port)
	}

	http.HandleFunc("/", handler)
	http.ListenAndServe(":" + port, nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, %q", r.URL.Path[1:])
}
