package env

import (
	"github.com/joho/godotenv"
)

func Load(filename ...string) {
	if err := godotenv.Load(filename...); err != nil {
		panic(err)
	}
}
