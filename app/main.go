package main

import (
	"net/http"
	"github.com/siquare/attengo/app/handlers"
	"github.com/siquare/attengo/env"
	"fmt"
	"log"
	"os"
)

func main() {
	if os.Getenv("ATTENGO_ENV_ENV") != "production" {
		env.Load()
	}
	
	config := env.GetSpecification()

	http.HandleFunc("/", handlers.RootHandler)
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("./dist"))))

	log.Printf("[INFO] Server running at http://localhost:%d", config.Port)

	http.ListenAndServe(fmt.Sprintf(":%d", config.Port), nil)
}
