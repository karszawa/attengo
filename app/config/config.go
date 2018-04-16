package config

import (
	"os"
	"log"
	"encoding/json"
	"sync"
)

type Configuration struct {
	DefaultPort string `json:"DEFAULT_PORT"`
}

var configuration Configuration
var once sync.Once

func GetConfiguration() Configuration {
	once.Do(func() {
		file, err := os.Open("app/config/config.json")

		if err != nil {
			log.Fatal(err)
		}

		defer file.Close()

		decoder := json.NewDecoder(file)
		err = decoder.Decode(&configuration)

		if err != nil {
			log.Fatal(err)
		}
	})

	return configuration
}
