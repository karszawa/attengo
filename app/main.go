package main

import (
	"net/http"
	"github.com/siquare/attengo/app/handlers"
	"github.com/siquare/attengo/env"
	"log"
	"os"
)

func main() {
	if os.Getenv("ENV_ENV") != "production" {
		env.Load()
	}

	port := os.Getenv("PORT")

	http.HandleFunc("/", handlers.RootHandler)
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("./dist"))))

	log.Printf("[INFO] Server running at http://localhost:%s", port)

	http.ListenAndServe(":" + port, nil)
}
