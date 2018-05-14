package env

import (
	"github.com/joho/godotenv"
	"os"
)

func Load(filename ...string) {
	if _, err := os.Stat("./env"); err == nil {
		if err := godotenv.Load(filename...); err != nil {
			panic(err)
		}
	}
}
