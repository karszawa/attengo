package main

import (
	"os"
	"net/http"
	"github.com/siquare/attengo/app/config"
	"log"
	"github.com/siquare/attengo/app/handlers"
)

func getPort() string {
	port := os.Getenv("PORT")

	if port == "" {
		port = config.GetConfiguration().DefaultPort
		log.Println("$PORT is not set, use ", port)
	}

	return port
}

func main() {
	http.HandleFunc("/", handlers.RootHandler)

	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("./dist"))))

	http.ListenAndServe(":" + getPort(), nil)
}
